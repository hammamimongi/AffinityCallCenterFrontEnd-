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
import { CardSecurityComponent } from './back-office/card-security/card-security.component';
import { RolesComponent } from './back-office/roles/roles.component';
import { MailBoxComponent } from './back-office/mail-box/mail-box.component';
import { CardComponent } from './back-office/card/card.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';
import { FolderMailComponent } from './back-office/mail-box/folder-mail/folder-mail.component';
import { InboxComponent } from './back-office/mail-box/inbox/inbox.component';
import { SentComponent } from './back-office/mail-box/sent/sent.component';
import { SendMailComponent } from './back-office/mail-box/send-mail/send-mail.component';
import { DetailsMailComponent } from './back-office/mail-box/details-mail/details-mail.component';

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
    SidebarComponent,
    CardSecurityComponent,
    RolesComponent,
    MailBoxComponent,
    CardComponent,
    DashboardComponent,
    FolderMailComponent,
    InboxComponent,
    SentComponent,
    SendMailComponent,
    DetailsMailComponent
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
