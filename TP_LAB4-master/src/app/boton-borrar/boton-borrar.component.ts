import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../clases/producto';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() objeto:any;

  @Output() enviarABorrar = new EventEmitter();

  constructor() { }

  Borrar()
  {
    // console.log("se Borro: " + this.objeto.nombre);
    this.enviarABorrar.emit(this.objeto);
    
  }


  ngOnInit() {
  }

}
