import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../clases/producto';
import { TiposProductos } from '../clases/tiposProductos';
import { ProductosService } from '../services/productos.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material';
import { filter } from 'rxjs/operators';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../clases/pedido';
import { PagoComponent } from '../pago/pago.component';
import { LocalesService } from '../services/locales.service';



import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';

export interface DetalleProductos {
  nombProducto: string;
  precio: string;
  accionesSusp: any;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  rubroDefault:string = 'Todos';
  categoriaDefault:string = 'Todos'

  displayedColumns: string[] = ['nombProducto', 'precio', 'accionesSusp'];

  listaProductos:Array<Producto>;
  listaProductosFiltrada:Array<Producto>;
  platos:Array<Producto>=[];
  bebidas:Array<Producto>=[];
  cafeteria:Array<Producto>=[];
  listaTiposProductos:Array<TiposProductos>;
  productosPedido:Array<Producto>;
  totalPedido:number=0;
  @Input() mesaSeleccionada:number;
  elPedido:Pedido;
  busqueda:string;
  respuestaAsync: any;
  mostrarLocales=true;
  @Input() mesasDisponibles:any;
  
  listaLocalesCompleta:Array<any>;
  listaLocalesFiltrada:Array<any>;
  listaRubros:Array<any>;

  listaCategorias:Array<any>;

  localElegido_id:any;
  localElegido_nombre:any;
  localElegido_foto:any;



  // constructor(private dishServices:DishService) { }
  constructor(
    private httpProd: ProductosService, 
    private httpLoc: LocalesService,
    private httpPedido: PedidoService,
    private dialog: MatDialog
            ) { 

    this.elPedido=new Pedido();
    this.TraerLocales();
  }



  cargarLocales(){
    
  }

  TraerLocales(){
      this.httpLoc.TraerLocales().subscribe(data=>{
        this.listaLocalesCompleta= JSON.parse(data._body);
        this.listaLocalesFiltrada=this.listaLocalesCompleta;

     });
     this.TraerRubros()
     this.TraerProductos();
     this.TraerTiposProductos()
  }

  TraerRubros(){
    this.httpLoc.TraerRubros().subscribe(data=>{
      this.listaRubros= JSON.parse(data._body);
      console.log(this.listaRubros);
   });
}

  TraerProductos()
  {
    this.httpProd.TraerProductos().subscribe(data=>{
      this.listaProductos= JSON.parse(data._body);
      this.listaProductosFiltrada=this.listaProductos;
      console.log(this.listaProductos);
    // debugger;
   });
  }

  TraerTiposProductos()
  {
    this.httpProd.TraerTiposProductos().subscribe(data=>{
      this.listaCategorias= JSON.parse(data._body);
      console.log(this.listaCategorias);
    // debugger;
   });
  }



  pedir(id:any, nombre:any, foto:any){
    this.localElegido_id=id;
    this.localElegido_nombre=nombre;
    this.localElegido_foto=foto;
    this.mostrarLocales=false;
    // console.log(this.localElegido);
  }

  AgregarAlPedido(producto:Producto)
  {
    this.productosPedido ? this.productosPedido.push(producto) : this.productosPedido= new Array<Producto>(producto);
    
   this.totalPedido = this.totalPedido + producto.precio;
  // console.log(this.totalPedido);
    
  }

  QuitarAlPedido(producto:Producto){
  
    for(let i = 0; i < this.productosPedido.length; i++)
    {
      
      if(this.productosPedido[i].nombre == producto.nombre)
      {
        this.totalPedido-= producto.precio;
      //  console.log("se va a borrar el producto " + this.productosPedido[i].nombre);
        this.productosPedido.splice(i,1);
        break;
      }
    }

  }

IngresarPedido(){
  this.httpPedido.IngresarPedido(this.elPedido)
  .subscribe(
      
    (data)=>{
   let res=JSON.parse(data._body);
    this.elPedido.id_pedido= res.idPedido;
   // console.log(this.elPedido);
  })
}

async IngresarPedidoPromise()
{
 await this.httpPedido.IngresarPedido(this.elPedido)
  .toPromise().then(
      
    (data)=>{
   this.respuestaAsync =JSON.parse(data._body);
    // this.elPedido.id= res.idPedido;
   // console.log(this.elPedido);
  })

  this.elPedido.id_pedido= this.respuestaAsync.idPedido;

}

  ngOnInit() {
    this.rubroDefault = 'Todos';
    console.log(this.rubroDefault);
    // this.dishServices.getDishes()
    // .subscribe(dishes => this.dishes = dishes);
  }

  filtrarRubro(rubroDefault) {
      var lista = new Array();
      this.listaLocalesFiltrada = lista;
      if(rubroDefault == '1'){
        this.listaLocalesFiltrada = this.listaLocalesCompleta
      }
      else{
        for (let local of this.listaLocalesCompleta) {
          if (rubroDefault == local.id_rubro) {
            lista.push(local);
          }
        }
        this.listaLocalesFiltrada = lista;
      }
      //console.log(lista); // Aquí iría tu lógica al momento de seleccionar algo
    }

    filtrarCategoria(categoriaDefault) {
      var lista = new Array();
      this.listaProductosFiltrada = lista;
      if(categoriaDefault == '1'){
        this.listaProductosFiltrada = this.listaProductos
      }
      else{
        for (let producto of this.listaProductos) {
          if (categoriaDefault == producto.id_tipo) {
            lista.push(producto);
          }
        }
        this.listaLocalesFiltrada = lista;
      }
      //console.log(lista); // Aquí iría tu lógica al momento de seleccionar algo
    }


  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 52;   
      var pageHeight = 74;    
      var imgHeight = 74;   
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a8'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('pedido.pdf'); // Generated PDF   
    });  
  }  

  openPagoForm(){
    this.crearPedido();
    localStorage.setItem('pedido',JSON.stringify(this.elPedido));
    localStorage.setItem('productosPedido',JSON.stringify(this.productosPedido));
    this.dialog.open(PagoComponent, {width:'400px', height:'550px'});
  }

  crearPedido(){
    this.elPedido.tiempo_entrega=50;
    this.elPedido.id_cliente=1;
    this.elPedido.id_local=this.localElegido_id;
    this.elPedido.id_estado=1;
  }

  

}
