import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCut'
})
export class StringCutPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.length > +args ? value.substring(0, (+args)) + '...' : value;
  }

}
