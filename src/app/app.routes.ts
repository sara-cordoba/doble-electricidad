import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InvoiceComponent } from './dashboard/invoice/invoice.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

// Rutas de la aplicación y sus componentes
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'invoice', component: InvoiceComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
