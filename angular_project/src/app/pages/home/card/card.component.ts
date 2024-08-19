import { Component, Input } from '@angular/core';
import { Intervalo } from '../../../interfaces/intervalo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: Intervalo[] = [];
}
