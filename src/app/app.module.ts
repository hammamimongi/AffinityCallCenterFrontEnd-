import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { HeaderComponent } from './front-office/header/header.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HeroSectionComponent } from './front-office/hero-section/hero-section.component';
import { ContactUsComponent } from './front-office/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
