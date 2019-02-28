import { Component, OnInit, Input } from '@angular/core';
import { MesasService } from '../services/mesas.service';
import { AuthService } from '../services/auth/auth.service';
import { min } from 'rxjs/operators';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';

export interface DetalleMesas {
  nroMesa: string;
  estado: string;
  acciones: string;
}

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  listaMesas;
  importe;
  display: boolean = false;
  perfil;
  mesaFactura:number;
  fechaActual:string;
  horaActual:string;

  displayedColumns: string[] = ['nroMesa', 'estado', 'acciones'];


  constructor(private httpMesa: MesasService, private auth: AuthService) {

    this.perfil=   JSON.parse(localStorage.getItem('usuario')).perfil;
  
    this.TraerLasMesas();
   }

  TraerLasMesas()
  {
    this.httpMesa.TraerMesas().subscribe(data=>{
      this.listaMesas= JSON.parse(data._body);
      //console.log(this.listaMesas);
  })
  }

  ServirMesa(idMesa)
  {
    this.httpMesa.ServirMesa(idMesa)
    .subscribe((data)=>{
    //  console.log(data);
      this.TraerLasMesas();
    })
    ;
  }

  Cobrar(idMesa)
  {
    this.display=false;
    this.TraerFechaActual();
    this.mesaFactura=idMesa;
    this.httpMesa.CobrarMesa(idMesa)
    .subscribe((data)=>{
     // console.log(data);
      this.importe= JSON.parse(data._body).total;
      if(this.importe != null){
      this.display=true;
    }
      this.TraerLasMesas();
    });
  }

  Cerrar(idMesa)
  {
    this.display=false;
    this.httpMesa.CerrarMesa(idMesa)
    .subscribe((data)=>{
      //console.log(data);

      this.TraerLasMesas();
    });
  }

  TraerFechaActual(){
    var hoy = new Date();
    var hours:string = hoy.getHours().toString();
    var mins:string = hoy.getMinutes().toString();
    var day:string = hoy.getDate().toString();
    var month:string = hoy.getMonth().toString();
    var year:string = hoy.getFullYear().toString();
    this.fechaActual =  day.padStart(2,'0') + '/' + month.padStart(2,'0') + '/' + year;
    this.horaActual = hours.padStart(2,'0')+':'+ mins.padStart(2,'0');
  }

  ngOnInit() {
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
      pdf.save('ticket.pdf'); // Generated PDF   
    });  
  }  

}
