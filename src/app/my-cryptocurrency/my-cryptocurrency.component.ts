import { Component, OnInit } from '@angular/core';
import { MyCurrencyListService } from '../services/my-currency-list.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-my-cryptocurrency',
  templateUrl: './my-cryptocurrency.component.html',
  styleUrls: ['./my-cryptocurrency.component.scss']
})
export class MyCryptocurrencyComponent implements OnInit {
  userData: any;
  constructor(
    private _MyCurrencyListService: MyCurrencyListService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this._MyCurrencyListService.currentUserData.subscribe(myUserData => this.userData = myUserData ) 
  }

  onDeleteItem(item): void {
    let currentItem: any;
    let index: number;
    item.isSelected = false;
    
    index = this.userData.userList.indexOf(item);
    event.stopPropagation();
    this.userData.userList.splice(index,1);
    this.authService.updateUserData(this.userData);
    localStorage.setItem('my_currency', JSON.stringify(this.userData));
  }
}
