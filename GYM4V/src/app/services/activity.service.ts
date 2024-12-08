import { Injectable } from '@angular/core';
import { Activity } from '../componentes/mostrar-actividades/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private actividades: Activity[] = [
    { id: 1, fecha: '06/12/2024', Lugar: 'Cuatrovientos', Monitor: "Youness" },
    { id: 2, fecha: '06/12/2024', Lugar: 'Cuatrovientos', Monitor: "Iker" },
    { id: 3, fecha: '06/12/2024', Lugar: 'Cuatrovientos', Monitor: "Miguel" }
  ];

  getActividades(): Activity[] {
    return this.actividades;
  }
}
