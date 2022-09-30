import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-folder-mail',
  templateUrl: './folder-mail.component.html',
  styleUrls: ['./folder-mail.component.scss']
})
export class FolderMailComponent implements OnInit {

  @Output() public testBtnChild = new EventEmitter();


  list=[
    { 
      name:"inbox",
      path:"inbox",
      icon:"fa-solid fa-house"
    },
    { 
      name:"send",
      path:"sent",
      icon:"fa-solid fa-house"
    },
    { 
      name:"important",
      path:"important",
      icon:"fa-solid fa-house"
    },
    { 
      name:"trash",
      path:"trash",
      icon:"fa-solid fa-house"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  public updateEtatSend(name:string){
    this.testBtnChild.emit(name); 
  }

}
