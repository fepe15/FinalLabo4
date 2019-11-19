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


    IngresarLocal(local:local)
    {
      console.log(local);
      return this.http.httpPost("Locales/",{
        "nombre": local.nombre,
        "razon_social":local.razon_social,
        "cuit":local.cuit,
        "telefono":local.telefono,
        "id_rubro":local.id_rubro,
        "foto":local.foto,
        "email":local.email,
        "clave":local.clave,
        "perfil":local.perfil,
      })
      .pipe((data)=>{return data})
    }

    TraerRubros():Observable<any>{
      return this.http.httpGet("Rubros/TraerTodos")
      .pipe(data=>{return data});
    }
}
