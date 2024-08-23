import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableData } from '../../../interfaces/table-data';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent implements OnInit {
  public dataSource: TableData[] = [];
  public classes: any[] = [];
  public totalFrequencia: number = 0;
  public totalFrequenciaVezesPontoMedio: number = 0;
  public amplitudeTotal: number = 0;
  public amplitude: number = 0;
  public media: number = 0;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.carregarDadosDaTabela();
  }

  carregarDadosDaTabela() {
    this.dataService.getdata('classes').subscribe((res: any) => {
      this.classes = res.classes;
      let media = this.obterMedia();
      for (let i = 0; i < this.classes.length; i++) {
        this.dataSource.push({
          numero_da_classe: i + 1,

          intervalo_de_classe: this.classes[i].intervalo,

          frequencia: this.classes[i].totalDeItens,

          ponto_medio:
            (this.classes[i].limiteInferior +
              this.classes[i].limiteSuperior +
              1) /
            2,

          frequencia_vezes_ponto_medio:
            ((this.classes[i].limiteInferior +
              this.classes[i].limiteSuperior +
              1) /
              2) *
            this.classes[i].totalDeItens,

          limiteSuperior: this.classes[i].limiteSuperior,

          limiteInferior: this.classes[i].limiteInferior,

          desvio:
            (this.classes[i].limiteInferior +
              this.classes[i].limiteSuperior +
              1) /
              2 -
            22, //Harded coded value
        });
        this.totalFrequencia += this.classes[i].totalDeItens;
        this.totalFrequenciaVezesPontoMedio +=
          ((this.classes[i].limiteInferior +
            this.classes[i].limiteSuperior +
            1) /
            2) *
          this.classes[i].totalDeItens;
      }
      this.obterAmplitude();
      this.obterMedia();
    });

  }
  obterAmplitude() {
    this.dataService
      .getdata('intervalos/idade/amplitude')
      .subscribe((res: any) => {
        this.amplitude = res.amplitude;
      });
  }

  obterMedia() {
    this.dataService.getdata('intervalos/idade/media').subscribe((res: any) => {
      this.media = res.media_geral;
    });
  }
}
