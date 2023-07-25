import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layaout/header/header/header.component';
import { FooterComponent } from './shared/layaout/footer/footer/footer.component';
import { AboutusComponent } from './home/pages/aboutus/aboutus/aboutus.component';
import { ContactusComponent } from './home/pages/contactus/contactus/contactus.component';
import { HomeComponent } from './home/pages/home/home/home.component';
import { ReportComponent } from './admin/pages/report/report.component';
import { ReportdetailComponent } from './admin/pages/reportdetail/reportdetail.component';
import { ReportlistComponent } from './admin/pages/reportlist/reportlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    ReportComponent,
    ReportdetailComponent,
    ReportlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
