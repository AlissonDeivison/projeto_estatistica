import { Component, Input, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SidebarService } from '../../services/sidebar.service';
import { Intervalo } from '../../interfaces/intervalo';
import { CardsComponent } from './cards/cards.component';
import { DataService } from '../../services/data.service';
import { GraficoPizzaComponent } from '../../components/grafico-pizza/grafico-pizza.component';

@Component({
  selector: 'app-intervalos',
  standalone: true,
  imports: [LayoutComponent, CardsComponent, GraficoPizzaComponent],
  templateUrl: './intervalos.component.html',
  styleUrl: './intervalos.component.scss',
})
export class IntervalosComponent implements OnInit {
  public totalDeItens: number = 0;

  isOpen = false;

  public data: Intervalo[] = [];
  public labelsDoGraficoPizza: string[] = [];
  public valoresDoGraficoPizza: number[] = [];

  public media: number = 0;

  constructor(
    private sidebarService: SidebarService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
    this.verificarIntervalo();
    
  }

  verificarIntervalo() {
    this.dataService.getdata('intervalos/idade').subscribe((res: any) => {
      this.data = res;
      this.labelsDoGraficoPizza = this.data.map((item) => item.intervalo);
      this.valoresDoGraficoPizza = this.data.map((item) => item.totalDeItens);
      console.log(this.labelsDoGraficoPizza);
      this.verificarTotalDeItens();
    });
    this.obterMediaDeIdade();
  }

  obterMediaDeIdade() {
    this.dataService.getdata('intervalos/idade/media').subscribe((res: any) => {
      this.media = res.media_geral;
    });
  }

  verificarTotalDeItens() {
    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {
        console.log(this.data[i].totalDeItens);
        this.totalDeItens += this.data[i].totalDeItens;
      }
    }
  }
}
