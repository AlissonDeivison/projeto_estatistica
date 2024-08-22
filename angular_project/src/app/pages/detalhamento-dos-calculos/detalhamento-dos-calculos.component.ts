import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ServicesModule } from '../../services/services.module';
import { DataService } from '../../services/data.service';
import { TableData } from '../../interfaces/table-data';
import { TabelaComponent } from './tabela/tabela.component';
import { CalculoDeModaComponent } from "./calculo-de-moda/calculo-de-moda.component";

@Component({
  selector: 'app-detalhamento-dos-calculos',
  standalone: true,
  imports: [LayoutComponent, ServicesModule, TabelaComponent, CalculoDeModaComponent],
  templateUrl: './detalhamento-dos-calculos.component.html',
  styleUrl: './detalhamento-dos-calculos.component.scss',
})
export class DetalhamentoDosCalculosComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
