import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActividad'
})
export class FilterActividadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
