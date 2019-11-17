import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDocenteAdmin'
})
export class FilterDocenteAdminPipe implements PipeTransform {

  //transform(value: any, ...args: any[]): any {
  transform(items: any, palabraSearch: string) {
    //console.log("entradas:", nombreSearch);
    //console.log("item:", items);
    

    if (items && items.length) {
      
      return items.filter(item => {
        if (palabraSearch && (item.nombre_docente.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) && 
           (item.apellido_docente.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) && 
           (item.nombre_usuario.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) && 
           (item.correo_electronico.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1)) {
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
