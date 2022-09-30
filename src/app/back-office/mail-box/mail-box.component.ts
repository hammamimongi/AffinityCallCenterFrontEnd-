import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {


  public testBtn:any="inbox";
  public detailsMessageChildToParent:any;
  idMailDetailMail:number=-1;

  ngOnInit(): void {
    
  }
  updateEtat(){ 
    this.testBtn="sendMail";
  }
  updateEtatinbox(){ 
    console.log("-----"+this.testBtn[0]);
    this.testBtn="inbox";
    
    console.log("-----"+this.testBtn[0].path);
  }
  

}
