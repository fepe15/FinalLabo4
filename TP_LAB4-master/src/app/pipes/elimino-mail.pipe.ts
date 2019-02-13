import { Pipe, PipeTransform } from '@angular/core';
import { find, findIndex } from 'rxjs/operators';

@Pipe({
  name: 'eliminoMail'
})
export class EliminoMailPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.substring( 0, value.length -10 );
  }

}
