import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: GenericoService) { }

  TraerProductos():Observable<any>{
    return this.http.httpGet("Productos/TraerTodos")
    .pipe(data=>{return data});
    
  }

  TraerProductosLocal(id: number):Observable<any>
  {
    return this.http.httpGet("Productos/TraerProductosLocal/"+id).pipe(data=>{return data});
  }

  TraerMesasDisponibles():Observable<any>{
    return this.http.httpGet("Mesas/TraerDisponibles")
    .pipe(data=>{return data});
    
  }

  IngresarProducto(producto:Producto,myfile)
  {
    console.log(producto);

    const formData = new FormData()
    formData.append("nombre", producto.nombre);
    formData.append("precio",producto.precio.toString());
    formData.append("cant_actual",producto.cant_actual);
    formData.append("foto",producto.foto);
    formData.append("tiempo_prep",producto.tiempo_prep);
    formData.append("id_tipo",producto.id_tipo);
    formData.append("cant_min",producto.cant_min);
    formData.append("responsable","1");
    formData.append("cant_max",producto.cant_max);
    formData.append("id_local",producto.id_local);
    formData.append("punto_repo",producto.punto_repo);

    formData.append("file",myfile);

    return this.http.httpPost("Productos/",formData
    /*{
      "nombre": producto.nombre,
      "precio":producto.precio,
      "cant_actual":producto.cant_actual,
      "foto":producto.foto,
      "tiempo_prep":producto.tiempo_prep,
      "id_tipo":producto.id_tipo,
      "cant_min":producto.cant_min,
      "responsable":1,
      "cant_max":producto.cant_max,
      "punto_repo":producto.punto_repo,
      "id_local":producto.id_local
    }*/
  )
    .pipe((data)=>{return data})
  }

  TraerTiposProductos():Observable<any>{
    return this.http.httpGet("TiposProductos/TraerTodos")
    .pipe(data=>{return data});
  }

}