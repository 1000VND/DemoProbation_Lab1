import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {

  languages = [
    { code: 'vi', name: 'Tiếng Việt', icon: 'assets/vn-flag.png' },
    { code: 'en', name: 'English', icon: 'assets/gl-flag.png' },
    // Thêm các ngôn ngữ khác tại đây
  ];

  selectedLanguage: any = this.languages[0];

  constructor() { }

  ngOnInit() {
  }

  changeLanguage(language: any) {
    this.selectedLanguage = language;
  }

}
