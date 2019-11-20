import { Component, OnInit, AfterContentInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../clases/pedido';
import { LocalesService } from '../services/locales.service';
import { local } from '../clases/local';
import {MatSnackBar} from '@angular/material/snack-bar';

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
export class ClienteComponent implements OnInit, AfterContentInit  {

//   detalles:any;
//   idMesa;
//   idPedido;
// valMozo:number;
// valCocinero:number;
// valMesa:number;
// valRest:number;
// hayPedido:string;
cont:number = 0;
displayedColumns: string[] = ['id_pedido', 'local', 'fecha', 'monto', 'metodo_pago', 'estado_pedido', 'productos', 'cancelar'];
columnsProductos: string[] = ['foto', 'producto', 'categoria', 'precio'];
listaPedidos:Array<any>;
listaDetalles:Array<any>;
listaLocales:Array<local>;
verPedidos:boolean;
pedidoElegido:any;

test:number=1;

  constructor(private httpPedido: PedidoService,private httpLocales: LocalesService, private _snackBar: MatSnackBar) {
   }


   TraerPedidos(id){
     console.log(id);
    this.httpPedido.TraerPedidosCliente(id).subscribe(data=>{
      this.listaPedidos= JSON.parse(data._body);
      console.log(this.listaPedidos);
   });
  }

  TraerDetalles(id){
    this.httpPedido.TraerTodosLosDetalles(id).subscribe(data=>{
      this.listaDetalles= JSON.parse(data._body);
      console.log(this.listaDetalles);
   });
  }

  openDetalle(id){
    this.verPedidos=false
    this.pedidoElegido = id
    this.TraerDetalles(this.pedidoElegido);
  }

  cancelarPedido(id){
    this.httpPedido.CancelarPedido(id).subscribe(data=>{
      let respuesta = JSON.parse(data._body);
      if(respuesta == 1){
        this.TraerPedidos(2);
        this._snackBar.open("El pedido #" + id + " fue cancelado", "", {
          duration: 3000,
        });
      }
   })
  }

  ngOnInit() {
    this.verPedidos=true;
    this.TraerPedidos(2)
  }

  volverAPedidos(){
    this.verPedidos=true;
  }
 

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    setInterval(() => {
      this.TraerPedidos(2);
      }, 5000);
  } 

  // TraerTiempo()
  // {
  //   this.hayPedido='nose';  
  //   this.httpPedido.TiempoRestante(this.idPedido)
  //   .subscribe(data=>{
  //     let respuesta= JSON.parse(data._body);
  //     this.detalles=respuesta.detalles;
  //     if(this.detalles.length == 0){
  //       this.hayPedido='no';
  //     }
  //   })
  // }

  // Presionar()
  // {
  //   console.log(this.valCocinero, this.valMesa, this.valMozo, this.valRest);
  // }


}
