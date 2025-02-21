import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../components/chart/chart.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule,
    ChartComponent,
    TranslateModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showMenu = false;

  constructor(private router: Router) {}

  // Mostrar gráficos en el dashboard
  isDashboardRoute(): boolean {
    return this.router.url === '/dashboard';
  }

  // Salir de la aplicación y volver al login
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
