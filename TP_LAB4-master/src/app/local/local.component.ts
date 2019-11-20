import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { DetalleComponent } from "../detalle/detalle.component";
import { PedidoService } from '../services/pedido.service';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  listaPedidos:Array<any>;
  listaDetalles:Array<any>;
  verPedidos:boolean;
  pedidoElegido:any;
  datoslocal:any;

  
  displayedColumns: string[] = ['id_pedido', 'fecha', 'monto', 'metodo_pago', 'estado_pedido', 'productos', 'cambio_estado', ];
  columnsProductos: string[] = ['foto', 'producto', 'categoria', 'precio'];
  
  constructor(private httpPedido: PedidoService, private dialog: MatDialog) {
    this.datoslocal = JSON.parse(localStorage.getItem("usuario"));
   }

  ngOnInit() {


    this.verPedidos=true;
    this.TraerPedidos(this.datoslocal.id_local)
  }

  // openDetalle(){
  //   this.dialog.open(DetalleComponent, {width:'300px', height:'250px'});

  // }

  TraerPedidos(id){
    console.log(id);
    this.httpPedido.TraerPedidosLocal(id).subscribe(data=>{
      this.listaPedidos= JSON.parse(data._body);
      console.log(this.listaPedidos);
   });
  }

  CambiarEstadoPedido(id_pedido,id_estado){
    console.log(id_pedido,id_estado)
    this.httpPedido.CambiarEstadoPedido(id_pedido,id_estado).subscribe(data=>{
      let respuesta = JSON.parse(data._body);
      if(respuesta != undefined){
        this.TraerPedidos(this.datoslocal.id_local);
      }
   })
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

  volverAPedidos(){
    this.verPedidos=true;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    setInterval(() => {
      this.TraerPedidos(this.datoslocal.id_local); 
      console.log("corrio")
      }, 5000);
  } 

}
