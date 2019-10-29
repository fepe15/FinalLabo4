import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private http: GenericoService) {   }

    TraerLocales():Observable<any>{
      return this.http.httpGet("Locales/TraerTodos")
      .pipe(data=>{return data});
    }
}
