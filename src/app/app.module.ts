import {RouterModule,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//services
import {ServicioService} from './servicio.service';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PracticasComponent } from './practicas/practicas.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetallesComponent } from './detalles/detalles.component';
const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'practicas', component: PracticasComponent},
  { path: 'detalles/:id', component : DetallesComponent},
  { path:'',component:InicioComponent,pathMatch:'full'},
  { path:'**', redirectTo:'/',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    BodyComponent,
    PracticasComponent,
    InicioComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
