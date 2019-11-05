import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Observable } from 'rxjs';
import { local } from '../clases/local';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private http: GenericoService) {   }

    TraerLocales():Observable<any>{
      return this.http.httpGet("Locales/TraerTodos")
      .pipe(data=>{return data});
    }

    IngresarLocal(producto:local)
  {
    console.log(producto);
    return this.http.httpPost("Locales/",{
      "local": producto.local,
      "cuit":producto.cuit,
      "razon_social":producto.razon_social,
      "foto":producto.foto,
      "telefono":producto.telefono
        
    })
    .pipe((data)=>{return data})
  }
}
