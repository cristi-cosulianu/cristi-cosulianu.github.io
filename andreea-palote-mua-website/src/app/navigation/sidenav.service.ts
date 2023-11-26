import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private _sideNavToggleSource = new BehaviorSubject<boolean>(false);

  public toggled$ = this._sideNavToggleSource.asObservable();

  toggle(){
    console.log("Service toggle!");
    this._sideNavToggleSource.next(!this._sideNavToggleSource.getValue());
  }

  constructor() { }
}
