import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

export interface DetallePedido {
  nroPedido: string;
  producto: string;
  tiempoRestante: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  detalles:any;
  idMesa;
  idPedido;
valMozo:number;
valCocinero:number;
valMesa:number;
valRest:number;
hayPedido:string;

displayedColumns: string[] = ['producto', 'tiempoRestante'];


  constructor(private httpPedido: PedidoService) {

   }

  TraerTiempo()
  {
    this.hayPedido='nose';  
    this.httpPedido.TiempoRestante(this.idPedido)
    .subscribe(data=>{
      let respuesta= JSON.parse(data._body);
      this.detalles=respuesta.detalles;
      if(this.detalles.length == 0){
        this.hayPedido='no';
      }
    })
  }

  Presionar()
  {
    console.log(this.valCocinero, this.valMesa, this.valMozo, this.valRest);
  }

  
  

  ngOnInit() {
  }

}
