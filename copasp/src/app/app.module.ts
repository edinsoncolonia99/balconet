import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layaout/header/header/header.component';
import { FooterComponent } from './shared/layaout/footer/footer/footer.component';
import { AboutusComponent } from './home/pages/aboutus/aboutus/aboutus.component';
import { ContactusComponent } from './home/pages/contactus/contactus/contactus.component';
import { HomeComponent } from './home/pages/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
