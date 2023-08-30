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
    {name: 'Application', routeTo: 'application'},
  ]
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu(){
    this.showMenu = false;
  }
}
