import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;
  loginError = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService
  ) {
    // Inicialización del formulario
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    // Idioma por defecto
    this.translate.setDefaultLang('es');
  }

  // Cambio de idioma
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // Envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      // Simulación de petición HTTP
      setTimeout(() => {
        this.isLoading = false;
        if (this.authService.login(email, password)) {
          this.router.navigate(['/dashboard']);
        } else {
          this.loginError = true;
        }
      }, 1000);
    } else {
      console.log('Formulario inválido');
    }
  }
}
