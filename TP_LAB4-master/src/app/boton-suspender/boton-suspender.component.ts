import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'boton-suspender',
  templateUrl: './boton-suspender.component.html',
  styleUrls: ['./boton-suspender.component.css']
})



export class BotonSuspenderComponent implements OnInit {



  @Input() id:number;
  @Input() estado:string;
  @Output() lanzador = new EventEmitter()

  constructor(private httpUsuarios: UsuariosService){
    
  }

  Suspender()
  {
    this.httpUsuarios.SuspenderUsuario(this.id, this.estado)
    .subscribe((data)=>{
      this.lanzador.emit();
    });
  }

  ngOnInit() {
  }

}
