import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppBaseModule } from './app-base.module';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from './services/account.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AppBaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers: [MessageService],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private accountService: AccountService,
    private router: Router
  ) {
    this.autoLogin();
    let language = localStorage.getItem('lang');
    if (language) {
      this.translate.use(language.toString());
    } else {
      this.translate.setDefaultLang('vi');
      this.translate.use('vi');
    }
  }

  autoLogin() {
    const user = this.accountService.getCurrentUser();
    if (user) {
      this.accountService.setCurrentUser(user);
      this.router.navigate(['/home']);
    }
  }
}
