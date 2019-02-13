import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  preparacion:string;
  acciones:string;
}


@Component({
  selector: 'app-tabla-pendientes',
  templateUrl: './tabla-pendientes.component.html',
  styleUrls: ['./tabla-pendientes.component.css']
})


export class TablaPendientesComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];
  // dataSource = ELEMENT_DATA;


  constructor(private httpServicio: PedidoService) {

    this.TraerTabla();

   }

   TraerTabla()
   {
     this.spinner=true;
    this.httpServicio.TraerPedidosPorSector()
    
    .subscribe(data=>{
      this.listaPendientes= JSON.parse(data._body);
      this.spinner=false;
    })


   }
  ngOnInit() {
    this.TraerTabla();
  }

}
