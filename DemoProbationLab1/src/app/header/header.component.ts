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
    let language = localStorage.getItem('lang');
    if (language) {
      this.selectedLanguage = this.languages.find(e => e.code == language)
    } else {
      this.selectedLanguage = this.languages[0]
    }
  }

  changeLanguage(language: any) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage.code.toString());
    localStorage.setItem('lang', this.selectedLanguage.code);
  }

  openCloseMenu() {
    this.visible = !this.visible;
  }

  openLink() {
    window.open('https://bagps.vn/tel:1900%206464', '_blank');
  }


}
