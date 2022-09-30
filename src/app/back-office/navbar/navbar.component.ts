import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  SidebarNavToggle(){
    this.menuStatus= !this.menuStatus;
    console.log(this.menuStatus);

    this.sideNavToggled.emit(this.menuStatus);
  }

}
