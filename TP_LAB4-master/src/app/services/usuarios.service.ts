import { Injectable } from '@angular/core';
// import { MiHttpService } from './mi-http.service';
import { GenericoService } from './generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private miHttp: GenericoService) { }
/*
  TraerUsuarios(){
    let datos={
      "token":this.token
    }
    return this.miHttp.httpPost("Usuarios/ListaUsuarios",datos)
    .then((data)=>{return data})
    .catch((data)=>{return data})
    
  }
*/
  TraerUsuarios():Observable<any>{
    return this.miHttp.httpGet("Usuarios/ListaUsuarios").pipe(data=>{return data});
    
  }

  public GuardarHelado(helado) {
   return this.miHttp.httpPost("CargarUno",helado)
   .pipe((data)=>{return data})

 }

 public TraerUnUsuario(id){
   return this.miHttp.httpGet("TraerUno/"+id)
   .pipe(data=>{return data});
 }

 public Borrar(id)
 { 
   return this.miHttp.httpPost("BorrarUno",id)
   .pipe((data)=>{return data})

 }

 public Login(usuario, clave)
{ 
   let datos = {
     "usuario": usuario,
     "clave":clave
   }
   return this.miHttp.httpPost("Sesion/",datos)
   .pipe((data)=>{return data})

}

public CerrarSesion()
{ 
   let datos = {
     "token": localStorage.getItem('token')
   }
   return this.miHttp.httpPost("Sesion/Salir",datos)
   .pipe((data)=>{return data})

}

public BorrarUsuario(id)
{ 
   let datos = {
     "token": localStorage.getItem('token'),
     "id": id
   }
   return this.miHttp.httpPost("Usuarios/Borrar",datos)
   .pipe((data)=>{return data})

}

public SuspenderUsuario(id, estado)
{ 
   let datos = {
     "token": localStorage.getItem('token'),
     "id":id,
     "estado": estado
   }
   return this.miHttp.httpPost("Usuarios/Suspender",datos)
   .pipe((data)=>{return data})

}

public CargarUsuario(usuario, clave, sexo, perfil?)
{ 

    let datos;
    let token= localStorage.getItem('token');
  if(perfil)
  {
    datos = {
      "usuario": usuario,
      "clave":clave,
      "sexo": sexo,
      "perfil":perfil,
      "token": localStorage.getItem('token')
    }

  }
  else
  {
    datos = {
      "usuario": usuario,
      "clave":clave,
      "sexo": sexo,
      "perfil": "Cliente",
      "token": localStorage.getItem('token')
    }
  }
//  console.log(datos);


  return this.miHttp.httpPost("Usuarios/Carga",datos)
  .pipe((data)=>{return data})

}

}
