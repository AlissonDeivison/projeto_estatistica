import { Component, OnInit } from '@angular/core';
import { ServicesModule } from '../../../services/services.module';
import { DataService } from '../../../services/data.service';
import { DesvioData } from '../../../interfaces/desvio-data';

@Component({
  selector: 'app-coeficiente-de-variacao',
  standalone: true,
  imports: [ServicesModule],
  templateUrl: './coeficiente-de-variacao.component.html',
  styleUrl: './coeficiente-de-variacao.component.scss',
})
export class CoeficienteDeVariacaoComponent implements OnInit {
  public coeficienteDeVariacao: number = 0;
  public desvioData: DesvioData = {} as DesvioData;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
      this.carregarDados();
  }
  carregarDados(){
    this.dataService.getdata('intervalos/coeficiente').subscribe((res:any)=>{
      this.coeficienteDeVariacao = res.coeficiente;
      this.desvioData = res.desvioData;
    })
  }
}
