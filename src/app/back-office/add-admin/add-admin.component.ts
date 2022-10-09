import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../entities/User/user';
import { FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  @ViewChild('role') role !: ElementRef;
	selectedrole = 1;
  mySelect = 1;

  
  constructor( private userService : UserServiceService) { }
  adminData?: User;
  

  addAdminForm = new FormGroup({
    usernameudo:new FormControl(''),
    email:new FormControl(''),
  });
  ngOnInit(): void {
  }
  onSelected():void {
    this.selectedrole = this.role.nativeElement.value;
    console.log(this.selectedrole+" roooole")
  }
  onClickSubmit(admin:{id:number,email:string,username:string,password:string,roles:any[],mobile:number,lastConn:string}) {
    let adminDataForm = new User();
    adminDataForm.email=admin.email;
    adminDataForm.username=admin.username;
    adminDataForm.mobile=admin.mobile;
    adminDataForm.password=admin.username;
    adminDataForm.roles[0]={id:this.selectedrole,name:"null"};
    this.adminData=adminDataForm;
    console.log(adminDataForm);

    this.userService.addAdmin(adminDataForm).subscribe();
 }


}
