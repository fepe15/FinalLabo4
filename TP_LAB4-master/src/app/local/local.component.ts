import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  
  displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol', 'preparacion', 'acciones'];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    let vari={idPedido:1,mesaPedido:"Juan Perez",producto:"Detalle",sector:"14/9/19 14:30",estado:"pendiente",tiempoPreparacion:5};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);
  }

  openDetalle(){
    this.dialog.open(DetalleComponent, {width:'300px', height:'250px'});
   
  }

}
