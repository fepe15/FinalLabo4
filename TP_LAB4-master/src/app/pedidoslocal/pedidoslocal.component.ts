import { Component, OnInit, Inject } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Chat } from '../clases/chat';

export interface DialogData {
  id_pedido: number;
  id_usuario: number;
}

@Component({
  selector: 'app-pedidoslocal',
  templateUrl: './pedidoslocal.component.html',
  styleUrls: ['./pedidoslocal.component.css']
})
export class PedidoslocalComponent implements OnInit {


  

chats:Array<any>;
mensaje:any;
id_usuario:number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private httpPedido: PedidoService,
    ) { }

  ngOnInit() {
    this.id_usuario = this.data.id_usuario;
    this.TraerMensajes(this.data.id_pedido);
    console.log(this.data.id_pedido)
    console.log(this.data.id_usuario)
  } 


  TraerMensajes(id){
    this.httpPedido.TraerTodosLosMensajes(id).subscribe(data=>{
      this.chats= JSON.parse(data._body);
      console.log(this.chats);
   });
  }

  GuardarMensajes(chat:Chat){
    this.httpPedido.IngresarMensaje(chat).subscribe(data=>{
      var rta= JSON.parse(data._body);
      if(rta!=undefined){
        this.TraerMensajes(this.data.id_pedido)
      }
      console.log(rta);
   });
  }

  enviarMensaje(){
    var chat = new Chat()
    chat.id_pedido=this.data.id_pedido
    chat.mensaje=this.mensaje
    chat.id_usuario=this.id_usuario;
    var fechaActual:any;
    var miFecha = new Date();
    fechaActual= miFecha.getFullYear() + '-' +  (miFecha.getMonth() + 1)  + '-' +  miFecha.getDate() + ' ' + miFecha.getHours() + ':' + (miFecha.getMinutes())
    chat.fecha = fechaActual;
    this.GuardarMensajes(chat);
    this.mensaje="";
    console.log(chat) 
  }


}
