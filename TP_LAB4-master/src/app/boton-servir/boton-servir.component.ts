import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-boton-servir',
  templateUrl: './boton-servir.component.html',
  styleUrls: ['./boton-servir.component.css']
})
export class BotonServirComponent implements OnInit {


  @Input() idDetalle:number;
 
  @Output() lanzador=new EventEmitter();

  constructor(private httpPedido: PedidoService) { }

  Servir()
  {
    this.httpPedido.ServirPedido(this.idDetalle)
    .subscribe((data)=>{
      this.lanzador.emit();
    })

  }

  ngOnInit() {
  }

}
