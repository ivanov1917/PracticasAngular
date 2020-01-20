import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  diosesHindues:string[]=['Krishna','Hanuman','Kali','Vishnu','Shiva','Brahma','Lashkmi','Laskmana','Durga','Kaitreya','Ganesh','Sita','Rama','Narashimba','kali','Agni','dewantari','parvati']
  animales:Array<any>=[
    {tipo:'Perro',nombre:'lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2}
  ]

}
