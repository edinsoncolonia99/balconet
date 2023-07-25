import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input() product : product | undefined;
  
  constructor(){

  }

  ngOnInit(): void {
      
  }
}
