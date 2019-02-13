import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../clases/pedido';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})

export class CsvComponent implements OnInit {


  @Input() pedido: Pedido;

  data:any;
  
  constructor() {
 

   }
   Asignar()
   {
     let arrayProd= new Array();
     this.pedido.detalle.forEach(prod => {

      arrayProd.push(prod.nombre);
       
     });
     this.data=[{
       idPedido:this.pedido.id,
       mesa: this.pedido.idMesa,
       detalle: arrayProd

     }];
   }

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ["idPedido", "mesa", "detalle"],
    showTitle: true,
    title: 'Pedido',
    useBom: false,
    removeNewLines: true,
    keys: ["idPedido", "mesa", "detalle" ]
  };



  


  ngOnInit() {
    this.Asignar();
    //console.log(this.data);

  }

}
