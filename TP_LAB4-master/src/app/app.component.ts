import { Component,Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() usuario: any;

  FuncionHeader()
  {
    this.usuario = JSON.parse(localStorage.getItem('usuario')).usuario ;
    // alert("estoy en funcion header de app component after emmit");
  }

}
