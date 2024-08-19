import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { DataService } from '../../../services/data.service';
import { ServicesModule } from '../../../services/services.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ServicesModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  user: User = {} as User;
  submitted: any;

  constructor(private dataService: DataService, private router:Router) {}

  autenticar() {
    this.dataService
      .postdata(this.user.nome, this.user.senha, 'login')
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['home']);
        }
      });
  }
}
