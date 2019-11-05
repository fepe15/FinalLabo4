import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../services/locales.service';
import { local } from '../clases/local';

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

  listaLocales;

  local;
  telefono;
  cuit;
  razon_social;
  foto;
  email;
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);


  displayedColumns: string[] = ['position',"Imagen", 'mesa', 'name', 'weight', 'symbol',"algo", 'preparacion'];
  constructor(private httpLocal: LocalesService) { }

  ngOnInit() {

    let vari={idProducto:1,Producto:"McCafe",Tiempo:"McDonals CO",Precio:"40554549",min:"4466-4488",max:5,Cant:3,rep:2};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);

    this.TraerLocales();
   // this.dataSource.sort = this.sort;
  }


  algo() {
    this.bool = !this.bool; 
  }

  TraerLocales(){
    this.httpLocal.TraerLocales().subscribe(data=>{
      this.listaLocales= JSON.parse(data._body);
    console.log(this.listaLocales);
   });
}
guardar()
  {
    
    var prod=new local();
    prod.local=this.local;
    prod.telefono=this.telefono;
    prod.cuit=this.cuit;
    prod.razon_social=this.razon_social;
    prod.foto=this.foto;
    prod.email=this.email;
   

    this.httpLocal.IngresarLocal(prod)
    .subscribe(
        
      (data)=>{
     let res=JSON.parse(data._body);
      //this.elPedido.id= res.idPedido;
      console.log(res);
    })
  }

}