import { Component, OnInit, AfterContentInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../clases/pedido';
import { LocalesService } from '../services/locales.service';
import { local } from '../clases/local';
import {MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { PedidoslocalComponent } from '../pedidoslocal/pedidoslocal.component';
import { MatDialog, MatDialogRef} from '@angular/material';


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
datosCliente:any;

test:number=1;

  constructor(private httpPedido: PedidoService,
    private httpLocales: LocalesService, 
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    ) {
    this.datosCliente = JSON.parse(localStorage.getItem("usuario"));
    console.log(this.datosCliente.idUsuario)
   }


   TraerPedidos(id){
    this.httpPedido.TraerPedidosCliente(id).subscribe(data=>{
      this.listaPedidos= JSON.parse(data._body);
      this.listaPedidos=this.listaPedidos.sort((n1,n2) => {
        if (n1.id_pedido > n2.id_pedido) {
            return 1;
        }
    
        if (n1.id_pedido < n2.id_pedido) {
            return -1;
        }
    
        return 0;
    });
   });
  }

  TraerDetalles(id){
    this.httpPedido.TraerTodosLosDetalles(id).subscribe(data=>{
      this.listaDetalles= JSON.parse(data._body);
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
        this.TraerPedidos(this.datosCliente.idUsuario);
        let config = new MatSnackBarConfig();
        config.panelClass = ['cancel-snackbar'],
        config.duration= 4000,
        config.verticalPosition= 'top',
        config.horizontalPosition= 'center',
        this._snackBar.open("El pedido #" + id + " fue cancelado", "", config);
      }
   })
  }

  infoEntrega(t:Date){
    var fechaActual = new Date();
    console.log("Hora Actual"+ fechaActual);
    var tiempo_entrega = new Date(t);
    if(tiempo_entrega > fechaActual)
    {
      console.log("tiempo entrega es mayor")
      var f2 = fechaActual.toString().substring(16,24),
      t2 = t.toString().substr(10), 
      f3 = f2.split(":"),
      t3 = t2.split(":");
      fechaActual.setHours(parseInt(f3[0]),parseInt(f3[1]),parseInt(f3[2]));
      tiempo_entrega.setHours(parseInt(t3[0]),parseInt(t3[1]),parseInt(t3[2]));

      console.log("Tiempo entrega"+ tiempo_entrega);
      console.log(tiempo_entrega.getHours() + " " + fechaActual.getHours())
      tiempo_entrega.setHours((tiempo_entrega.getHours() - fechaActual.getHours()),(tiempo_entrega.getMinutes() - fechaActual.getMinutes()));
      
      let config = new MatSnackBarConfig();
      config.panelClass = ['red-snackbar'],
      config.duration= 4000,
      config.verticalPosition= 'top',
      config.horizontalPosition= 'center',
      this._snackBar.open("Debera retirar el pedido en " + tiempo_entrega.toString().substring(16,18) + " hs " + tiempo_entrega.toString().substring(19,21) + " min", "",config);
      
    }

    


//     this._snackBar.open("fecha de Retiro" + tiempo, "", {
//       duration: 3000,
//       verticalPosition: 'top',
//       horizontalPosition: 'center',
//     });
  }

  ngOnInit() {
    this.verPedidos=true;
    this.TraerPedidos(this.datosCliente.idUsuario)
  }

  volverAPedidos(){
    this.verPedidos=true;
  }
 

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    setInterval(() => {
      this.TraerPedidos(this.datosCliente.idUsuario);
      }, 5000);
  } 

  openChatForm(id){
  this.dialog.open(PedidoslocalComponent, {
    width:'350px', 
    height:'480px', 
    data:{
      id_pedido:id,
      id_usuario:this.datosCliente.idUsuario
    }
  });
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
