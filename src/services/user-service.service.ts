import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/entities/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url="http://localhost:8087/SpringMVC/user/";
  constructor( private http:HttpClient  ) { }
  

  public addAdmin(user:User){ 
    console.log(user+" user test");
    return this.http.post<User>(this.url+"addAdmin",user);
  }

  public getAllUser():Observable<User[]> { 
    return this.http.get<User[]>(this.url+"AllUser");
  }

  public UpdateLastConn():Observable<User> { 
    return this.http.get<User>(this.url+"AllUser");
  }
  public GetUserByUserName(username:string):Observable<User> { 
    return this.http.get<User>(this.url+"GetUser/"+username);
  }
  public DeleteUser(id:number):Observable<any>{
    console.log("- admin to delete");
     return this.http.delete(this.url+"DeleteUser/"+id);
  }
  public UpdateUser(user:User):Observable<User> { 
    return this.http.put<User>(this.url+"UpdateUser",user);
  }

}
