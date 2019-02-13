import { Injectable } from '@angular/core';
import {Http ,Response} from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class GenericoService {



  // api="http://comandasystem.000webhostapp.com/backendVFINAL/";
  api="http://localhost/backendVFINAL/";
  
  constructor(public http:Http) { }
  

  public httpGet(metodo:string):Observable<any>{

    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));    
  }


  public httpPost(metodo:string, objeto:any):Observable<any>
  { 
    return this.http.post(this.api + metodo, objeto)
    .pipe(catchError(this.handleError));
  }


  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }




}
