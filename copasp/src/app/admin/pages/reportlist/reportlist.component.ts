import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../../core/models/product.model';
import { productservice } from '../../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.css']
})
export class ReportlistComponent implements OnInit {

  public products: product[] = [];

  constructor(
    public productservice: productservice,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      const tipo = params.get('tipo');
      console.log("id", tipo);
      if (tipo) {
        this.products = this.productservice.getContactByType(tipo);
      } else {
        this.products = this.productservice.getProduct();
      }
    });
  }

  volverPpal() {
    this.router.navigate(['/home']);
  }
}
