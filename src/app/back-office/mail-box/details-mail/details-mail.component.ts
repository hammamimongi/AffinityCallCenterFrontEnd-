import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details-mail',
  templateUrl: './details-mail.component.html',
  styleUrls: ['./details-mail.component.scss']
})
export class DetailsMailComponent implements OnInit {
  
  @Input() public sendDetailMails:number | undefined;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("sendDetailMails "+this.sendDetailMails)
  }

}
