import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { HeaderComponent } from './front-office/header/header.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HeroSectionComponent } from './front-office/hero-section/hero-section.component';
import { ContactUsComponent } from './front-office/contact-us/contact-us.component';
import { WorksComponent } from './front-office/works/works.component';
import { OurServiceComponent } from './front-office/our-service/our-service.component';
import { ClientsComponent } from './front-office/clients/clients.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { NavbarComponent } from './back-office/navbar/navbar.component';
import { SidebarComponent } from './back-office/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ContactUsComponent,
    WorksComponent,
    OurServiceComponent,
    ClientsComponent,
    BackOfficeComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
