import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../../app-base.module';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'personnel-management',
  templateUrl: './personnel-management.component.html',
  styleUrls: ['./personnel-management.component.scss'],
  imports: [AppBaseModule]
})
export class PersonnelManagementComponent implements OnInit {

  constructor(private userService: AccountService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
