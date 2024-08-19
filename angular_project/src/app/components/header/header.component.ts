import { Component, OnInit } from '@angular/core';
import 'material-icons/iconfont/material-icons.css';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ServicesModule } from '../../services/services.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ServicesModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  constructor(private sidebarService: SidebarService, private router: Router, private dataService: DataService) {}

  ngOnInit() {}
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  logout() {
    this.dataService.logout();
    this.router.navigate(['']);
  }
  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
