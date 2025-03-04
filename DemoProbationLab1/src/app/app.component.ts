import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from './primeng.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';

  images: { url: string, img: string }[] = [
    {
      url: 'https://bagps.vn/ra-mat-tinh-nang-tra-cuu-phuong-tien-tren-ung-dung-di-dong-ba-gps-copy-d4155',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2025/Gps/driver_check_vehicle_Ba.jpg'
    },
    {
      url: 'https://zalo.me/bagpsvn',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2023/Gps/ba/ba_zalo_2023.jpg'
    },
    {
      url: 'https://www.baexpress.io',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/baexpress.jpg'
    },
    {
      url: 'https://bagps.vn/dau-ghi-camera-giam-sat-o-to-nghi-dinh-10-p47',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/TetAmLich/chuc_mung_nam_moi.png'
    },
    {
      url: 'https://bagps.vn/quy-dinh-lap-camera-giam-sat-theo-nghi-dinh-102020-thong-tu-122020-d938',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2020/NghiDinh10/BANNER_1.jpg'
    }
  ]
}
