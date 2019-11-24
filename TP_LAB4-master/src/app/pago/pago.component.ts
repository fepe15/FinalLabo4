import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../clases/pedido';
import {Router} from '@angular/router';
import { MatDialog, MatDialogRef} from '@angular/material';
import { Pago } from '../clases/pago';
import { local } from '../clases/local';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  tiempos:Array<string> = ['1:00','1:15','1:30','1:45','2:00','2:15','2:30','2:45','3:00','3:15','3:30','3:45','4:00','4:15','4:30','4:45','5:00',
                                '5:15','5:30','5:45','6:00','6:15','6:30','6:45','7:00','7:15','7:30','7:45','8:00','8:15','8:30','8:45','9:00',
                                '9:15','9:30','9:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00']



  pedido:Pedido;
  pago:Pago;
  modoRetiro:any = 0;
  tiempoElegido:string='';
  metodoPago:any='';
  totalPedido=0;
  fechaActual:any;
  fechaEntrega:any;
  localElegido:Array<local>

  nombreyApellido:string='';
  documento:number;
  numFrontales:number;
  fechaVencimiento:number;
  codSeguridad:number;

  pagePago='page1';
  

  constructor(
    private httpPedido: PedidoService,
    private router:Router,
    private dialog: MatDialog
  ) {
    this.pedido=new Pedido();
    this.pago = new Pago();
    this.pedido=JSON.parse(localStorage.getItem("pedido"));
    this.pedido.productos=JSON.parse(localStorage.getItem("productosPedido"));
    this.totalPedido=JSON.parse(localStorage.getItem("totalPedido"));
    this.localElegido=JSON.parse(localStorage.getItem("localElegido"));
    // console.log(this.localElegido);
   }

  ngOnInit() {
    
  }

  radioChange(retiro){
    // console.log(retiro)
  }


  continuar1()
  {
    if(this.modoRetiro != 0 && this.metodoPago != ''){
      if(this.modoRetiro == 1){
        this.tiempoElegido='0:45';
        this.pagePago="page2";
      }
      else{
        if(this.tiempoElegido != ''){
          this.pagePago="page2";
          // console.log(this.tiempoElegido);
        }
        else{
          alert("¡¡DEBE COMPLETAR TODOS LOS CAMPOS!!")
        }
      }
    }
    else{
      alert("¡¡DEBE COMPLETAR TODOS LOS CAMPOS!!")
    }
  }

  continuar2()
  {
    // if(this.modoRetiro==1){
    //   if(this.nombreyApellido != '' && this.documento != undefined ){
    //       this.fechaActual = this.horaAhora();
    //       this.pagePago="page3";
    //   }
    //   else{
    //     alert("¡¡DEBE COMPLETAR TODOS LOS CAMPOS!!")
    //   }
    // }
    // else {
    //   if(this.modoRetiro==2){
    //     if(this.nombreyApellido != '' && this.documento != undefined && this.numFrontales != undefined && this.fechaVencimiento != undefined && this.codSeguridad != undefined){
    //       this.pagePago="page3";
    //     }
    //     else{
    //       alert("¡¡DEBE COMPLETAR TODOS LOS CAMPOS!!")
    //     }
    //   }
    // }
    this.horaAhora();
    this.pagePago="page3";
    
  }

  cancelar()
  {
    this.dialog.closeAll();
  }

  atras()
  {
    console.log("atras")
    if(this.pagePago == 'page2')
    this.pagePago='page1';
    else{
      if(this.pagePago == 'page3')
      this.pagePago='page2';
    }
  }

  pagarPedido(){
    if(this.metodoPago == 'targeta'){
      this.pago.estado='abonado';
    }
    else{
      this.pago.estado='pendiente'
    }
    this.pago.id_cliente=this.pedido.id_cliente;
    this.pago.id_local=this.pedido.id_local;
    this.pago.monto=this.totalPedido;
    this.pago.metodo_pago=this.metodoPago;
    this.pedido.pago=this.pago;
    this.pedido.fecha = this.fechaActual;
    this.pedido.tiempo_entrega = this.fechaEntrega;
    console.log(this.pedido);
    this.httpPedido.IngresarPedido(this.pedido)
    .subscribe( 
      (data)=>{
     let res=JSON.parse(data._body);
      this.pedido.id_pedido= res.idPedido;
      console.log(res);
    })
    alert("Pedido cargardo correctamente")
    this.dialog.closeAll();
    this.router.navigate(['cliente']);
  }

  horaAhora(){
    // var hoy = new Date();
    // var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    // var horaMod = hora.split(':')
    // hora = horaMod[0] + ':' + ('0' + horaMod[1]).slice(-2) + ':' + ('0' + horaMod[2]).slice(-2);
    // console.log(hora);
    var tiempo:any = this.tiempoElegido.split(':'); 
    var miFecha = new Date();
    this.fechaActual= miFecha.getFullYear() + '-' +  (miFecha.getMonth() + 1)  + '-' +  miFecha.getDate() + ' ' + miFecha.getHours() + ':' + (miFecha.getMinutes()) 
    miFecha.setMinutes(miFecha.getMinutes()+parseInt(tiempo[1]));
    miFecha.setHours(miFecha.getHours()+parseInt(tiempo[0]));
    miFecha.setMonth((miFecha.getMonth()+1));
    var hora = miFecha.getHours() + ':' + miFecha.getMinutes();
    var horaMod = hora.split(':')
    //console.log(miFecha);
    this.fechaEntrega= miFecha.getFullYear() + '-' +  miFecha.getMonth()  + '-' +  miFecha.getDate() + ' ' + miFecha.getHours() + ':' + ('0' + horaMod[1]).slice(-2)
    console.log("Fecha actual: " + this.fechaEntrega)
  }

}
