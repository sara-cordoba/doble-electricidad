import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserProfile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // Simula un perfil de usuario almacenado en el backend
  private userData: UserProfile = {
    name: 'Sara Córdoba',
    email: 'scordobalazaro@gmail.com',
    joinDate: '12/05/2020',
    address: 'Calle Mayor 45, Barcelona',
  };

  // Simula una llamada a la API
  getProfile(): Observable<UserProfile> {
    return of(this.userData);
  }

  // Simula una actualización en el backend
  updateProfile(newData: UserProfile): Observable<UserProfile> {
    this.userData = newData;
    return of(this.userData);
  }
}
