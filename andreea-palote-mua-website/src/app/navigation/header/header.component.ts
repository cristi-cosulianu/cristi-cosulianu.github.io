import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggled = false;
  subscription: Subscription;

  menus = ["Acasa", "Despre", "Cursuri", "Magazin", "Contact", "Bonusuri"]
  
  constructor(private _sidenavService: SidenavService) {
    this.subscription = new Subscription();
  }

  toggleSidenav() {
    console.log("Toggle sidenav!");
    this._sidenavService.toggle();
  }

  ngOnInit() {
    this.subscription = this._sidenavService.toggled$.subscribe(
      toggled => this.toggled = toggled
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}