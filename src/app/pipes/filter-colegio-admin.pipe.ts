import { Pipe, PipeTransform } from '@angular/core';

/**
* Permite filtrar todos los Colegios respecto a su nombre y NIT. Se listaran los Colegios que coincidan con los datos.
*/
@Pipe({
  name: 'filterColegioAdmin'
})
export class FilterColegioAdminPipe implements PipeTransform {

  //transform(value: any, ...args: any[]): any {
  transform(items: any, nombreColegioSearch: string, NITSearch: number) {
    //console.log("entradas:", nombreColegioSearch,  NITSearch);
    //console.log("item:", items);
    if (items && items.length) {
      return items.filter(item => {
        if (nombreColegioSearch && item.nombre_colegio.toLowerCase().indexOf(nombreColegioSearch.toLowerCase()) === -1) {
          return false;
        }
        if (NITSearch && item.NIT != NITSearch) {
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
