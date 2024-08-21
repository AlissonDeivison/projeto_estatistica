import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CasoDeUsoComponent } from './pages/caso-de-uso/caso-de-uso.component';
import { IntervalosComponent } from './pages/intervalos/intervalos.component';
import { MediaComponent } from './pages/media/media.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: CasoDeUsoComponent},
    {path: 'resumo', component: IntervalosComponent},
    {path: 'algoritmos', component: MediaComponent}
];
