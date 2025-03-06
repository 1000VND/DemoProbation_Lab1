import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../app-base.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [AppBaseModule],
})
export class HeaderComponent implements OnInit {

  visible: boolean = false;
  languages = [
    { code: 'vi', name: 'Vietnamese', icon: 'assets/vn-flag.png' },
    { code: 'en', name: 'English', icon: 'assets/gl-flag.png' },
    // Thêm các ngôn ngữ khác tại đây
  ];

  selectedLanguage: any = this.languages[0];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.languageConfig();
  }

  /**
   * Thay đổi ngôn ngữ hệ thống
   * @param language 
   */
  changeLanguage(language: any) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage.code.toString());
    localStorage.setItem('lang', this.selectedLanguage.code);
  }

  /**
   * Đóng/Mở Menu
   */
  openCloseMenu() {
    this.visible = !this.visible;
  }

  /**
   * Hiển thị Label ngôn ngữ mặc định hoặc đã được cấu hình từ
   * phiên làm việc trước
   */
  private languageConfig() {
    let language = localStorage.getItem('lang');
    if (language) {
      this.selectedLanguage = this.languages.find(e => e.code == language)
    } else {
      this.selectedLanguage = this.languages[0]
    }
  }

}
