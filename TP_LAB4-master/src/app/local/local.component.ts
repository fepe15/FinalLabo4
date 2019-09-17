import { Component, OnInit } from '@angular/core';

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
  
  displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];

  constructor() { }

  ngOnInit() {

    let vari={idPedido:1,mesaPedido:"Juan Perez",producto:"coca",sector:"14:30",estado:"pendiente",tiempoPreparacion:5};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
  }

}
