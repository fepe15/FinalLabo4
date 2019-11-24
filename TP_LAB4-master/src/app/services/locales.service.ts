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


    IngresarLocal(local:local,myfile)
    {
      console.log(local);

      const formData = new FormData()
      formData.append("nombre", local.nombre);
      formData.append("razon_social",local.razon_social);
      formData.append("cuit",local.cuit.toString());
      formData.append("telefono",local.telefono);
      formData.append("id_rubro",local.id_rubro.toString());
      formData.append("foto",local.foto);
      formData.append("email",local.email);
      formData.append("clave",local.clave);
      formData.append("perfil",local.perfil);
      formData.append("file",myfile);

      return this.http.httpPost("Locales/",formData
      /*{
        "nombre": local.nombre,
        "razon_social":local.razon_social,
        "cuit":local.cuit,
        "telefono":local.telefono,
        "id_rubro":local.id_rubro,
        "foto":local.foto,
        "email":local.email,
        "clave":local.clave,
        "perfil":local.perfil,
        "file":myfile
      }*/
    )
      .pipe((data)=>{return data})
    }

    TraerRubros():Observable<any>{
      return this.http.httpGet("Rubros/TraerTodos")
      .pipe(data=>{return data});
    }
}
