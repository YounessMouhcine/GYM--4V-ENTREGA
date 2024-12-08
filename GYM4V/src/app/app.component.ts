import { Component } from '@angular/core';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoActividadesComponent } from './componentes/listado-actividades/listado-actividades.component';

@Component({
  selector: 'app-root',
  imports: [MenuComponent,ListadoActividadesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gimnasio4v';
}
