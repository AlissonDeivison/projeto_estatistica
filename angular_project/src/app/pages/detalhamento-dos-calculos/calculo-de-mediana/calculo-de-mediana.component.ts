import { Component, OnInit } from '@angular/core';
import { ServicesModule } from '../../../services/services.module';
import { DataService } from '../../../services/data.service';
import { Mediana } from '../../../interfaces/mediana';

@Component({
  selector: 'app-calculo-de-mediana',
  standalone: true,
  imports: [ServicesModule],
  templateUrl: './calculo-de-mediana.component.html',
  styleUrl: './calculo-de-mediana.component.scss',
})
export class CalculoDeMedianaComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public medianaData: Mediana = {} as Mediana;
  ngOnInit(): void {
    this.obterMediana();
  }

  obterMediana() {
    this.dataService.getdata('intervalos/mediana').subscribe((res: any) => {
      this.medianaData = res;
    });
  }
}
