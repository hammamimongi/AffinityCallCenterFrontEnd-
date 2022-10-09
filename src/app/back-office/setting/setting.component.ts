import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleType } from 'src/entities/User/RoleType';
import { User } from 'src/entities/User/user';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  username:string="hammamiMongi98";
  adminDataByUsername:User={"id":1,"email":"test","username":"test","password":"test","roles":[{"id":2,"name":"test"}],"mobile":1000000,"lastConn":""};
  constructor( private activatedRoute: ActivatedRoute , private userService : UserServiceService , private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.username= params['username'];
      if(this.username!="khalil")
      router.navigate(['/Settings/khalil']);
    })
   }

  ngOnInit(): void {
    this.GetUserByUserName();
  }

  public GetUserByUserName() { 
    this.userService.GetUserByUserName(this.username).subscribe(
      result=>{
        this.adminDataByUsername=result;
      })
  }

  onClickSubmit(admin:{id:number,email:string,username:string,password:string,roles:any[],mobile:number,lastConn:string}){ 
    this.adminDataByUsername.email=admin.email;
    this.adminDataByUsername.username=admin.username;
    this.adminDataByUsername.mobile=admin.mobile;
    this.adminDataByUsername.password=admin.username;
    console.log(this.adminDataByUsername);

    this.userService.UpdateUser(this.adminDataByUsername).subscribe(data=> { 
    });
  }

}
