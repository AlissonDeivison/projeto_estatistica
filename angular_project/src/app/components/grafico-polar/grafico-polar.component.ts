import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Universidade } from '../../interfaces/universidade';

@Component({
  selector: 'app-grafico-polar',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafico-polar.component.html',
  styleUrls: ['./grafico-polar.component.scss'],
})
export class GraficoPolarComponent implements OnChanges {
  @Input() data: Universidade[] = [];

  public polarAreaChartLabels: string[] = [];
  public valoresDoGrafico: number[] = [];
  public polarAreaChartData: ChartData<'line'> = {
    labels: this.polarAreaChartLabels,
    datasets: [
      {
        data: this.valoresDoGrafico,
      },
    ],
  };

  public polarAreaChartOptions: ChartOptions<'line'> = {
    // Adiciona as opções do gráfico
    plugins: {
      legend: {
        display: false, // Desativa a exibição da legenda
      },
      title: {
        display: false, // Ativa a exibição do título
        text: 'Total de itens por universidade', // Define o título
        color: 'black', // Define a cor do título
        font: {
          size: 16, // Define o tamanho da fonte
        },
      },
    },
    scales: {
      x: {
        display: false, // Desativa as labels no eixo x
      },
      y: {
        display: true,
      },
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      this.gerarDadosDoGrafico();
    }
  }

  gerarDadosDoGrafico() {
    this.polarAreaChartLabels = [];
    this.valoresDoGrafico = [];

    for (let i = 0; i < this.data.length; i++) {
      this.polarAreaChartLabels.push(this.data[i].universidade);
      this.valoresDoGrafico.push(this.data[i].totalDeItens);
    }

    this.polarAreaChartData = {
      labels: this.polarAreaChartLabels,
      datasets: [
        {
          data: this.valoresDoGrafico,
        },
      ],
    };
  }

  public polarAreaLegend = false; // Mantém a legenda desativada
  public polarAreaChartType: ChartType = 'line'; // Mantém o tipo como 'line'
}
