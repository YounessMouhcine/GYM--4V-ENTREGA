import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../mostrar-actividades/activity.model';
import { MostrarActividadesComponent } from '../mostrar-actividades/mostrar-actividades.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-listado-actividades',
  imports: [MostrarActividadesComponent, NgFor],
  templateUrl: './listado-actividades.component.html',
  styleUrls: ['./listado-actividades.component.css']
})
export class ListadoActividadesComponent implements OnInit {
  actividades!: Activity[];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.actividades = this.activityService.getActividades();
  }
}
