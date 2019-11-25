import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../clases/producto'; 
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  spinner:boolean;
  listaPendientes;
  tiempoPreparacion:number;
  perfil:any;
  bool:boolean=false;

  categoriaDefault:string = 'todos';
  listaCategorias:Array<any>;
  
  nombre:string;
  precio;
  cant_max;
  cant_min;
  tiempo_pre;
  cant_actual;
  listaLocales;

  public imagePath;
  imgURL: any;
  public message: string;

  myfile:any;

  buscar="";

  usuario;

  displayedColumns: string[] = ['id',"Imagen", 'nombre', 'tiempo_prep', 'precio', 'cant_min', 'cant_max', 'cant_actual',"punto_repo","guardar"];

  @ViewChild(MatSort) sort: MatSort;
  constructor(private httpProducto: ProductosService,private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {

    //let vari={idProducto:1,Producto:"Coca",Tiempo:"5 min",Precio:"$20",min:1,max:5,Cant:3,rep:2};
    //this.listaPendientes=new Array();
    this.Traerproductos();
    //this.listaPendientes.push(vari);

    this.TraerTiposProductos();

    this.usuario=JSON.parse( localStorage.getItem("usuario"));
  }

  Traerproductos(){
    this.httpProducto.TraerProductos().subscribe(data=>{
      //this.listaLocales= JSON.parse(data._body);
    //console.log(this.listaLocales);
    this.listaLocales= new MatTableDataSource(JSON.parse(data._body)); 
    this.listaPendientes=this.listaLocales;
    this.listaLocales.sort = this.sort;
   });
   
}

TraerTiposProductos()
  {
    this.httpProducto.TraerTiposProductos().subscribe(data=>{
      this.listaCategorias= JSON.parse(data._body);
      //console.log(this.listaCategorias);
   });
  }

guardar()
{

  var prod=new Producto();
  prod.nombre=this.nombre;
  prod.precio=this.precio;
  prod.cant_min=this.cant_min;
  prod.cant_actual=this.cant_actual;
  prod.punto_repo=this.cant_max-this.cant_actual;
  prod.cant_max=this.cant_max;
  prod.tiempo_prep=this.tiempo_pre;
  prod.id_tipo=this.categoriaDefault;
  prod.id_local=this.usuario.id_local;
  prod.foto=this.myfile.name;


  this.httpProducto.IngresarProducto(prod,this.myfile)
  .subscribe(
      
    (data)=>{
      let res=JSON.parse(data._body);
      console.log("Respuestaaaaaaa: " + res);
      if(res != undefined){
         this.bool=false;
         alert("Local Agregado correctamente");
       }
  })
  this.algo();
  this.Vaciar();
  this.Traerproductos();


  // this.httpProducto.IngresarProducto(prod)
}

preview(files) {

  this.myfile=files[0];
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
  algo() {
    this.bool = !this.bool; 
  }
  Vaciar()
  {
    this.nombre=""
    this.precio="";
    this.cant_actual="";
    this.cant_max="";
    this.cant_min="";
    this.tiempoPreparacion=null;
    
    this.imgURL=null;
  }

  filtrar()
  {
    
    if (this.buscar!="") 
    {
       var array=new Array();
    this.listaPendientes.filteredData.forEach(element => {
      //console.log(element);
      if (element.nombre.toLowerCase().startsWith(this.buscar.toLowerCase())) {
        array.push(element);
      }
      
    });
    this.listaLocales=array;
    //console.log(array);
    //console.log(this.listaLocales);
    }
    else
    {
      this.listaLocales=this.listaPendientes;
    }
    this.changeDetectorRefs.detectChanges();
    
  }
}