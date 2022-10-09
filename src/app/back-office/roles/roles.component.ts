import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { UserServiceService } from 'src/services/user-service.service';
import { User } from '../../../entities/User/user';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  public addRoleBtn=false;
  public updateAdmin=false;
  public updateAdmine=false;
  adminData: User[]=[] ;
  
   constructor( private userService : UserServiceService) { }
  
   addAdminForm = new FormGroup({
    pseudo:new FormControl(''),
    email:new FormControl(''),
  });

  updateAdminForm = new FormGroup({
    pseudo:new FormControl(''),
    email:new FormControl(''),
  });

  ngOnInit(): void {
        this.getAllUser();
        console.log(this.adminData+"- admin data");
  }

  addRoleFnct(){
    this.addRoleBtn=!this.addRoleBtn;
    console.log(this.addRoleBtn+"--after");
    console.log(this.adminData +"--adminData");
    

  }

  deleteDataAdmin(idUser: number){
    this.adminData.forEach((value,index)=> { 
      if(value.id==idUser){
        this.userService.DeleteUser(value.id).subscribe(data=> { 
        })
        this.adminData.splice(index,1);
      }
    })  
    
  }
  
  getAllUser(){
    this.userService.getAllUser().subscribe(
      result=>{
        this.adminData=result;
        console.log(this.adminData+"- admin data");
      }
    )
  }
  
  
}
