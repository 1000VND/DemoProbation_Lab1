import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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

    this.setLanguage();
  }

  /**
   * Tự động login khi ghi nhớ mật khẩu từ phiên làm việc trước
   */
  autoLogin() {
    const user = this.accountService.getCurrentUser();
    if (user) {
      this.accountService.setCurrentUser(user);
      this.router.navigate(['/home']);
    }
  }

  /**
   * Load lại ngôn ngữ đã được áp dụng từ phiên làm việc trước
   * Nếu chưa có sẽ cấu hình mặc định là Tiếng Việt
   */
  setLanguage() {
    let language = localStorage.getItem('lang');
    if (language) {
      this.translate.use(language.toString());
    } else {
      this.translate.setDefaultLang('vi');
      this.translate.use('vi');
    }
  }
}
