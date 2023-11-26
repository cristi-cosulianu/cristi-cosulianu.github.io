import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _sidenavService: SidenavService) {}

  toggleSidenav() {
    console.log("Toggle sidenav!");
    this._sidenavService.toggle();
  }

}