import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  list=[
    { 
      name:"dashboard",
      icon:"fa-solid fa-house"
    },
    { 
      name:"Emails",
      icon:"fa-solid fa-house"
    },
    { 
      name:"orders",
      icon:"fa-solid fa-house"
    },
    { 
      name:"home",
      icon:"fa-solid fa-house"
    },
  ]

  constructor() {}

  ngOnInit() {}
}
