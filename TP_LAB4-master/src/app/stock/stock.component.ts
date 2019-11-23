import { Component, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../clases/producto'; 

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
  
  nombre:string;
  precio;
  cant_max;
  cant_min;
  tiempo_pre;
  cant_actual;
  listaLocales;

  displayedColumns: string[] = ['position',"Imagen", 'mesa', 'name', 'weight', 'symbol', 'preparacion', 'acciones',"otro","guardar"];

  //@ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private httpProducto: ProductosService) { }

  ngOnInit() {

    let vari={idProducto:1,Producto:"Coca",Tiempo:"5 min",Precio:"$20",min:1,max:5,Cant:3,rep:2};
    this.listaPendientes=new Array();
    this.Traerproductos();
    this.listaPendientes.push(vari);
  }

  Traerproductos(){
    this.httpProducto.TraerProductos().subscribe(data=>{
      this.listaLocales= JSON.parse(data._body);
    console.log(this.listaLocales);
   });
}

guardar()
{

  var prod=new Producto();
  prod.nombre=this.nombre;
  prod.precio=this.precio;
  prod.cant_min=this.cant_min;
  prod.cant_actual=this.cant_actual;
  prod.cant_max=this.cant_max;
  prod.tiempo_pre=this.tiempo_pre;


  this.httpProducto.IngresarProducto(prod)
  .subscribe(
      
    (data)=>{
   let res=JSON.parse(data._body);
   console.log(res);
  })

  // this.httpProducto.IngresarProducto(prod)
}

  algo() {
    this.bool = !this.bool; 
  }
}