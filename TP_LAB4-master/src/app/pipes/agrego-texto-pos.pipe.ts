import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agregoTextoPos'
})
export class AgregoTextoPosPipe implements PipeTransform {

  transform(value: any, args: string): string {
    
    return value + ' ' + args;
  }

}
