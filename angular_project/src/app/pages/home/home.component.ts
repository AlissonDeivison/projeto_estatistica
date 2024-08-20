import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DataService } from '../../services/data.service';
import { ServicesModule } from '../../services/services.module';
import { CommonModule } from '@angular/common';
import { Intervalo } from '../../interfaces/intervalo';
import { GraficoPizzaComponent } from "../../components/grafico-pizza/grafico-pizza.component";
import { LayoutComponent } from "../../components/layout/layout.component";
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ServicesModule, CommonModule, GraficoPizzaComponent, LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isOpen = false;

  constructor(private dataService: DataService, private sidebarService: SidebarService) {}

  ngOnInit() {
  
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
  

 

}
