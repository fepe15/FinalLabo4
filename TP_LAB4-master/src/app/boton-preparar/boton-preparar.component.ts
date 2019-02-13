import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoService } from '../services/pedido.service';


@Component({
  selector: 'app-boton-preparar',
  templateUrl: './boton-preparar.component.html',
  styleUrls: ['./boton-preparar.component.css']
})
export class BotonPrepararComponent implements OnInit {

  @Input() id:number;
  @Input() tiempoPreparacion:number;
  @Output() lanzador=new EventEmitter();
  constructor(private httpPedido: PedidoService) { }

  ngOnInit() {
  }

  Preparar()
  {
    this.httpPedido.PrepararPedido(this.id, this.tiempoPreparacion)
    
    .subscribe((data)=>{
      this.lanzador.emit();
    })
    // .catch((data)=>{
    //   console.log(data);
    // })
  }



}
