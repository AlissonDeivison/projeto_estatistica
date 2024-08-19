import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormComponent } from './form/form.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  public usuario: User = {} as User;
}
