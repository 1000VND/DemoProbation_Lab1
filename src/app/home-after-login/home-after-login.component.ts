import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../app-base.module';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'home-after-login',
  templateUrl: './home-after-login.component.html',
  styleUrls: ['./home-after-login.component.scss'],
  imports: [AppBaseModule]
})
export class HomeAfterLoginComponent implements OnInit {

  constructor(
    private userService: AccountService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }
}
