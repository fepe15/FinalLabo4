import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../clases/producto';


@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})



export class BotonAgregarComponent implements OnInit {

  @Input() producto:Producto;
  @Output() enviar = new EventEmitter();
 

  constructor() { }

  ngOnInit() {
  }

  Agregar()
  {
    //console.log("se agrega el producto: " + this.producto.nombre);
    this.enviar.emit(this.producto);
    
  }

}
