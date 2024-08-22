import { Component } from '@angular/core';
import { TabelaComponent } from '../tabela/tabela.component';
import { DataService } from '../../../services/data.service';
import { TableData } from '../../../interfaces/table-data';
import { ServicesModule } from '../../../services/services.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-variancia-e-desvio-padrao',
  standalone: true,
  imports: [TabelaComponent, ServicesModule, CommonModule],
  templateUrl: './variancia-e-desvio-padrao.component.html',
  styleUrl: './variancia-e-desvio-padrao.component.scss',
})
export class VarianciaEDesvioPadraoComponent {
  public dataSource: TableData[] = [];
  public classes: any[] = [];
  public totalFrequencia: number = 0;
  public totalFrequenciaVezesPontoMedio: number = 0;
  public amplitudeTotal: number = 0;
  public amplitude: number = 0;
  public media: number = 0;
  public somaQuadradoXiFi: any = 0;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.carregarDadosDaTabela();
  }
  carregarDadosDaTabela() {
    this.dataService.getdata('classes').subscribe((res: any) => {
      this.classes = res.classes;
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
      this.calcularXiFiAoQuadrado();
      this.somarQuadradoXiFi();

    });
    console.log(this.dataSource);
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
  calcularXiFiAoQuadrado() {
    for (let i = 0; i < this.dataSource.length; i++) {
      //Xi² * Fi
      this.dataSource[i].quadrado_xi_fi =
        Math.pow(this.dataSource[i].ponto_medio, 2) *
        this.dataSource[i].frequencia;
      // this.dataSource[i].quadrado_xi_fi = Math.pow(
      //   this.dataSource[i].frequencia_vezes_ponto_medio,
      //   2
      // );
    }
  }
  somarQuadradoXiFi() {
    for (let i = 0; i < this.dataSource.length; i++) {
      this.somaQuadradoXiFi += this.dataSource[i].quadrado_xi_fi;
      console.log(this.dataSource[i].quadrado_xi_fi);
    }
  }
}
