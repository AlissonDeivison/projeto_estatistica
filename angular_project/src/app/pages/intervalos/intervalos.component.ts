import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-intervalos',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './intervalos.component.html',
  styleUrl: './intervalos.component.scss',
})
export class IntervalosComponent implements OnInit{
  isOpen = false;
  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
