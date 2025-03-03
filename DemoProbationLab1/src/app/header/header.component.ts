import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLanguage: string = "Tiếng Việt";
  constructor() { }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
  }

}
