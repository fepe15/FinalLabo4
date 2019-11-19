import { Injectable } from '@angular/core';
// import { MiHttpService } from './mi-http.service';
import { GenericoService } from './generico.service';
import { Observable } from 'rxjs';
import { Pedido } from '../clases/pedido';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  token;
  constructor(private http: GenericoService,
    private http2: Http) {
    this.token= localStorage.getItem('token');
   }

  TraerTodosLosPedidos():Observable<any>
  {
    return this.http.httpGet("Pedidos/TraerTodos").pipe(data=>{return data});
  }

  TraerPedidosCliente(id: number):Observable<any>
  {
    return this.http.httpGet("Pedidos/TraerPedidosCliente/"+id).pipe(data=>{return data});
  }

  TraerTodosLosDetalles(id: number):Observable<any>
  {
    return this.http.httpGet("Pedidos/TraerTodosLosDetalles/"+id).pipe(data=>{return data});
  }


  TraerPedidosPorSector()
  {
    return this.http.httpPost("Pedidos/PendientesEmpleado",{"token":JSON.parse(localStorage.getItem('token'))})
    .pipe((data)=>{return data})
  }

  IngresarPedido(pedido: Pedido){
    let datos={      
    "fecha": pedido.fecha,
    "tiempo_entrega": pedido.tiempo_entrega,
    "id_cliente": pedido.id_cliente,
    "id_local": pedido.id_local,
    "id_estado": pedido.id_estado,
    "productos": pedido.productos,
    "pago":{"id_cliente": pedido.pago.id_cliente,
            "id_local": pedido.pago.id_local,
            "metodo_pago": pedido.pago.metodo_pago,
            "monto": pedido.pago.monto,
          }
    }
    return this.http.httpPost("Pedidos/IngresarPedido", datos
    )
    .pipe((data)=>{return data})
  }

  CancelarPedido(id_pedido)
  {
    return this.http.httpPost("Pedidos/CancelarPedido",{"id_pedido": id_pedido })
    .pipe((data)=>{return data})
  }

  PrepararPedido(idDetalle, tPrepacion)
  {
    let datos={
      "idDetalle": idDetalle,
      "tiempoPreparacion": tPrepacion,
      "token": JSON.parse(localStorage.getItem('token'))
    }

    return this.http.httpPost("Pedidos/PrepararPedido",datos)
    .pipe((data)=>{return data})
  }

  TiempoRestante(idPedido)
  {

    return this.http.httpPost("Pedidos/TiempoRestante",{"idPedido": idPedido })
    .pipe((data)=>{return data})
  }

  ServirPedido(idDetalle){
    return this.http.httpPost("Pedidos/ServirPedido",{"idDetalle": idDetalle })
    .pipe((data)=>{return data})

  }
  


}
