import { Component, OnInit } from '@angular/core';
import { Mails } from 'src/entities/Mails/mails';
import { MailServiceService } from 'src/services/mail-service.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {

  constructor( private mailsService:MailServiceService ) { }

  ngOnInit(): void {
  }
  onClickSubmit(admin:{adrMail:string,objectMail:string,textMail:string}) {
    let mail = new Mails();
    mail.adrMail=admin.adrMail;
    mail.objectMail=admin.objectMail;
    mail.textMail=admin.textMail;
    alert(mail.adrMail+" "+mail.textMail);
    this.mailsService.sendMailToUser(mail).subscribe();
 }

}
