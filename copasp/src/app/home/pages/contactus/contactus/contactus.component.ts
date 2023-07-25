import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router: Router){

  }

  abrirWhatsApp(): void {
    const numeroWhatsApp = '0999470243';  
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Hola,%20quisiera%20hacer%20una%20consulta.`;
    window.open(urlWhatsApp, '_blank');
  }


  volverPpal(){
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
      
  }
}
