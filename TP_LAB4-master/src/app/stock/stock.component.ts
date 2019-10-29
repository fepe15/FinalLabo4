import { Component, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
  
  displayedColumns: string[] = ['position',"Imagen", 'mesa', 'name', 'weight', 'symbol', 'preparacion', 'acciones',"otro","guardar"];

  //@ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit() {

    let vari={idProducto:1,Producto:"Coca",Tiempo:"5 min",Precio:"$20",min:1,max:5,Cant:3,rep:2};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
  }

  algo() {
    this.bool = !this.bool; 
  }
}