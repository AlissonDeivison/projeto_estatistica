import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CasoDeUsoComponent } from './pages/caso-de-uso/caso-de-uso.component';
import { IntervalosComponent } from './pages/intervalos/intervalos.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'caso-de-uso', component: CasoDeUsoComponent},
    {path: 'intervalos', component: IntervalosComponent},
];
