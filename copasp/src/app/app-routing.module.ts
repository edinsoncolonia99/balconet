import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportlistComponent } from '../app/admin/pages/reportlist/reportlist.component';
import { HomeComponent } from '../app/home/pages/home/home/home.component';
import { AboutusComponent } from '../app/home/pages/aboutus/aboutus/aboutus.component';
import { ContactusComponent } from '../app/home/pages/contactus/contactus/contactus.component';

const appRoutes: Routes = [
  {path: 'report/:tipo', component:ReportlistComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'contact', component:ContactusComponent},
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }