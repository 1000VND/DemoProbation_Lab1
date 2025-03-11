import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../app-base.module';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [AppBaseModule],
  standalone: true
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
