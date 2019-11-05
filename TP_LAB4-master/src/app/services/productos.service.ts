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

  TraerMesasDisponibles():Observable<any>{
    return this.http.httpGet("Mesas/TraerDisponibles")
    .pipe(data=>{return data});
    
  }

  IngresarProducto(producto:Producto)
  {
    console.log(producto);
    return this.http.httpPost("Productos/",{
      "nombre": producto.nombre,
      "precio":producto.precio,
      "cant_actual":producto.cant_actual,
      "foto":"sarasa",
      "tiempo_pre":producto.tiempo_pre,
      "tipo":producto.tipo,
      "cant_min":producto.cant_min,
      "responsable":1,
      "cant_max":producto.cant_max  
    })
    .pipe((data)=>{return data})
  }

  TraerTiposProductos():Observable<any>{
    return this.http.httpGet("TiposProductos/TraerTodos")
    .pipe(data=>{return data});
    
  }

}


