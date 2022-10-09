import { Component, OnInit } from '@angular/core';
import { Mails } from 'src/entities/Mails/mails';
import { MailServiceService } from 'src/services/mail-service.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  mails:Mails[]=[];
changeStarStyleType=false

  constructor( private boiteMailService:MailServiceService ) { }

  ngOnInit(): void {
    this.getAllMailApi();
  }

  removeMail(idMail : number){ 
    console.log(idMail);
    this.mails.forEach((value,index)=> { 

      if(value.idMail==idMail)
      this.mails.splice(index,1);
    })  
    this.deleteMailApi(idMail);

  }

  EditImportantMail(mail:any){
    let index = this.mails.indexOf(mail);
    if(mail.typeMail=="simpleMail")
      mail.typeMail="important";
      else
      mail.typeMail="simpleMail";

    this.mails[index]=mail;
    this.updateEtatMailApi(mail.idMail);

    console.log(mail.idMail+" -"+mail.typeMail+" after");

  }

  updateEtatMailApi(idMail:number){
    this.boiteMailService.updateEtatMail(idMail).subscribe();
  }
  deleteMailApi(idMail:number){
    this.boiteMailService.deleteMail(idMail).subscribe();
  }
  getAllMailApi(){
    this.boiteMailService.getAllMail().subscribe(
      result=>{
        
        this.mails=result.filter(r=>r.typeSendMail=="send");
      }
    ) 
  }

}
