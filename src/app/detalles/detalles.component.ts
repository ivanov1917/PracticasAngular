import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
   datos:any[]=[];
  constructor(
    private ruta:ActivatedRoute,
    private _servicio:ServicioService
  ) {
       this.ruta.params.subscribe(params=>{
          console.log(params['id'])
          this.datos=_servicio.obtenerUnEquipo(params['id'])
       })

   }

  ngOnInit() {
  }

}
