import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../app-base.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

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

  images: { url: string, img: string, title: string, shortContent: string }[] = [
    {
      url: 'https://bagps.vn/ra-mat-tinh-nang-tra-cuu-phuong-tien-tren-ung-dung-di-dong-ba-gps-copy-d4155',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2025/Gps/driver_check_vehicle_Ba.jpg',
      title: 'TRA CỨU PHƯƠNG TIỆN DÀNH CHO LÁI XE',
      shortContent: 'BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe, tra cứu phạt nguội ngay trên ứng dụng di động. Tìm hiểu ngay trong bài viết dưới đây!'
    },
    {
      url: 'https://zalo.me/bagpsvn',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2023/Gps/ba/ba_zalo_2023.jpg',
      title: 'TRUY CẬP ZALO NGAY',
      shortContent: 'BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe, tra cứu phạt nguội ngay trên ứng dụng di động. Tìm hiểu ngay trong bài viết dưới đây! BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe,'
    },
    {
      url: 'https://www.baexpress.io',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/baexpress.jpg',
      title: 'GIẢI PHÁP ĐIỀU HÀNH VẬN TẢI TOÀN DIÊN',
      shortContent: 'BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe, tra cứu phạt nguội ngay trên ứng dụng di động. Tìm hiểu ngay trong bài viết dưới đây!'
    },
    {
      url: 'https://bagps.vn/dau-ghi-camera-giam-sat-o-to-nghi-dinh-10-p47',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/TetAmLich/chuc_mung_nam_moi.png',
      title: 'GIẢI PHÁP CAMERA GIÁM SÁT',
      shortContent: 'BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe, tra cứu phạt nguội ngay trên ứng dụng di động. Tìm hiểu ngay trong bài viết dưới đây!'
    },
    {
      url: 'https://bagps.vn/quy-dinh-lap-camera-giam-sat-theo-nghi-dinh-102020-thong-tu-122020-d938',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2020/NghiDinh10/BANNER_1.jpg',
      title: 'THÔNG TIN QUY ĐỊNH LẮP CAMERA GIÁM SÁT',
      shortContent: 'BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe, tra cứu phạt nguội ngay trên ứng dụng di động. Tìm hiểu ngay trong bài viết dưới đây!'
    }
  ]

  constructor(
    private fb: FormBuilder,
    private userService: AccountService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(200)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    this.autoSlideImage();

  }

  onSubmit() {
    const {
      username,
      password,
      rememberMe
    } = this.loginForm.value;

    this.userService.login(username, password, rememberMe).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
      }
    })
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

  getShortContent(content: string, maxLength: number = 200): string {
    return content.length > maxLength ? content.substring(0, maxLength) + "..." : content;
  }

}
