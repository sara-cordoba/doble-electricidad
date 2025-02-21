import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Usuario ficticio para la prueba
  private readonly validUser = {
    email: 'admin@ejemplo.com',
    password: '123456',
  };

  constructor(private router: Router) {}

  // Método para validar el usuario y guardar el estado de autenticación en local storage
  login(email: string, password: string): boolean {
    if (
      email === this.validUser.email &&
      password === this.validUser.password
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Booleano para verificar si está autenticado en base al valor del local storage
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Método para cerrar sesión y limpiar el local storage
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
