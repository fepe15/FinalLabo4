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


  TraerPedidosPorSector()
  {
    return this.http.httpPost("Pedidos/PendientesEmpleado",{"token":JSON.parse(localStorage.getItem('token'))})
    .pipe((data)=>{return data})
  }

  IngresarPedido(pedido: Pedido){
    return this.http.httpPost("Pedidos/IngresarPedido",{
      "fecha": pedido.fecha,
      "id_cliente": pedido.id_cliente,
      "id_local": pedido.id_local,
      "id_estado": pedido.id_estado,
      "tiempo_entrega": pedido.tiempo_entrega,
    })
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
