import { Component, Input, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SidebarService } from '../../services/sidebar.service';
import { Intervalo } from '../../interfaces/intervalo';
import { CardsComponent } from './cards/cards.component';
import { DataService } from '../../services/data.service';
import { GraficoPizzaComponent } from '../../components/grafico-pizza/grafico-pizza.component';
import { GraficoPolarComponent } from "../../components/grafico-polar/grafico-polar.component";
import { Universidade } from '../../interfaces/universidade';

@Component({
  selector: 'app-intervalos',
  standalone: true,
  imports: [LayoutComponent, CardsComponent, GraficoPizzaComponent, GraficoPolarComponent],
  templateUrl: './intervalos.component.html',
  styleUrl: './intervalos.component.scss',
})
export class IntervalosComponent implements OnInit {
  public totalDeItens: number = 0;
  public amplitude: number = 0;
  public idadeMinima: number = 0;
  public idadeMaxima: number = 0;

  isOpen = false;

  public data: Intervalo[] = [];
  public labelsDoGraficoPizza: string[] = [];
  public valoresDoGraficoPizza: number[] = [];
  public media: number = 0;

  public valoresGraficoDeGenero: number[] = [];
  public labelsGraficoDeGenero: string[] = [];

  public universidades: Universidade[] = [];
  public numeroDeUniversidades: number = 0;
  public mediaDeIntervistadosPorUniversidade: number = 0;

  public genero: { masculino: number; feminino: number, outros: number } = {} as any;

  constructor(
    private sidebarService: SidebarService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
    this.verificarIntervalo();
    this.obterUniversidades();
  }

  verificarIntervalo() {
    this.dataService.getdata('intervalos/idade').subscribe((res: any) => {
      this.data = res;
      this.labelsDoGraficoPizza = this.data.map((item) => item.intervalo);
      this.valoresDoGraficoPizza = this.data.map((item) => item.totalDeItens);
      this.verificarTotalDeItens();
    });
    this.obterMediaDeIdade();
    this.obterAmplitude();
    this.obterGenero();
  }

  obterMediaDeIdade() {
    this.dataService.getdata('intervalos/idade/media').subscribe((res: any) => {
      this.media = res.media_geral;
    });
  }

  verificarTotalDeItens() {
    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {
        this.totalDeItens += this.data[i].totalDeItens;
      }
    }
  }

  obterAmplitude(){
    this.dataService.getdata('intervalos/idade/amplitude').subscribe((res: any) => {
      this.amplitude = res.amplitude;
      this.idadeMinima = res.minimo;
      this.idadeMaxima = res.maximo;
    });
  }

  obterUniversidades(){
    this.dataService.getdata('intervalos/universidade').subscribe((res: any) => {
      this.universidades = res[0];
      this.numeroDeUniversidades = res[1].numero_de_universidades;
      this.mediaDeIntervistadosPorUniversidade = res[2].media
    });
  }

  obterGenero(){
    this.dataService.getdata('intervalos/genero').subscribe((res: any) => {
      this.genero.masculino = res.homens;
      this.genero.feminino = res.mulheres;
      this.genero.outros = res.outros;
      this.plotarGraficoDeGenero();
    });
  }

  plotarGraficoDeGenero() {
    this.labelsGraficoDeGenero = ['Masculino', 'Feminino', 'Outros'];
    this.valoresGraficoDeGenero = [this.genero.masculino, this.genero.feminino, this.genero.outros];
  }
}
