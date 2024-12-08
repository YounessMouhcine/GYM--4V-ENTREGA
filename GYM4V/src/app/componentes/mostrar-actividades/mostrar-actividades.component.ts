import { Component, Input } from '@angular/core';
import { Activity } from './activity.model';

@Component({
  selector: 'app-mostrar-actividades',
  standalone: true,
  templateUrl: './mostrar-actividades.component.html',
  styleUrls: ['./mostrar-actividades.component.css']
})
export class MostrarActividadesComponent {
  @Input() actividad!: Activity;
}
