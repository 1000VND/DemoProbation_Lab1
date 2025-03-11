import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { PersonnelManagementComponent } from './components/personnel-management/personnel-management.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Chuyển hướng mặc định đến login
    { path: 'login', component: HomeComponent }, // Trang Login
    //Sử dụng AuthGuard chặn người dùng truy cập URL trước khi đăng nhập
    { path: 'personnel-management', component: PersonnelManagementComponent, canActivate: [AuthGuard] }, // Trang Quản lý User sau khi login
    { path: '**', redirectTo: 'login', pathMatch: 'full' } // Nếu nhập sai URL, về trang Login
];
