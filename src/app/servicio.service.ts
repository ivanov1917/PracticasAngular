import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  equipo:any[]=[
    {
       nombre:'Ignacio',
       especialidad:'Ingeniero automotriz',
       descripcion: 'Lorem ipsom dolor sit amet consecteur adipisingcing inveitas saecilla  envi roto amonis caaoguila sae' 
    },
    {
      nombre:'Eduardo',
      especialidad:'Ingeniero Mecanico',
      descripcion: 'Lorem ipsom dolor sit amet consecteur adipisingcing inveitas saecilla  envi roto amonis caaoguila sae' 
   },
   {
    nombre:'Lucia',
    especialidad:'Ingeniera Informatica',
    descripcion: 'Lorem ipsom dolor sit amet consecteur adipisingcing inveitas saecilla  envi roto amonis caaoguila sae' 
 }
]
  
  constructor() {
    console.log("Dot works!!");
   }

   obtenerEquipoServicio(){
    return this.equipo
  }

  obtenerUnEquipo(i)
  {
    return this.equipo[i];

  }
}
