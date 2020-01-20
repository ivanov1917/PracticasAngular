import { Component, OnInit } from '@angular/core';
import {ServicioService} from './../servicio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   equipo:any[]=[];
  constructor(private _servicio:ServicioService) {
      this.equipo=_servicio.obtenerEquipoServicio();
  }

  ngOnInit() {
  }

}

