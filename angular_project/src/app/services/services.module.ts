import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [DataService, provideHttpClient(withInterceptorsFromDi()), MatExpansionModule],
})
export class ServicesModule { }
