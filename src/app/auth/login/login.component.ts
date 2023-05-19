import { Component } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MES_ROUTES } from 'src/app/config/routes.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService:AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.id);
        this.toaster.success('Bienvenu');
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: () => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    })
  }
}
