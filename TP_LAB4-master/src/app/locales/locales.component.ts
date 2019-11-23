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
  local:local;

  listaLocales;
  listaRubros:Array<any>;
  listaRubrosMostrar:Array<any>;
  rubroTodos=1;

  nombre;
  telefono;
  cuit;
  razon_social;
  foto;
  email;
  rubro;
  clave;

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);


  displayedColumns: string[] = ['position',"Imagen", 'mesa', 'name', 'weight',"algo", 'symbol', 'preparacion'];
  constructor(private httpLocal: LocalesService) { 
    this.local = new local();
  }

  ngOnInit() {

    let vari={idProducto:1,Producto:"McCafe",Tiempo:"McDonals CO",Precio:"40554549",min:"4466-4488",max:5,Cant:3,rep:2};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
    this.listaRubrosMostrar = new Array();
   // this.dataSource.sort = this.sort;
   this.TraerLocales();
   this.TraerRubros()
  }


  algo() {
    this.bool = !this.bool; 
  }

  TraerRubros(){
    this.httpLocal.TraerRubros().subscribe(data=>{
      this.listaRubros= JSON.parse(data._body);
      for (let rubro of this.listaRubros) {
        if (rubro.id_rubro != 1) {
          this.listaRubrosMostrar.push(rubro)
        }
      }
   });
}


  TraerLocales(){
    this.httpLocal.TraerLocales().subscribe(data=>{
      this.listaLocales= JSON.parse(data._body);
    console.log(this.listaLocales);
   });
}

guardar()
  {
    this.local.nombre=this.nombre;
    this.local.razon_social=this.razon_social;
    this.local.telefono=this.telefono;
    this.local.id_rubro=this.rubro;
    this.local.cuit=this.cuit;
    this.local.foto='adadsadds';
    this.local.email=this.email;
    this.local.clave=this.clave;
    this.local.perfil='local';
    console.log(this.local);
    this.httpLocal.IngresarLocal(this.local)
    .subscribe(
      (data)=>{
     let res=JSON.parse(data._body);
     console.log("Respuestaaaaaaa: " + res);
     if(res != undefined){
        this.bool=false;
        alert("Local Agregado correctamente");
      }
    })
  }
}