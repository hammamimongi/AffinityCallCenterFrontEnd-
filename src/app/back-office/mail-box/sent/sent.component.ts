import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  mails:any[]=[{"id":1,"adr":"hammami@mongi.tn","object":"recrutement stage pfe","text":"yaw mala bi3a  tawa","time":"5min"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
