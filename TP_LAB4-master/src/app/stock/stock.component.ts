import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  bool:boolean=false;
  
  displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];
  constructor() { }

  ngOnInit() {

    let vari={idProducto:1,Producto:"Coca",Tiempo:"5 min",Precio:"$20",min:1,max:5,Cant:3};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
  }

  algo() {
    this.bool = !this.bool; 
  }
}