import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  bool:boolean=false;

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  
  displayedColumns: string[] = ['position',"Imagen", 'mesa', 'name', 'weight', 'symbol', 'preparacion'];
  constructor() { }

  ngOnInit() {

    let vari={idProducto:1,Producto:"McCafe",Tiempo:"McDonals CO",Precio:"40554549",min:"4466-4488",max:5,Cant:3,rep:2};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
   // this.dataSource.sort = this.sort;
  }

  
  algo() {
    this.bool = !this.bool; 
  }

}
