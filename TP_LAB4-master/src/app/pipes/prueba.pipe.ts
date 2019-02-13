import { Pipe, PipeTransform } from '@angular/core';
import { Cronometro } from '../clases/cronometro';

@Pipe({
  name: 'prueba'
})
export class PruebaPipe implements PipeTransform {


  transform(tEspera: any, args?: any): any {

    return tEspera == "00:00" ? "Terminado" : tEspera;
  }

}
