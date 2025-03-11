import { Component, OnInit } from '@angular/core';
import { AppBaseModule } from '../app-base.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
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
      title: 'TRA CỨU PHƯƠNG TIỆN DÀNH CHO LÁI XE',
      shortContent: 'BA GPS ra mắt tính năng Tra cứu phương tiện giúp tài xế dễ dàng theo dõi thời gian lái xe, tra cứu phạt nguội ngay trên ứng dụng di động. Tìm hiểu ngay trong bài viết dưới đây!'
    },
    {
      url: 'https://zalo.me/bagpsvn',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2023/Gps/ba/ba_zalo_2023.jpg',
      title: 'TRUY CẬP ZALO NGAY',
      shortContent: 'Chúng tôi chuyên sản xuất và phân phối các sản phẩm: thiết bị giám sát hành trình 4G, camera giám sát ô tô, các loại cảm biến, phụ kiện và các giải pháp quản trị vận tải thông minh,… phù hợp quy chuẩn, đáp ứng quy định nhà nước mang tới cho doanh nghiệp kinh doanh vận tải sản phẩm chất lượng, bắt kịp xu thế.'
    },
    {
      url: 'https://www.baexpress.io',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/baexpress.jpg',
      title: 'GIẢI PHÁP ĐIỀU HÀNH VẬN TẢI TOÀN DIÊN',
      shortContent: 'BAExpress là giải pháp điều hành nghiệp vụ giao hàng chuyên nghiệp được BA GPS phát triển độc quyền, giúp hoàn thiện quy trình quản lý trong khâu vận hành giao hàng của mỗi doanh nghiệp.'
    },
    {
      url: 'https://bagps.vn/dau-ghi-camera-giam-sat-o-to-nghi-dinh-10-p47',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2021/TetAmLich/chuc_mung_nam_moi.png',
      title: 'GIẢI PHÁP CAMERA GIÁM SÁT',
      shortContent: 'Thiết bị đầu ghi giám sát hành trình tích hợp Camera giám sát trên xe ô tô BA-SmartCamera (BA-CAMND10-1) đáp ứng Nghị đinh 10/2020/NĐ-CP, Nghị định 47/2022/NĐ-CP, hợp chuẩn TCVN 13396:2021, hợp chuẩn QCVN 31:2014/BGTVT, hợp quy QCVN 117:2018/BTTTT, hỗ trợ kết nối 2 camera dành cho doanh nghiệp vận tải có nhu cầu quản lý cơ bản.'
    },
    {
      url: 'https://bagps.vn/quy-dinh-lap-camera-giam-sat-theo-nghi-dinh-102020-thong-tu-122020-d938',
      img: 'https://taxi.binhanhcorp.com/PublicAll/2020/NghiDinh10/BANNER_1.jpg',
      title: 'THÔNG TIN QUY ĐỊNH LẮP CAMERA GIÁM SÁT',
      shortContent: 'Nghị định 10/2020/NĐ-CP ban hành ngày 17/1/2020 Quy định về kinh doanh và điều kiện kinh doanh vận tải bằng xe ô tô có nội dung Quy định lắp camera trên xe ô tô kinh doanh vận tải chi tiết tại Khoản 2 Điều 13 và Khoản 2 Điều 14 Nghị định số 10/2020/NĐ-CP:'
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
        this.router.navigate(['/home']);
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
