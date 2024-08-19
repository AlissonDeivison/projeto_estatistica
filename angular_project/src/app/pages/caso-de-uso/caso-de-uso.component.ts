import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-caso-de-uso',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './caso-de-uso.component.html',
  styleUrl: './caso-de-uso.component.scss',
})
export class CasoDeUsoComponent implements OnInit {
  isOpen = false;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
