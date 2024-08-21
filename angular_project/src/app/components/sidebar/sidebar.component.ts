import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import 'material-icons/iconfont/material-icons.css';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { DataService } from '../../services/data.service';
import { ServicesModule } from '../../services/services.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ServicesModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  constructor(private sidebarService: SidebarService, private dataService:DataService, private router: Router) {}

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
  redirectTo(route: string) {
    this.router.navigate([route]);
  }
  //Verifica qual a página para aplica o estilo de ativo
  isActive(route: string) {
    return this.router.url === route;
  }

}
