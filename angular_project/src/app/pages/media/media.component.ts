import { Component, signal } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-media',
  standalone: true,
  imports: [LayoutComponent, MatButtonModule, MatExpansionModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  readonly panelOpenState = signal(false);

}
