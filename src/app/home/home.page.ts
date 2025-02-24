import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  userName: string = 'Ivan Prytsko';
  imagePath: string = 'assets/img/currency-converter-logo.webp';
  constructor() {}

  logout() {
    console.log('Logging out...');
  }
}
