import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mails } from 'src/entities/Mails/mails';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  url="http://localhost:8087/SpringMVC/boitMail/";
  constructor( private http:HttpClient) { }

  public getAllMail():Observable<Mails[]>{ 
    return this.http.get<Mails[]>(this.url+"getAllMail");
  }

  public getMailById(idMail:number):Observable<Mails>{ 
    return this.http.get<Mails>(this.url+"getMail/"+idMail);
  }

  public updateEtatMail(idMail:number):Observable<any>{ 
    return this.http.put(this.url+"updateEtatMail/"+idMail,idMail);
  }

  public readUnread(idMail:number):Observable<any>{ 
    return this.http.put(this.url+"readUnread/"+idMail,idMail);
  }

public deleteMail(idMail:number):Observable<any>{ 
  return this.http.delete(this.url+"deleteMail/"+idMail);
}

public sendMailToUser(boitMail:Mails):Observable<Mails[]>{ 
  return this.http.post<Mails[]>(this.url+"sendMailToUser",boitMail);
}

public sendMailToAdmin(boitMail:Mails):Observable<Mails[]>{ 
  return this.http.post<Mails[]>(this.url+"sendMailToAdmin",boitMail);
}


}
