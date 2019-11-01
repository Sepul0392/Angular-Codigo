import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompetencia'
})
export class FilterCompetenciaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
