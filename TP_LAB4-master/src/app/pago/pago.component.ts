import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../clases/pedido';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  pedido:Pedido;

  retiro=true;
  constructor(
    private httpPedido: PedidoService,
  ) {
    this.pedido=JSON.parse(localStorage.getItem("pedido"));
    console.log(JSON.parse(localStorage.getItem("productosPedido")));
   }

  ngOnInit() {
    
  }

  confirmar()
  {
    this.retiro=false;
    
  }

  cancelar()
  {
    close();
  }

  IngresarPedido(){
    this.httpPedido.IngresarPedido(this.pedido)
    .subscribe(
      (data)=>{
     let res=JSON.parse(data._body);
      this.pedido.id_pedido= res.idPedido;
      console.log(res);
    })
  }

}
