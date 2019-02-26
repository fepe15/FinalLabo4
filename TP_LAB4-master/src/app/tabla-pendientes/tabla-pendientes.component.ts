import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

export interface PeriodicElement {
  name: string;
  mesa: number;
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
  perfil:any;
  
  displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];
  // dataSource = ELEMENT_DATA;


  constructor(private httpServicio: PedidoService) {
    
    this.perfil=   JSON.parse(localStorage.getItem('usuario')).perfil;
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
