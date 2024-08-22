import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServicesModule } from '../../../services/services.module';

@Component({
  selector: 'app-calculo-de-moda',
  standalone: true,
  imports: [ServicesModule],
  templateUrl: './calculo-de-moda.component.html',
  styleUrl: './calculo-de-moda.component.scss',
})
export class CalculoDeModaComponent implements OnInit {
  public moda: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.obterModa();
  }

  obterModa() {
    this.dataService.getdata('intervalos/moda').subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.moda = res[i].moda;
      }
    });
  }
}
