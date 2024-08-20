import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico-pizza',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafico-pizza.component.html',
  styleUrl: './grafico-pizza.component.scss',
})
export class GraficoPizzaComponent implements OnChanges{

  @Input() valoresGrafico: number[] = [];
  @Input() labelsGrafico: string[] = [];

  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  };
  public pieChartOptions: any = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  ngOnChanges(): void {
    this.updateChartData();
  }

  private updateChartData(): void {
    this.pieChartData = {
      labels: this.labelsGrafico,
      datasets: [
        {
          data: this.valoresGrafico
        }
      ]
    };
  }
}
