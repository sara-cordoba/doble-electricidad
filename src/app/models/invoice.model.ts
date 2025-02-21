export interface Invoice {
  id: number;
  name: string;
  date: string;
  amount: number;
  address: string;
}

export interface InvoiceChartData {
  series: number[];
  categories: string[];
}
