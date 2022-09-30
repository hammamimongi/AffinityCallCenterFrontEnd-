import { Component, OnInit,EventEmitter ,Output  } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  @Output() public DetailMail = new EventEmitter<any>();
  @Output() public DetailMailId = new EventEmitter<any>();
  changeStarStyleType=false
  
  mails:any[]=[{"id":0,"adr":"hammami@mongi.tn","object":"recrutement stage pfe","text":"yaw mala bi3a  tawa","time":"5min","important":0},
  {"id":1,"adr":"ikram.jelassi@esprit.tn","object":"demande de  stage pfe","text":"jaw méla ","time":"1h","important":1}
]
  constructor() { }

  ngOnInit(): void {
    console.log(this.mails[0].adr);
  }
  removeMail(idMail : number){ 
    console.log(idMail);
    this.mails.forEach((value,index)=> { 
      console.log(value.id);

      if(value.id==idMail)
      this.mails.splice(index,1);
    })  
    console.log(this.mails);

  }

  EditImportantMail(mail:any){
    console.log(mail.id+" -"+mail.important+"  "+" before");
    let index = this.mails.indexOf(mail);
    if(mail.important==0)
      mail.important=1;
      else
      mail.important=0

    this.mails[index]=mail;
    
    console.log(mail.id+" -"+mail.important+" after");

  }
  updateEtatSend(id:number){
    let path="detailsMail";
    console.log(id+"------------");
    this.DetailMail.emit(path);     
    this.DetailMailId.emit(id);     
  }
}
