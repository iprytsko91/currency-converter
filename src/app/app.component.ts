import { Component } from '@angular/core';
import { CurrencyService } from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private cur: CurrencyService) {
    this.cur.getRates().subscribe(res => {
      console.log(res)
    })
  }
}
