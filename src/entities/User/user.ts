import { RoleType } from "./RoleType";

export class User {
    id:number=0;
    email:string="";
    username:string="";
    password:string="";
    mobile:number=0;
    roles=[{
        id:0,
        name:"null"
    }];
    lastConn:any;
    
}
