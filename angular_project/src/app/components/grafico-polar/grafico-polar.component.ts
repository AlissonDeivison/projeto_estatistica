import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Universidade } from '../../interfaces/universidade';

@Component({
  selector: 'app-grafico-polar',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafico-polar.component.html',
  styleUrls: ['./grafico-polar.component.scss'], // Corrigido para styleUrls
})
export class GraficoPolarComponent implements OnChanges {
  @Input() data: Universidade[] = [];

  public polarAreaChartLabels: string[] = [];
  public valoresDoGrafico: number[] = [];
  public polarAreaChartData: ChartData<'bar'> = {
    labels: this.polarAreaChartLabels,
    datasets: [
      {
        data: this.valoresDoGrafico,
      },
    ],
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      this.gerarDadosDoGrafico();
    }
  }

  gerarDadosDoGrafico() {
    // Limpa os arrays antes de popular novamente
    this.polarAreaChartLabels = [];
    this.valoresDoGrafico = [];

    for (let i = 0; i < this.data.length; i++) {
      this.polarAreaChartLabels.push(this.data[i].universidade);
      this.valoresDoGrafico.push(this.data[i].totalDeItens);
    }

    // Atualiza o chart data com os novos valores
    this.polarAreaChartData = {
      labels: this.polarAreaChartLabels,
      datasets: [
        {
          data: this.valoresDoGrafico, label: 'Total de entrevistados',
        },
      ],
    };
  }

  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'bar';
}
