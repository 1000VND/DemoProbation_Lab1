import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../../app-base.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AppBaseModule],
  standalone: true,
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;
  selectedIndex: number = 0;
  slideInterval: number = 5000;
  userName: string = '';
  passWord: string = '';
  rememberMe: boolean = false;

  images: { url: string, img: string, title: string, shortContent: string }[] = [
    {
      url: 'https://bagps.vn/ra-mat-tinh-nang-tra-cuu-phuong-tien-tren-ung-dung-di-dong-ba-gps-copy-d4155',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2025/Gps/driver_check_vehicle_Ba.jpg',
      title: 'VehicleLookupTitle',
      shortContent: 'VehicleLookupShortContent'
    },
    {
      url: 'https://zalo.me/bagpsvn',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2023/Gps/ba/ba_zalo_2023.jpg',
      title: 'ZaloAccessTitle',
      shortContent: 'ZaloAccessShortContent'
    },
    {
      url: 'https://www.baexpress.io',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/baexpress.jpg',
      title: 'TransportManagementTitle',
      shortContent: 'TransportManagementShortContent'
    },
    {
      url: 'https://bagps.vn/dau-ghi-camera-giam-sat-o-to-nghi-dinh-10-p47',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/TetAmLich/chuc_mung_nam_moi.png',
      title: 'CameraMonitoringTitle',
      shortContent: 'CameraMonitoringShortContent'
    },
    {
      url: 'https://bagps.vn/quy-dinh-lap-camera-giam-sat-theo-nghi-dinh-102020-thong-tu-122020-d938',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2020/NghiDinh10/BANNER_1.jpg',
      title: 'RegulationInfoTitle',
      shortContent: 'RegulationInfoShortContent'
    }
  ]

  constructor(
    private fb: FormBuilder,
    private userService: AccountService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    this.autoSlideImage();
  }

  /**
   * Nút đăng nhập
   */
  onSubmit() {
    const {
      username,
      password,
      rememberMe
    } = this.loginForm.value;

    this.userService.login(username, password, rememberMe).subscribe(success => {
      if (success) {
        this.router.navigate(['/personnel-management']);
      }
    })
  }

  /**
   * Hiển thị mật khẩu
   */
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  /**
   * Ấn vào chấm sẽ đổi ảnh
   */
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  /**
   * Tự động chuyển ảnh
   */
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
