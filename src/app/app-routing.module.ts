import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './front-office/contact-us/contact-us.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { FrontOfficeComponent } from './front-office/front-office.component';

const routes: Routes = [
  { path:"index" , component:FrontOfficeComponent },
  { path:"contactUs" , component:ContactUsComponent },
  { path:"footer" , component:FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
