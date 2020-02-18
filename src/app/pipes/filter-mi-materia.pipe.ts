import { Pipe, PipeTransform } from '@angular/core';

/**
* Permite filtrar todas las MAterias creadas por el profesor respecto a su materia base, grado y docente. Se listaran las materiasActivas que coincidan con los datos.
*/
@Pipe({
  name: 'filterMiMateria'
})
export class FilterMiMateriaPipe implements PipeTransform {

  //transform(value: any, ...args: any[]): any {
  transform(items: any, materiaSearch: number, gradoSearch: number, docenteSearch: number) {
    //console.log("entradas:", materiaSearch, gradoSearch, docenteSearch);
    //console.log("item:", items);
    if (items && items.length) {
      return items.filter(item => {
        if (materiaSearch && item.id_materia != materiaSearch) {
          return false;
        }
        if (gradoSearch && item.id_grado != gradoSearch) {
          return false;
        }
        if (docenteSearch && item.id_docente != docenteSearch) {
          return false;
        }
        return true;
      })
    }
    else {
      return items;
    }
  }

}
