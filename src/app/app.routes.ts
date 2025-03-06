import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeAfterLoginComponent } from './home-after-login/home-after-login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Chuyển hướng mặc định đến login
    { path: 'login', component: HomeComponent }, // Trang Login
    //Sử dụng AuthGuard chặn người dùng truy cập URL trước khi đăng nhập
    { path: 'home', component: HomeAfterLoginComponent, canActivate: [AuthGuard] }, // Trang Home sau khi login
    { path: '**', redirectTo: 'login', pathMatch: 'full' } // Nếu nhập sai URL, về trang Login
];
