import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  displayedColumns: string[] = ['algo','position', 'mesa'];

  
  constructor() { }

  ngOnInit() {

    let vari={algo:1,idPedido:"Coca",mesaPedido:2};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
  }

 

}
