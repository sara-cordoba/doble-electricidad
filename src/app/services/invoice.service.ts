import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Invoice, InvoiceChartData } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  // Datos ficticios que vendrian del backend
  private invoices: Invoice[] = [
    {
      id: 1,
      name: 'Factura Enero',
      date: '15/01/2025',
      amount: 158.542974,
      address: 'Calle San Martín 23',
    },
    {
      id: 2,
      name: 'Factura Diciembre',
      date: '18/12/2024',
      amount: 105.253942,
      address: 'Calle San Martín 23',
    },
    {
      id: 3,
      name: 'Factura Noviembre',
      date: '16/11/2024',
      amount: 87.429759,
      address: 'Calle San Martín 23',
    },
    {
      id: 4,
      name: 'Factura Octubre',
      date: '20/10/2024',
      amount: 81.523983,
      address: 'Calle San Martín 23',
    },
    {
      id: 5,
      name: 'Factura Septiembre',
      date: '17/09/2024',
      amount: 87.99,
      address: 'Calle San Martín 23',
    },
  ];

  // Simula obtener facturas y datos del gráfico del backend ficticio
  getInvoices(): Observable<{
    invoices: Invoice[];
    chartData: InvoiceChartData;
  }> {
    const chartData: InvoiceChartData = {
      series: this.invoices.map((invoice) => invoice.amount),
      categories: this.invoices.map((invoice) => invoice.name),
    };

    return of({ invoices: this.invoices, chartData });
  }
}
