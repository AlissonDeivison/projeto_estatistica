import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Intervalo } from '../../../interfaces/intervalo';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() data: Intervalo[] = [];

}