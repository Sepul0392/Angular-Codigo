import { Pipe, PipeTransform } from '@angular/core';

/**
* Permite filtrar todas las MateriasActivas y listar solo las que pertenecen al profesor que se encuentre logueado.
*/
@Pipe({
  name: 'filterTableMateriaDocente'
})
export class FilterTableMateriaDocentePipe implements PipeTransform {


  //transform(value: any, ...args: any[]): any {
  transform(items: any, idDocenteSearch: any) {
    //console.log("entradas:", idDocenteSearch);
    //console.log("item:", items);
    if (items && items.length) {
      return items.filter(item => {
        if (idDocenteSearch && item.id_docente != idDocenteSearch) {
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
