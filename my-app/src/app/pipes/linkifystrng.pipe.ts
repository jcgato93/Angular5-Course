import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkifystrng' //nombre del pipi con el que sera invocado
})
export class LinkifystrngPipe implements PipeTransform {

  transform(value: any): any {
    return value;
  }

}
