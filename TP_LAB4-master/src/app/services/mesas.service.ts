import { Injectable } from '@angular/core';
// import { MiHttpService } from './mi-http.service';
import { GenericoService } from './generico.service';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  token;

  constructor(private http: GenericoService) {
    this.token= localStorage.getItem('token');
   }

   TraerMesas()
   {
     return this.http.httpGet("Mesas/TraerTodas")
     .pipe(data=>{return data});
   }

   ServirMesa(idMesa)
   {
    return this.http.httpPost("Mesas/ServirMesa",{"idMesa": idMesa})
    .pipe((data)=>{return data})
   }

   CerrarMesa(idMesa)
   {
    return this.http.httpPost("Mesas/Cerrar",{"idMesa": idMesa})
    .pipe((data)=>{return data})
   }

   CobrarMesa(idMesa)
   {
    return this.http.httpPost("Mesas/Cobrar",{"idMesa": idMesa})
    .pipe((data)=>{return data})
   }
}
