import { Component } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  showFiller = false;
  toggled = true;
  subscription: Subscription;

  constructor(private _sidenavService: SidenavService) {
    this.subscription = new Subscription();
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