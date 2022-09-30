import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office/back-office.component';
import { CardSecurityComponent } from './back-office/card-security/card-security.component';
import { CardComponent } from './back-office/card/card.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';
import { MailBoxComponent } from './back-office/mail-box/mail-box.component';
import { NavbarComponent } from './back-office/navbar/navbar.component';
import { RolesComponent } from './back-office/roles/roles.component';
import { SidebarComponent } from './back-office/sidebar/sidebar.component';
import { ClientsComponent } from './front-office/clients/clients.component';
import { ContactUsComponent } from './front-office/contact-us/contact-us.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { OurServiceComponent } from './front-office/our-service/our-service.component';
import { WorksComponent } from './front-office/works/works.component';

const routes: Routes = [
  { path:"index" , component:FrontOfficeComponent },
  { path:"contactUs" , component:ContactUsComponent },
  { path:"works" , component:WorksComponent },
  { path:"footer" , component:FooterComponent },
  { path:"ourService" , component:OurServiceComponent },
  { path:"clients" , component:ClientsComponent },
  { path:"admin" , component:BackOfficeComponent },
  { path:"adminNavbar" , component:NavbarComponent },
  { path:"adminSidebar" , component:SidebarComponent },
  { path:"cardSecurity" , component:CardSecurityComponent },
  { path:"roles" , component:RolesComponent },
  { path:"card" , component:CardComponent },
  { path:"dashboard" , component:DashboardComponent },
  { path:"Emails" , component:MailBoxComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
