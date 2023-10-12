import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isSearchInputActive = false;

  toggleSearchInput(activate: boolean) {
    this.isSearchInputActive = activate;
  }
}
