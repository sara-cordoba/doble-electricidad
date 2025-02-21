import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule, NgIf],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  // Gráfico 1
  chartOptions1: ApexOptions = {
    chart: {
      type: 'line',
      height: 400,
      toolbar: { show: false },
    },
    // Datos de consumo de energía
    series: [
      {
        name: 'Consumo de Energía (kWh)',
        data: [320, 450, 380, 520, 470, 560, 430, 610, 490, 530, 480, 500],
      },
    ],
    // Eje X con los meses del año
    xaxis: {
      categories: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
    },
    title: {
      text: 'Consumo de Energía Mensual',
      align: 'center',
    },
    // Estilos
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    // Opciones de marcadores
    colors: ['#526A9A'],
    markers: {
      size: 5,
      colors: ['#526A9A'],
      strokeColors: '#A6C1F5',
      strokeWidth: 2,
    },
  };

  // Gráfico 2
  chartOptions2: ApexOptions = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: { show: false },
    },
    // Datos de producción de energía
    series: [
      {
        name: 'Producción Energética (kWh)',
        data: [300, 480, 400, 550, 450, 590, 410, 620, 470, 540, 500, 490],
      },
    ],
    // Eje X con los meses del año
    xaxis: {
      categories: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
    },
    title: {
      text: 'Producción de Energía Mensual',
      align: 'center',
    },
    // Estilos
    colors: ['#A6C1F5'],
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
      },
      // Formateo del tooltip
      y: {
        formatter: function (val) {
          return val + ' kWh';
        },
      },
    },
    // Opciones de las barras
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '60%',
        colors: {
          ranges: [
            {
              from: 0,
              to: 1000,
              color: '#A6C1F5',
            },
          ],
        },
      },
    },
    // Opciones de selección
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      // Selección de datos
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
        },
      },
    },
  };

  constructor() {
    console.log('Gráfico 1:', this.chartOptions1);
    console.log('Gráfico 2:', this.chartOptions2);
  }
}
