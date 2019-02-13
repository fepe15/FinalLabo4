import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioDolar'
})
export class CambioDolarPipe implements PipeTransform {

  transform(value: number, cambio: number): number {
    
    return  (value / cambio) ;
  }

}
