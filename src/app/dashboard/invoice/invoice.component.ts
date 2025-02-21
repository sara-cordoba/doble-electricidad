import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import jsPDF from 'jspdf';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexOptions } from 'ng-apexcharts';
import { CommonModule, DecimalPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Invoice, InvoiceChartData } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    NgApexchartsModule,
    CommonModule,
    TranslateModule,
  ],
  providers: [DecimalPipe],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent implements OnInit {
  // Array de columnas a mostrar en la tabla
  displayedColumns: string[] = ['name', 'date', 'amount', 'address', 'actions'];
  // Array de facturas
  invoices: Invoice[] = [];
  // Opciones del gráfico
  chartOptions!: ApexOptions;

  constructor(
    private invoiceService: InvoiceService,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.loadInvoices();
  }

  // Carga las facturas
  loadInvoices() {
    this.invoiceService.getInvoices().subscribe(({ invoices, chartData }) => {
      this.invoices = invoices;
      // Redondea a dos decimales
      for (let i = 0; i < chartData.series.length; i++) {
        chartData.series[i] = parseFloat(chartData.series[i].toFixed(2));
      }
      // Carga el gráfico
      this.loadChart(chartData);
    });
  }

  loadChart(chartData: InvoiceChartData) {
    this.chartOptions = {
      // Configuración del gráfico
      chart: { type: 'bar', height: 350 },
      series: [{ name: 'Importe (€)', data: chartData.series }],
      xaxis: { categories: chartData.categories },
      title: { text: 'Importe por Factura', align: 'center' },
      colors: ['#526A9A'],
    };
  }

  // Descarga la factura en PDF
  downloadPDF(invoice: Invoice) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Factura de Electricidad', 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre: ${invoice.name}`, 20, 40);
    doc.text(`Fecha de emisión: ${invoice.date}`, 20, 50);
    doc.text(`Importe: ${invoice.amount} €`, 20, 60);
    doc.text(`Dirección del suministro: ${invoice.address}`, 20, 70);
    doc.save(`${invoice.name}.pdf`);
  }
}
