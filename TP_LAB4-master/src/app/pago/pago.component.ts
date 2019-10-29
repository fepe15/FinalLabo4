import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  retiro=true;
  constructor() {
    console.log(JSON.parse(localStorage.getItem("pedido")));
   }

  ngOnInit() {
    
  }

  confirmar()
  {
    this.retiro=false;
    
  }

  cancelar()
  {
    close();
  }

}
