import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../primeng.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [PrimengModule],
  standalone: true,
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;
  selectedIndex: number = 0;
  slideInterval: number = 5000;

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
  responsiveOptions: any[] | undefined;

  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]

    this.autoSlideImage();

  }
  onSubmit() {
    console.log(this.loginForm.value);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  autoSlideImage() {
    setInterval(() => {
      if (this.selectedIndex === this.images.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    }, this.slideInterval);
  }

}
