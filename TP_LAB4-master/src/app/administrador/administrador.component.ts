import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { DetalleComponent } from "../detalle/detalle.component";
import { LocalesService } from '../services/locales.service';
import { local } from '../clases/local';
//import { Local } from '../../../node_modules/protractor/built/driverProviders';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  listaLocales;

  nombre;
  telefono;
  cuit;
  razon_social;
  foto;
  
  displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol'];
  constructor(private dialog: MatDialog,private httpLocal: LocalesService) { }

  ngOnInit() {

    let vari={idPedido:1,mesaPedido:"Juan Perez",producto:"Detalle",sector:"14/9/19 14:30",estado:"pendiente",tiempoPreparacion:5};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
  }

  openDetalle(){
    this.dialog.open(DetalleComponent, {width:'300px', height:'250px'});
    this.TraerLocales();
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
    prod.nombre=this.nombre;
    prod.telefono=this.telefono;
    prod.cuit=this.cuit;
    prod.razon_social=this.razon_social;
    prod.foto=this.foto;


    this.httpLocal.IngresarLocal(prod)
    .subscribe(

      (data)=>{
     let res=JSON.parse(data._body);
      //this.elPedido.id= res.idPedido;
      console.log(res);
    })
  }

}
