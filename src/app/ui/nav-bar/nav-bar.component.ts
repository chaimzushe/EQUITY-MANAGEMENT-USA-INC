import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  links = [
    {name: 'Home', routeTo: 'home'},
    {name: 'About', routeTo: 'about'},
    {name: 'Contact', routeTo: 'contact'},
    {name: 'Pay Rent', routeTo: 'https://Equitymgmt.twa.rentmanager.com', external: true},
    {name: 'Application', routeTo: 'https://secure.weimark.com/ifw/7586f3e03a2ae6f186a95b9a0e6ecb61/924/new' , external: true},
  ]
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu(){
    this.showMenu = false;
  }
}
