import { Component, OnInit,EventEmitter ,Output  } from '@angular/core';
import { Mails } from 'src/entities/Mails/mails';
import { MailServiceService } from 'src/services/mail-service.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  @Output() public DetailMail = new EventEmitter<any>();
  @Output() public DetailMailId = new EventEmitter<any>();
  changeStarStyleType=false
  
  mails:Mails[]=[];

  constructor( private boiteMailService : MailServiceService) { }

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
  updateEtatSend(id:number){
    let path="detailsMail";
    console.log(id+"------------");
    this.DetailMail.emit(path);     
    this.DetailMailId.emit(id);     
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
        this.mails=result.filter(f=>f.typeSendMail=="receive");
        console.log(this.mails+"- mails data");
      }
    )
    
  }

}
