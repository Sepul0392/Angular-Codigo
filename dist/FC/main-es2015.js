(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<app-header></app-header>-->\r\n\r\n<!--<app-inicio-profesores></app-inicio-profesores>-->\r\n<!--<app-crear-actividad></app-crear-actividad>-->\r\n<!--<app-borrar-actividad></app-borrar-actividad>-->\r\n<!--<app-modificar-actividad></app-modificar-actividad>-->\r\n<!--<app-subir-contenido></app-subir-contenido>-->\r\n<!--<app-borrar-contenido></app-borrar-contenido>-->\r\n<!--<app-buscada></app-buscada>-->\r\n<!--<app-login></app-login>-->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!--<app-footer></app-footer>-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin></app-header-admin>\n\n<!--Contenedor Contenido Pagina-->\n<div class=\"mb-5 col-9 mx-auto\">\n\n    <!--Titulo pagina-->\n    <div class=\"container m-auto pb-2 bg-danger rounded-top\">\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Gestionar Colegio</h1>\n    </div>\n    \n    <!--Contenedor Formularios-->\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\n\n        <!--Tabs-->\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"mt-3\">\n                    <div class=\"card-header tab-card-header\">\n                        <!--Opcion Tab-->\n                        <nav>\n                            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta1\" role=\"tab\" aria-controls=\"nav-Pregunta1\"\n                                    aria-selected=\"true\">Colegios</a>\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta2\" role=\"tab\" aria-controls=\"nav-Pregunta2\"\n                                    aria-selected=\"false\">Materias</a>\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta3-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta3\" role=\"tab\" aria-controls=\"nav-Pregunta3\"\n                                    aria-selected=\"false\">Grados</a>\n                            </div>\n                        </nav>\n        \n                        <!--Tabs Resultados-->\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\n                            <br>\n\n                            <!--Tab 1-->\n                            <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\"\n                                aria-labelledby=\"nav-Pregunta1-tab\">\n                                <!--Gestion de Colegios-->\n                                <div>\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Colegios</h3>\n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <!--Buscar-->\n                                        <h5 class=\"py-3 text-white\">Buscador:</h5>\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-5\">\n                                                <label for=\"inputNombreMateri\" class=\"text-white\">Nombre Colegio</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"inputTextoBusquedaNombreColegio\"\n                                                    placeholder=\"Nombre Colegio\" [(ngModel)]=\"nombreColegio\"\n                                                    name=\"nombreColegio\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label for=\"inputNombreMateri\" class=\"text-white\">NIT Colegio</label>\n                                                <input type=\"number\" class=\"form-control\" id=\"inputTextoBusquedaNITColegio\"\n                                                    placeholder=\"NIT Colegio\" [(ngModel)]=\"NITColegio\" name=\"NITColegio\">\n                                            </div>\n                                        </div>\n        \n                                        <!--Resultados-->\n                                        <h5 class=\"py-3 text-white\">Resultados:</h5>\n                                        <div class=\"row mx-auto\">\n                                            <table\n                                                class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\"\n                                                style=\"height: 256px;\">\n                                                <thead class=\"bg-danger\">\n                                                    <th class=\"pl-3 pr-5 py-2 text-dark\">Nombre Colegio</th>\n                                                    <th class=\"pl-3 pr-3 py-2 text-dark text-center\">NIT</th>\n                                                    <th class=\"pl-3 pr-3 py-2 text-dark text-center\">Ciudad</th>\n                                                    <th class=\"pl-3 pr-4 py-2 text-dark text-center\">Accion</th>\n                                                </thead>\n                                                <tbody class=\"bg-light\">\n                                                    <tr mdbTableCol *ngFor=\"let colegio of colegios | filterColegioAdmin: nombreColegio:NITColegio\">\n                                                        <td class=\"pl-3 pr-5 py-2 text-dark\">{{ colegio.nombre_colegio }}</td>\n                                                        <td class=\"pl-3 pr-3 py-2 text-dark text-center\">{{ colegio.NIT }}</td>\n                                                        <td class=\"pl-3 pr-3 py-2 text-dark text-center\">{{ colegio.ciudad }}\n                                                        </td>\n                                                        <td class=\"pl-3 pr-4 py-2\">\n                                                            <a class=\"btn bg-warning py-0 px-1 text-dark\" data-toggle=\"modal\"\n                                                                data-target=\"#mimodalejemplo7\" (click)=\"getColegioinForm(colegio)\">Actualizar</a>\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n        \n                                    <!--Informacion Colegio-->\n                                    <div class=\"container\">\n                                        <h5 class=\"py-3 text-white text-center\">Crear o Actualizar Colegio:</h5>\n                                        <form #frmInfoColegio=\"ngForm\">\n                                            <div class=\"col-6 mx-auto\">\n                                                <div class=\"form-group col\">\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNombreColegio\" class=\"text-white \">Nombre\n                                                            Colegio</label>\n                                                        <input type=\"text\" name=\"nombre_colegio\" class=\"form-control col\"\n                                                            id=\"inputNombreColegio\" placeholder=\"Nombre Colegio\" required [(ngModel)]=\"this.AuthAdminService.selectedColegio.nombre_colegio\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNombreRector\" class=\"text-white \">Nombre Rector</label>\n                                                        <input type=\"text\" name=\"rector\" class=\"form-control col\"\n                                                            id=\"inputNombreRector\" placeholder=\"Nombre Rector\" required [(ngModel)]=\"this.AuthAdminService.selectedColegio.rector\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNIT\" class=\"text-white \">NIT Colegio</label>\n                                                        <input type=\"number\" name=\"NIT\" class=\"form-control col-7\" id=\"inputNIT\"\n                                                            placeholder=\"NIT Colegio\" required [(ngModel)]=\"this.AuthAdminService.selectedColegio.NIT\">\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"form-group col\">\n                                                            <label for=\"inputCiudadColegio\" class=\"text-white \">Ciudad</label>\n                                                            <input type=\"text\" name=\"ciudad\" class=\"form-control col\"\n                                                                id=\"inputCiudadColegio\" placeholder=\"Ciudad Colegio\" required\n                                                                [(ngModel)]=\"this.AuthAdminService.selectedColegio.ciudad\">\n                                                        </div>\n                                                        <div class=\"form-group col\">\n                                                            <label for=\"inputTelefonoColegio\"\n                                                                class=\"text-white \">Telefono</label>\n                                                            <input type=\"text\" name=\"telefono\" class=\"form-control col\"\n                                                                id=\"inputTelefonoColegio\" placeholder=\"Telefono Colegio\"\n                                                                required\n                                                                [(ngModel)]=\"this.AuthAdminService.selectedColegio.telefono\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputDireccionColegio\" class=\"text-white \">Direccion</label>\n                                                        <input type=\"text\" name=\"direccion\" class=\"form-control col\"\n                                                            id=\"inputDireccionColegio\" placeholder=\"Direccion Colegio\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedColegio.direccion\">\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"form-group col-8\">\n                                                            <label for=\"inputTipoColegion\" class=\"text-white \">Tipo\n                                                                Colegio</label>\n                                                            <input type=\"text\" name=\"tipo_colegio\" class=\"form-control col\"\n                                                                id=\"inputTipoColegion\" placeholder=\"Tipo Colegio\" required\n                                                                [(ngModel)]=\"this.AuthAdminService.selectedColegio.tipo_colegio\">\n                                                        </div>\n                                                        <div class=\"form-group col\">\n                                                            <label for=\"inputCalendario\" class=\"text-white \">Calendario</label>\n                                                            <input type=\"text\" name=\"calendario\" class=\"form-control col\"\n                                                                id=\"inputCalendario\" placeholder=\"Calendario Colegio\" required\n                                                                [(ngModel)]=\"this.AuthAdminService.selectedColegio.calendario\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <br>\n        \n                                            <div class=\"row\">\n                                                <!--Boton Crear Datos Colegio-->\n                                                <div class=\"mr-2  ml-auto pb-4 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-danger px-5 py-4 font-weight-bold\" data-toggle=\"modal\"\n                                                        data-target=\"#mimodalejemplo6\"\n                                                        (click)=\"crearColegio(frmInfoColegio)\">Crear</a>\n                                                </div>\n                                                <!--Boton Actualizar Datos Colegio-->\n                                                <div class=\"ml-2 mr-auto pb-4 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-danger px-4 py-4 font-weight-bold\" data-toggle=\"modal\"\n                                                        data-target=\"#mimodalejemplo\" (click)=\"actualizarColegio(frmInfoColegio)\">Actualizar</a>\n                                                </div>\n                                            </div>\n                                            <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\n                                                <a class=\"btn bg-danger px-5 py-2 font-weight-bold\"\n                                                    (click)=\"resetForm(frmInfoColegio)\">Limpiar</a>\n                                            </div>\n                                        </form>\n                                        <hr class=\"style5\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--Tab 2-->\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\n                                <!--Gestion de Materias-->\n                                <div>\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Materias</h3>\n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <form #frmCrearMateria=\"ngForm\">                                          \n\n                                            <!--Crear Materia-->\n                                            <h5 class=\"py-3 text-white\">Crear Materia:</h5>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-5  pr-3\">\n                                                    <label for=\"inputNombreMateri\" class=\"text-white\">Nombre Materia</label>\n                                                    <input type=\"text\" name=\"nombre_materia\" class=\"form-control\" id=\"inputNombreMateria\" placeholder=\"Nombre Materia\" required\n                                                        [(ngModel)]=\"nombre_materia\">\n                                                </div>\n                                                <div class=\"form-group col\">\n                                                    <label for=\"inputAreaMateri\" class=\"text-white\">Area</label>\n                                                    <select [(ngModel)]=\"id_areaMateria\" name=\"id_areaMateria\" id=\"inputAreaMateria\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let area of areasMaterias\" [value]=\"area.id_areaMateria\">{{area.nombre_areaMateria}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group col\">\n                                                    <label for=\"inputColegioM\" class=\"text-white\">Colegio</label>\n                                                    <select [(ngModel)]=\"id_colegioM\" name=\"id_colegioM\" id=\"inputColegioM\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            \n                                            <!--Boton Crear Materia-->\n                                            <div class=\"bg-secondary row pb-4 pt-2 justify-content-md-center no-gutters\">\n                                                <a class=\"btn bg-danger px-5 py-2 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\"\n                                                    (click)=\"crearMateria(frmCrearMateria)\">Crear Materia</a>\n                                            </div>\n        \n                                            <br>\n        \n                                            <!--Borrar Materia-->\n                                            <h5 class=\"py-3 text-white\">Borrar Materia:</h5>\n                                            <div class=\"row mx-auto\">\n                                                <table\n                                                    class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\"\n                                                    style=\"height: 256px;\">\n                                                    <thead class=\"bg-danger\">\n                                                        <th class=\"pl-3 pr-5 py-2 text-dark\">Nombre Materia</th>\n                                                        <th class=\"pl-3 pr-2 py-2 text-dark\">Area Materia</th>\n                                                        <th class=\"pl-3 pr-4 py-2 text-dark\">Accion</th>\n                                                    </thead>\n                                                    <tbody class=\"bg-light\">\n                                                        <tr mdbTableCol *ngFor=\"let materia of materiasVisualizar\">\n                                                            <td class=\"pl-3 pr-5 py-2 text-dark\">{{ materia.nombre_materia }}\n                                                            </td>\n                                                            <td class=\"pl-3 pr-2 py-2 text-dark\">{{ materia.areaMateria }}</td>\n                                                            <td class=\"pl-3 pr-4 py-2\">\n                                                                <a class=\"btn bg-warning py-0 px-1 text-dark\"\n                                                                    data-toggle=\"modal\" data-target=\"#mimodalejemplo3\"\n                                                                    (click)=\"saveDataMateria(materia)\">borrar</a>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n\n                                            <!--Mirar Materias de Profesores-->\n                                            <br>\n                                            <br>\n                                            <div class=\"pl-3 row\">\n                                                <h5 class=\"py-3 text-white\">Materias de Profesores: </h5>\n                                                <div class=\"col mt-2 px-0 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-danger px-1 font-weight-bold mt-2 ml-3 py-0 px-3\" data-toggle=\"modal\"\n                                                        data-target=\"#mimodalejemplo8\" (click)=\"getInformacionCompletaMateriasActivas()\">ver</a>\n                                                </div>\n                                            </div>\n\n                                        </form>\n                                        <br>\n                                        <hr class=\"style5\">\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            <!--Tab 3-->\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta3\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3-tab\">\n                                <!--Gestion de Grados-->\n                                <div>\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Grados</h3>\n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <form #frmCrearGrados=\"ngForm\">\n        \n                                            <!--Crear Grado-->\n                                            <h5 class=\"py-3 text-white\">Crear Grado:</h5>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-5  pr-3\">\n                                                    <label for=\"inputNombreGrado\" class=\"text-white\">Nombre Grado</label>\n                                                    <input type=\"text\" name=\"nombre_grado\" class=\"form-control mt-2\"\n                                                        id=\"inputNombreGrado\" placeholder=\"Nombre Grado\" required\n                                                        [(ngModel)]=\"nombre_grado\">\n                                                </div>\n                                                <div class=\"form-group\">\n                                                    <label for=\"inputNumeroGrado\" class=\"text-white\">Numero Grado</label>\n                                                    <input type=\"text\" name=\"id_grado\" class=\"form-control mt-2\"\n                                                        style=\"width: 115px;\" id=\"inputNumeroGrado\" placeholder=\"# Grado\"\n                                                        required [(ngModel)]=\"id_grado\">\n                                                </div>\n                                                <!--Boton Crear Grado-->\n                                                <div class=\"col px-0 justify-content-md-center no-gutters\">\n                                                    <br>\n                                                    <a class=\"btn bg-danger px-1 font-weight-bold mt-2 ml-3\" data-toggle=\"modal\"\n                                                        data-target=\"#mimodalejemplo4\" (click)=\"CrearGrado(frmCrearGrados)\">Crear Grado</a>\n                                                </div>\n                                            </div>\n        \n                                            <br>\n        \n                                            <!--Borrar Grado-->\n                                            <h5 class=\"py-3 text-white\">Borrar Grado:</h5>\n                                            <div class=\"row mx-auto\">\n                                                <table\n                                                    class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\"\n                                                    style=\"height: 256px;\">\n                                                    <thead class=\"bg-danger\">\n                                                        <th class=\"pl-3 pr-5 py-2 text-dark\">Nombre Grado</th>\n                                                        <th class=\"pl-3 pr-2 py-2 text-dark\"># Grado</th>\n                                                        <th class=\"pl-3 pr-4 py-2 text-dark\">Accion</th>\n                                                    </thead>\n                                                    <tbody class=\"bg-light\">\n                                                        <tr mdbTableCol *ngFor=\"let grado of grados\">\n                                                            <td class=\"pl-3 pr-5 py-2 text-dark\">{{ grado.nombre_grado }}</td>\n                                                            <td class=\"pl-3 pr-2 py-2 text-dark text-center\">{{ grado.id_grado }}</td>\n                                                            <td class=\"pl-3 pr-4 py-2\"><a class=\"btn bg-warning py-0 px-1 text-dark\" data-toggle=\"modal\" data-target=\"#mimodalejemplo5\"\n                                                                    (click)=\"saveDataGrado(grado)\">borrar</a>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </form>\n                                        <br>\n                                        <hr class=\"style5\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>   \n    </div>\n\n    <!-- Modal Confirmar Actualizacion Datos Colegio -->\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body text-info\" *ngIf=\"correcto\">\n                    Se han Actualizado los datos del colegio.\n                </div>\n                <div class=\"modal-body text-danger\" *ngIf=\"error\">\n                    No se ha Seleccionado un Colegio para Actualizar.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Nueva Materia -->\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\n                    Creando una nueva Materia. Espere por favor.\n                </div>\n                <div class=\"modal-body text-info\" *ngIf=\"correcto1\">\n                    Se ha creado una nueva Materia.\n                </div>\n                <div class=\"modal-body text-danger\" *ngIf=\"error1\">\n                    La Materia no se ha podido crear. Revisa que has ingresado todos los datos requeridos.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmacion Borrar Materia -->\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Accion</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Para borrar la Materia presione aceptar, de lo contrario presione X\n                    para cancelar.\n                </div>\n                <div class=\"modal-footer bg-light justify-content-md-center no-gutters py-1 bg-light\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"deleteMateria()\">Aceptar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Nuevo Grado -->\n    <div class=\"modal fade\" id=\"mimodalejemplo4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel4\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\n                    Creando un nuevo Grado. Espere por favor.\n                </div>\n                <div class=\"modal-body text-info\" *ngIf=\"correcto2\">\n                    Se ha creado un nuevo Grado.\n                </div>\n                <div class=\"modal-body text-danger\" *ngIf=\"error2\">\n                    El Grado no se ha podido crear. Revisa que has ingresado todos los datos requeridos.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmacion Borrar Grado -->\n    <div class=\"modal fade\" id=\"mimodalejemplo5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel5\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Accion</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Para borrar el Grado presione aceptar, de lo contrario presione X\n                    para cancelar.\n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters py-1 bg-light\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"deleteGrado()\">Aceptar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Nuevo Colegio -->\n    <div class=\"modal fade\" id=\"mimodalejemplo6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel6\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\n                    Creando un nuevo Colegio. Espere por favor.\n                </div>\n                <div class=\"modal-body text-info\" *ngIf=\"correcto3\">\n                    Se ha creado un nuevo Colegio.\n                </div>\n                <div class=\"modal-body text-danger\" *ngIf=\"error3\">\n                    El Colegio no se ha podido crear. Revisa que has ingresado todos los datos requeridos.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmacion Colegio Seleccionado -->\n    <div class=\"modal fade\" id=\"mimodalejemplo7\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel7\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Ha sido seleccionado un Colegio. Los datos han sido cargados para revisar y modificar.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Materias Profesores -->\n    <div class=\"modal fade\" id=\"mimodalejemplo8\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel8\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Materias Docentes</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body bg-secondary\">\n                    <div class=\"contenedor mx-3 py-3\">\n                        <!--Filtros-->\n                        <div class=\"row\">\n                            <div class=\"form-group col\">\n                                <label for=\"inputMateriaMA\" class=\"text-white\">Materia</label>\n                                <select [(ngModel)]=\"materiaSelectedMA\" id=\"inputMateriaMA\" name=\"materiaSelectedMA\" class=\"form-control\" ngModel required>\n                                    <option selected></option>\n                                    <option *ngFor=\"let mater of materias\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col\">\n                                <label for=\"inputGradoMA\" class=\"text-white\">Grado</label>\n                                <select [(ngModel)]=\"gradoSelectedMA\" id=\"inputGradoMA\" name=\"gradoSelectedMA\" class=\"form-control\" ngModel required>\n                                    <option selected></option>\n                                    <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col\">\n                                <label for=\"inputDocenteMA\" class=\"text-white\">Profesor</label>\n                                <select [(ngModel)]=\"docenteSelectedMA\" id=\"inputDocenteMA\" name=\"docenteSelectedMA\" class=\"form-control\" ngModel required>\n                                    <option selected></option>\n                                    <option *ngFor=\"let docen of docentes\" [value]=\"docen.id_docente\">\n                                        {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-5 mx-auto\">\n                            <label for=\"inputColegioMA\" class=\"text-white\">Colegio</label>\n                            <select [(ngModel)]=\"colegioSelectedMA\" id=\"inputColegioMA\" name=\"colegioSelectedMA\" class=\"form-control\" ngModel\n                                required>\n                                <option selected></option>\n                                <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{(colegio.nombre_colegio)}}</option>\n                            </select>\n                        </div>\n                \n                        <!--Resultados-->\n                        <h5 class=\"py-3 text-white\">Resultados:</h5>\n                        <div class=\"row mx-auto\">\n                            <table class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\"\n                                style=\"height: 256px;\">\n                                <thead class=\"bg-danger\">\n                                    <th class=\"pl-3 pr-5 py-2 text-dark\">Nombre Materia</th>\n                                    <th class=\"pl-3 pr-3 py-2 text-dark text-center\">Materia Base</th>\n                                    <th class=\"pl-3 pr-3 py-2 text-dark text-center\">grado</th>\n                                    <th class=\"pl-3 pr-3 py-2 text-dark text-center\">Docente</th>\n                                    <th class=\"pl-3 pr-4 py-2 text-dark text-center\">Colegio</th>\n                                </thead>\n                                <tbody class=\"bg-light\">\n                                    <tr mdbTableCol *ngFor=\"let materiaActiva of MateriaActivaInfo | filterMateriaactivaAdmin: materiaSelectedMA:gradoSelectedMA:docenteSelectedMA:colegioSelectedMA\">\n                                        <td class=\"pl-3 pr-5 py-2 text-dark\">{{ materiaActiva.nombre_materiaActiva }}</td>\n                                        <td class=\"pl-3 pr-3 py-2 text-dark text-center\">{{ materiaActiva.nombre_materia }}</td>\n                                        <td class=\"pl-3 pr-3 py-2 text-dark text-center\">{{ materiaActiva.id_grado }}</td>\n                                        <td class=\"pl-3 pr-3 py-2 text-dark text-center\">{{ materiaActiva.docente }}</td>\n                                        <td class=\"pl-3 pr-4 py-2 text-dark text-center\">{{ materiaActiva.colegio }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin></app-header-admin>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 col-9 mx-auto\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-info rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Gestionar Competencias</h1>\r\n    </div>\r\n    \r\n    <!--Contenedor Formularios-->\r\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Tabs-->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"mt-3\">\r\n                    <div class=\"card-header tab-card-header\">\r\n                        <!--Opcion Tab-->\r\n                        <nav>\r\n                            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta1\" role=\"tab\" aria-controls=\"nav-Pregunta1\" aria-selected=\"true\">Competencias</a>\r\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta2\" role=\"tab\" aria-controls=\"nav-Pregunta2\" aria-selected=\"false\">Areas de materias</a>\r\n                            </div>\r\n                        </nav>\r\n        \r\n                        <!--Tabs Resultados-->\r\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                            <br>\r\n\r\n                            <!--Tab 1-->\r\n                            <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\r\n                                <!--Gestion de Competencias-->\r\n                                <div>\r\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Competencias</h3>\r\n                            \r\n                                    <div class=\"contenedor mx-3 py-3\">\r\n                                        <form #frmBuscarCompetencia=\"ngForm\">\r\n                            \r\n                                            <!--Buscar-->\r\n                                            <h5 class=\"py-3 text-white\">Buscador:</h5>\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaCompetencia\" placeholder=\"Palabras Claves\" \r\n                                                    [(ngModel)]=\"nombreCompetenciaSelected\" name=\"nombreCompetenciaSelected\">\r\n                                            </div>\r\n                                            <!-- Selectores -->\r\n                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                                            <div class=\"form-row\">\r\n                                                <div class=\"form-group col-5\">\r\n                                                    <label for=\"inputAreaMateri\" class=\"text-white\">Area</label>\r\n                                                    <select [(ngModel)]=\"areaMateriaSelected\" name=\"areaMateriaSelected\" id=\"inputAreaMateria\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let area of areasMaterias | slice:1; let i = index\" [value]=\"area.id_areaMateria\">{{area.nombre_areaMateria}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col-5\">\r\n                                                    <label for=\"inputColegioBusqueda\" class=\"text-white\">Colegio</label>\r\n                                                    <select [(ngModel)]=\"colegioSelected\" name=\"colegioSelected\" id=\"inputColegioBusqueda\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                            \r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-row\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputGrado\" class=\"text-white\">Grado Especifico</label>\r\n                                                    <select [(ngModel)]=\"gradoSelected\" name=\"gradoSelected\" id=\"inputgrado\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputGradoInicialC\" class=\"text-white\">Grado Inicial</label>\r\n                                                    <select [(ngModel)]=\"gradoInicialC\" name=\"gradoInicialC\" id=\"inputgradoInicialC\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputGradoFinalC\" class=\"text-white\">Grado Final</label>\r\n                                                    <select [(ngModel)]=\"gradoFinalC\" name=\"gradoFinalC\" id=\"inputGradoFinalC\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                            \r\n                                                </div>\r\n                                            </div>\r\n                            \r\n                                            <!--Resultados-->\r\n                                            <h5 class=\"py-3 text-white\">Resultados:</h5>\r\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                style=\"width: 95%; height: 450px\">\r\n                                                <!--Resultado-->\r\n                                                <div class=\"row-1\" *ngFor=\"let compet of competenciasVisualizar | filterCompetenciaAdmin: nombreCompetenciaSelected:areaMateriaSelected:gradoSelected:gradoInicialC:gradoFinalC:colegioSelected\">\r\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                        <div class=\"row no-gutters border border-secondary\">\r\n                                                            <div class=\"col\" style=\"max-width: 840px;\">\r\n                                                                <div class=\"card-body p-2\">\r\n                                                                    <p class=\"card-text \">Competencia: {{compet.nombre_competencia}}.</p>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Area: {{compet.areaMateria}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado Inicial: {{compet.gradoInicial}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado Final: {{compet.gradoFinal}}</small></p>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <!--Boton borrar Competencia-->\r\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo3\" (click)=\"saveDataCompetencia(compet)\">Borrar Competencia</a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                        <br>\r\n                                    </div>\r\n                            \r\n                                    <div class=\"contenedor py-3\">\r\n                                        <form #frmCrearCompetencia=\"ngForm\">\r\n                                            <h5 class=\"py-3 text-white text-center\">Crear Competencias:</h5>\r\n                                            <div class=\"col-5 mx-auto\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputNombreCompetencia\" class=\"text-white \">Competencia</label>\r\n                                                        <input type=\"text\" name=\"nombre_competencia\" class=\"form-control col\" id=\"inputNombreUsuario\" placeholder=\"Nombre / Descripcion\" required\r\n                                                            [(ngModel)]=\"nombre_competencia\">\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputColegioC\" class=\"text-white\">Colegio</label>\r\n                                                        <select [(ngModel)]=\"id_colegioC\" name=\"id_colegioC\" id=\"inputColegioC\" class=\"form-control\" ngModel required>\r\n                                                            <option selected></option>\r\n                                                            <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputAreaMateriN\" class=\"text-white\">Area</label>\r\n                                                        <select [(ngModel)]=\"id_areaMateria\" name=\"id_areaMateria\" id=\"inputAreaMateriaN\" class=\"form-control\" ngModel required>\r\n                                                            <option selected></option>\r\n                                                            <option *ngFor=\"let area of areasMaterias | slice:1; let i = index\" [value]=\"area.id_areaMateria\">{{area.nombre_areaMateria}}</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <div class=\"form-group col\">\r\n                                                            <label for=\"inputGradoInicial\" class=\"text-white\">Grado Inicial</label>\r\n                                                            <select [(ngModel)]=\"gradoInicial\" name=\"gradoInicial\" id=\"inputgradoInicial\" class=\"form-control\" ngModel required>\r\n                                                                <option selected></option>\r\n                                                                <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col\">\r\n                                                            <label for=\"inputGradoFinal\" class=\"text-white\">Grado Final</label>\r\n                                                            <select [(ngModel)]=\"gradoFinal\" name=\"gradoFinal\" id=\"inputGradoFinal\" class=\"form-control\" ngModel required>\r\n                                                                <option selected></option>\r\n                                                                <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                            \r\n                                            <!--Boton Crear Competencia-->\r\n                                            <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\r\n                                                <a class=\"btn bg-info px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\"\r\n                                                    (click)=\"crearCompetencia(frmCrearCompetencia)\">Crear Competencia</a>\r\n                                            </div>\r\n                                        </form>\r\n                                        <hr class=\"style4\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Tab 2-->\r\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\r\n                                <!--Gestion de AreaMateria-->\r\n                                <div>\r\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Areas de Materias</h3>\r\n                                    <div class=\"contenedor mx-3 py-3\">\r\n                                        <form #frmCrearAreaMateria=\"ngForm\">\r\n                            \r\n                                            <!--Crear AreaMaterias-->\r\n                                            <h5 class=\"py-3 text-white\">Crear Area:</h5>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"form-group col-5 pr-3\">\r\n                                                        <label for=\"inputNombreMateriaActiva\" class=\"text-white\">Nombre del Area</label>\r\n                                                    <input type=\"text\" name=\"nombre_areaMateria\" class=\"form-control\" id=\"inputNombreMateriaActiva\" placeholder=\"Nombre Area de Materias\" required \r\n                                                        [(ngModel)]=\"nombre_areaMateria\">\r\n                                                </div>\r\n                                                <div class=\"form-group col-4 pr-3 pl-0\">\r\n                                                    <label for=\"inputColegioAM\" class=\"text-white\">Colegio</label>\r\n                                                    <select [(ngModel)]=\"id_colegioAM\" name=\"id_colegioAM\" id=\"inputColegioAM\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <!--Boton Crear AreaMateria-->\r\n                                                <div class=\"bg-secondary col px-0 justify-content-md-center no-gutters pt-2\">\r\n                                                    <br>\r\n                                                    <a class=\"btn bg-info px-1 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo4\"\r\n                                                        (click)=\"CrearAreaMateria(frmCrearAreaMateria)\">Crear Area</a>\r\n                                                </div>\r\n                                            </div>\r\n                            \r\n                                            <br>\r\n                            \r\n                                            <!--Borrar Area de Materias-->\r\n                                            <h5 class=\"py-3 text-white\">Borrar Area:</h5>\r\n                                            <div class=\"row mx-auto\">\r\n                                                <table class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\" style=\"height: 256px;\">\r\n                                                    <thead class=\"bg-info\">\r\n                                                        <th class=\"pl-3 pr-5 py-2 text-dark\">Nombre Area</th>\r\n                                                        <th class=\"pl-5 pr-4 py-2 text-dark\">Accion</th>\r\n                                                    </thead>\r\n                                                    <tbody class=\"bg-light\">\r\n                                                        <tr mdbTableCol *ngFor=\"let areaMateria of areasMaterias | slice:1; let i = index\">\r\n                                                            <td class=\"pl-3 pr-5 py-2 text-dark\">{{ areaMateria.nombre_areaMateria }}</td>\r\n                                                            <td class=\"pl-5 pr-4 py-2\">\r\n                                                                <a class=\"btn bg-warning py-0 px-1 text-dark\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\"\r\n                                                                    (click)=\"saveDataAreaMateria(areaMateria)\">borrar</a>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </form>\r\n                                        <br>\r\n                                        <hr class=\"style4\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Nueva Competencia -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 style=\"cursor:context-menu\" class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto1\">\r\n                    Se ha creado una nueva Competencia.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error1\">\r\n                    La Competencia no se ha podido crear. Revisa que has ingresado todos los datos requeridos.\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\r\n                    Creando Competencia. Espere por favor.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Nueva AreaMateria -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel4\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h4>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto2\">\r\n                    Se ha creado una nueva Area.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error2\">\r\n                    El Area no se ha podido crear. Revisa que has ingresado todos los datos requeridos.\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\r\n                    Creando Area. Espere por favor.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Confirmar Borrar AreaMateria -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Confirmar Accion</h4>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Para borrar el Area presione aceptar, de lo contrario presione X\r\n                    para cancelar.\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"deleteAreaMateria()\">Aceptar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Confirmar Borrar Competencia -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Confirmar Accion</h4>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Para borrar la Competencia presione aceptar, de lo contrario presione X\r\n                    para cancelar.\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"deleteCompetencia()\">Aceptar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin></app-header-admin>\n\n<!--Contenedor Contenido Pagina-->\n<div class=\"mb-5 col-9 mx-auto\">\n\n    <!--Titulo pagina-->\n    <div class=\"container m-auto pb-2 bg-success rounded-top\">\n        <h1 class=\"mt-5 pt-4 text-center m \">Gestionar Usuarios</h1>\n    </div>\n    \n    <!--Contenedor Formularios-->\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\n    \n        <!--Tabs-->\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"mt-3\">\n                    <div class=\"card-header tab-card-header\">\n                        <!--Opcion Tab-->\n                        <nav>\n                            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta1\" role=\"tab\" aria-controls=\"nav-Pregunta1\" aria-selected=\"true\">Docentes</a>\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta2\" role=\"tab\" aria-controls=\"nav-Pregunta2\" aria-selected=\"false\">Estudiantes</a>\n                            </div>\n                        </nav>\n        \n                        <!--Tabs Resultados-->\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\n                            <br>\n\n                            <!--Tab 1-->\n                            <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\n                                <!--Gestion de Competencias-->\n                                <div>\n                                    <h3 class=\"py-3 text-center text-white\">Docentes</h3>\n                            \n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <form #frmBuscarDocente=\"ngForm\">\n                            \n                                            <!--Buscar-->\n                                            <h5 class=\"py-3 text-white\">Buscador:</h5>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaDocente\" placeholder=\"Nombre / Apellido / Usuario / Correo\" [(ngModel)]=\"palabraClaveDSelected\"\n                                                    name=\"palabraClaveDSelected\">\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col-4\">\n                                                    <label for=\"inputColegioD\" class=\"text-white\">Colegio</label>\n                                                    <select [(ngModel)]=\"colegioDSelected\" name=\"colegioDSelected\" id=\"inputColegioD\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                            \n                                            <!--Resultados-->\n                                            <h5 class=\"py-3 text-white\">Resultados:</h5>\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar bg-light\" style=\"width: 95%; height: 450px\">\n                                                <!--Resultado-->\n                                                <div class=\"row-1\" *ngFor=\"let docente of docenteVisualizar | filterDocenteAdmin: palabraClaveDSelected:colegioDSelected\">\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                        <div class=\"row no-gutters border border-secondary\">\n                                                            <div class=\"col\" style=\"max-width: 840px;\">\n                                                                <div class=\"card-body p-2\">\n                                                                    <p class=\"card-text \">Nombre Docente: {{docente.nombre_docente}} {{docente.apellido_docente}}</p>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Colegio: {{docente.colegio}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Nombre Usuario: {{docente.nombre_usuario}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Correo Electronico: {{docente.correo_electronico}}</small></p>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <!--Boton Editar y Borrar-->\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                            <div>\n                                                                <a class=\"btn bg-warning mr-2\" data-toggle=\"modal\" data-target=\"#mimodalejemplo5\"\n                                                                    (click)=\"getDocenteinForm(docente)\">Editar</a>\n                                                            </div>\n                                                            <div>\n                                                                <a class=\"btn bg-warning ml-2\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\"\n                                                                    (click)=\"saveDataDocente(docente)\">Borrar</a>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <br>\n                                    </div>\n                            \n                                    <div class=\"contenedor py-3\">\n                                        <form #frmInfoDocente=\"ngForm\">\n                                            <h5 class=\"py-3 text-white text-center\">Actualizar Información:</h5>\n                                            <div class=\"col-5 mx-auto\">\n                                                <div class=\"form-group col\">\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNombreDocente\" class=\"text-white \">Nombre Profesor</label>\n                                                        <input type=\"text\" name=\"nombre_docente\" class=\"form-control col\" id=\"inputNombreDocente\" placeholder=\"Nombre\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedDocente.nombre_docente\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputApellidoProfesor\" class=\"text-white \">Apellido Profesor</label>\n                                                        <input type=\"text\" name=\"apellido_docente\" class=\"form-control col\" id=\"inputApellidoProfesor\" placeholder=\"Apellido\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedDocente.apellido_docente\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputCorreo\" class=\"text-white \">Correo Electronico</label>\n                                                        <input type=\"text\" name=\"correo_electronico\" class=\"form-control col\" id=\"inputCorreo\" placeholder=\"Correo Electronico\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedDocente.correo_electronico\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNombreUsuario\" class=\"text-white \">Nombre Usuario</label>\n                                                        <input type=\"text\" name=\"nombre_usuario\" class=\"form-control col\" id=\"inputNombreUsuario\" placeholder=\"Usuario\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedDocente.nombre_usuario\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputContrasenaD\" class=\"text-white \">Contraseña</label>\n                                                        <input type=\"text\" name=\"contrasena\" class=\"form-control col\" id=\"inputContrasenaD\" placeholder=\"Contraseña\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedDocente.contrasena\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <br>\n                            \n                                            <!--Boton Actualizar Docente-->\n                                            <div class=\"row\">\n                                                <div class=\"mr-2 ml-auto pb-4 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-success px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\" \n                                                        (click)=\"actualizarDocente(frmInfoDocente)\">Actualizar</a>\n                                                </div>\n                                                <div class=\"ml-2 mr-auto pb-4 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-success px-5 py-4 font-weight-bold\"\n                                                        (click)=\"resetForm(frmInfoDocente)\">Limpiar</a>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <hr class=\"style8\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--Tab 2-->\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\n                                <!--Gestion de Estudiantes-->\n                                <div>\n                                    <h3 class=\"py-3 text-center text-white\">Estudiantes</h3>\n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <form #frmBuscarEstudiante=\"ngForm\">\n                            \n                                            <!--Buscar Estudiante-->\n                                            <h5 class=\"py-3 text-white\">Buscador:</h5>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaEstudiante\" placeholder=\"Nombre / Apellido / Usuario / Correo\" [(ngModel)]=\"palabraClaveESelected\"\n                                                    name=\"palabraClaveESelected\">\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"form-group col\">\n                                                    <label for=\"inputGrado\" class=\"text-white\">Grado</label>\n                                                    <select [(ngModel)]=\"gradoSelected\" name=\"gradoSelected\" id=\"inputgrado\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group col\">\n                                                    <label for=\"inputCurso\" class=\"text-white\">Curso</label>\n                                                    <select [(ngModel)]=\"cursoSelected\" name=\"cursoSelected\" id=\"inputCurso\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let curso of cursos\" [value]=\"curso.id_curso\">{{curso.nombre_curso}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group col\">\n                                                    <label for=\"inputColegioE\" class=\"text-white\">Colegio</label>\n                                                    <select [(ngModel)]=\"colegioESelected\" name=\"colegioESelected\" id=\"inputColegioE\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                            \n                                            <!--Resultados-->\n                                            <h5 class=\"py-3 text-white\">Resultados:</h5>\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\n                                                style=\"width: 95%; height: 450px\">\n                                                <!--Resultado-->\n                                                <div class=\"row-1\" *ngFor=\"let estudiante of estudiantesVisualizar | filterEstudiantesAdmin: palabraClaveESelected:gradoSelected:cursoSelected:colegioESelected\">\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                        <div class=\"row no-gutters border border-secondary\">\n                                                            <div class=\"col\" style=\"max-width: 840px;\">\n                                                                <div class=\"card-body p-2\">\n                                                                    <p class=\"card-text \">Nombre Estudiante: {{estudiante.nombre_estudiante}} {{estudiante.apellido_estudiante}}</p>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado: {{estudiante.grado_estudiante}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Curso: {{estudiante.curso}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Colegio: {{estudiante.colegio}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Nombre Usuario: {{estudiante.nombre_usuario}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Correo Electronico: {{estudiante.correo_electronico}}</small></p>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <!--Boton Editar y Borrar-->\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                            <a class=\"btn bg-warning mr-2\" data-toggle=\"modal\" data-target=\"#mimodalejemplo6\"\n                                                                (click)=\"getEstudianteinForm(estudiante)\">Editar</a>\n                                                            <a class=\"btn bg-warning ml-2\" data-toggle=\"modal\" data-target=\"#mimodalejemplo3\"\n                                                                (click)=\"saveDataEstudiante(estudiante)\">Borrar</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <br>\n                                    </div>\n                            \n                                    <div class=\"contenedor py-3\">\n                                        <form #frmInfoEstudiante=\"ngForm\">\n                                            <h5 class=\"py-3 text-white text-center\">Actualizar Información:</h5>\n                                            <div class=\"col-5 mx-auto\">\n                                                <div class=\"form-group col\">\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNombreEstudiante\" class=\"text-white \">Nombre Estudiante</label>\n                                                        <input type=\"text\" name=\"nombre_estudiante\" class=\"form-control col\" id=\"inputNombreEstudiante\" placeholder=\"Nombre\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.nombre_estudiante\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputApellidoEstudiante\" class=\"text-white \">Apellido Estudiante</label>\n                                                        <input type=\"text\" name=\"apellido_estudiante\" class=\"form-control col\" id=\"inputApellidoEstudiante\" placeholder=\"Apellido\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.apellido_estudiante\">\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"form-group col\">\n                                                            <label for=\"inputGradoEstudiante\" class=\"text-white\">Grado</label>\n                                                            <select [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.grado_estudiante\" name=\"grado_estudiante\" id=\"inputGradoEstudiante\" class=\"form-control\" ngModel required>\n                                                                <option selected></option>\n                                                                <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                        <div class=\"form-group col\">\n                                                            <label for=\"inputCursoEstudiante\" class=\"text-white\">Curso</label>\n                                                            <select [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.curso_estudiante\" name=\"curso_estudiante\" id=\"inputCursoEstudiante\" class=\"form-control\" ngModel required>\n                                                                <option selected></option>\n                                                                <option *ngFor=\"let curso of cursos\" [value]=\"curso.id_curso\">{{curso.nombre_curso}}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputCorreoEstudiante\" class=\"text-white \">Correo Electronico</label>\n                                                        <input type=\"text\" name=\"correo_electronico\" class=\"form-control col\" id=\"inputCorreoEstudiante\" placeholder=\"Correo Electronico\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.correo_electronico\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputNombreUsuarioEstudiante\" class=\"text-white \">Nombre Usuario</label>\n                                                        <input type=\"text\" name=\"nombre_usuario\" class=\"form-control col\" id=\"inputNombreUsuarioEstudiante\" placeholder=\"Usuario\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.nombre_usuario\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label for=\"inputContrasenaEstudiante\" class=\"text-white \">Contraseña</label>\n                                                        <input type=\"text\" name=\"contrasena\" class=\"form-control col\" id=\"inputContrasenaEstudiante\" placeholder=\"Contraseña\" required\n                                                            [(ngModel)]=\"this.AuthAdminService.selectedEstudiante.contrasena\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <br>\n                            \n                                            <!--Boton Actualizar Estudiante-->\n                                            <div class=\"row\">\n                                                <div class=\"mr-2 ml-auto pb-4 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-success px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo4\"\n                                                        (click)=\"actualizarEstudiante(frmInfoEstudiante)\">Actualizar</a>\n                                                </div>\n                                                <div class=\"ml-2 mr-auto pb-4 justify-content-md-center no-gutters\">\n                                                    <a class=\"btn bg-success px-5 py-4 font-weight-bold\"\n                                                        (click)=\"resetForm(frmInfoEstudiante)\">Limpiar</a>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <hr class=\"style8\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Datos Docente Actualizados -->\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body text-info\" *ngIf=\"error1 == false\">\n                    Se han Actualizado los datos del Docente.\n                </div>\n                <div class=\"modal-body text-danger\" *ngIf=\"error1 == true\">\n                    No ha seleccionado un Docente para Actualizar.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Datos Estudiante Actualizados -->\n    <div class=\"modal fade\" id=\"mimodalejemplo4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel4\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body text-info\" *ngIf=\"error2 == false\">\n                    Se han Actualizado los datos del Estudiante.\n                </div>\n                <div class=\"modal-body text-danger\" *ngIf=\"error2 == true\">\n                    No ha seleccionado un Estudiante para Actualizar.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmar Borrar Docente -->\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Accion</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Para borrar al Docente presione aceptar, de lo contrario presione X\n                    para cancelar.\n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters py-1 bg-light\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"deleteDocente()\">Aceptar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Comfirmar Borrar Estudiante -->\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Acción</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Para borrar al Estudiante presione aceptar, de lo contrario presione X\n                    para cancelar.\n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters py-1 bg-light\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"deleteEstudiante()\">Aceptar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmacion Docente Seleccionado -->\n    <div class=\"modal fade\" id=\"mimodalejemplo5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel5\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Ha sido seleccionado un Docente. Los datos han sido cargados para revisar y modificar.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmacion Estudiante Seleccionado -->\n    <div class=\"modal fade\" id=\"mimodalejemplo6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel6\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Ha sido seleccionado un Estudiante. Los datos han sido cargados para revisar y modificar.\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/header-admin/header-admin.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/header-admin/header-admin.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <div class=\"container py-4\">\r\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top pt-4 pb-3\">\r\n                <div class=\"container\">\r\n                    <img src=\"assets/img/logoC.png\" class=\"\" alt=\"Logo\" style=\"cursor: pointer\" routerLink=\"/inicioAdmin\">\r\n                    <button class=\"navbar-toggler navbar-toggler-right \" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\r\n                        aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-icon\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item px-1\">\r\n                                <a class=\"nav-link bg-danger text-dark text-center font-weight-bold rounded\" routerLink=\"/gestionarColegioAdmin\">Gestionar Colegio</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link bg-success text-dark text-center font-weight-bold rounded\" routerLink=\"/gestionarUsuariosAdmin\">Gestionar Usuarios</a>\r\n                            </li>\r\n                            <li class=\"nav-item px-1\">\r\n                                <a class=\"nav-link bg-info text-dark text-center font-weight-bold rounded\" routerLink=\"/gestionarCompetenciasAdmin\">Gestionar Competencias</a>\r\n                            </li>\r\n                            <li class=\"nav-item dropdown\">\r\n                                <a class=\"nav-link px-4 py-2 mb-1 text-center bg-light text-dark font-weight-bold rounded dropdown-toggle\"\r\n                                    href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                    aria-expanded=\"false\" data-target=\"#navbarDropdownPerfil\">\r\n                                    Perfil\r\n                                </a>\r\n                                <div class=\"dropdown-menu dropdown-menu-right bg-secondary text-dark\" id=\"navbarDropdownPerfil\" aria-labelledby=\"navbarDropdownPerfil\">\r\n                                    <a class=\"dropdown-item btn text-center\" style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#mimodalejemplo10\">Cambiar Contraseña</a>\r\n                                    <a class=\"dropdown-item btn text-center\" routerLink (click)=\"logOut()\">Cerrar sesión</a>\r\n                                    <a class=\"dropdown-item text-center\" style=\"cursor: pointer\" (click)=\"verManual()\">Ayuda</a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Cambiar Contraseña-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel10\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Cambiar Contraseña del Administrador</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <form #frmContrasena=\"ngForm\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputContrasena\" class=\"\">Ingresa la nueva contraseña:</label>\r\n                            <input type=\"text\" name=\"contrasena\" class=\"form-control col-md-5\" id=\"inputContrasena\"\r\n                                placeholder=\"Nueva Contraseña\" required [(ngModel)]=\"contrasena\">\r\n                        </div>\r\n                        <a><small class=\"text-muted\">Nota: </small></a><br>\r\n                        <a><small class=\"text-muted\">- Si la contraseña que tienes ahora es la de por defecto, te recomendamos cambiarla \r\n                                para mayor seguridad.\r\n                        </small></a><br>\r\n                    </div>\r\n                </form>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <a class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo11\" (click)=\"actualizarContrasena(frmContrasena)\">Cambiar Contraseña</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Confirmar Cambio Contraseña -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo11\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel11\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"cambioCorrecto\">\r\n                    Se ha actualizado la contraseña.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"cambiando\">\r\n                    Actualizando la contraseña. Espere por favor.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/inicio-admin/inicio-admin.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/inicio-admin/inicio-admin.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin></app-header-admin>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"contenedor pb-5\">\r\n\r\n    <div class=\"container\">\r\n    \r\n        <!-- Titulo Pagina Principal -->\r\n        <div class=\"container m-auto pb-2 bg-info rounded-top\">\r\n            <h1 class=\"mt-5 pt-4 text-center\">Bienvenido a la Plataforma</h1>\r\n        </div>\r\n    \r\n        <!--Contenedor-->\r\n        <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n    \r\n            <!--Parrafo de Informacion-->\r\n            <div>\r\n                <div class=\"contenedor pt-4\">\r\n                    <img src=\"assets/img/logoA.png\" class=\"row mx-auto\" alt=\"Logo\">\r\n                    <h3 class=\"text-white text-center pt-4\">Hola Administrador</h3>\r\n                    <h6 class=\"text-white pt-3 px-4 text-center\">Encontraras diferentes opciones para la gestión de Competencias\r\n                        para los docentes, la gestión de Usuarios registrados y por ultimo la gestión de materias, grados e información\r\n                        importante del colegio. \r\n                    </h6>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <hr class=\"style4 pb-3\">\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- /.container -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-visitante></app-header-visitante>\n\n<!--Contenedor Contenido Pagina-->\n<div class=\"mb-5 container py-3\">\n\n    <!-- Buscador -->\n    <div class=\"container m-auto pb-2 bg-danger rounded-top\">\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center\">Busqueda</h1>\n    </div>\n    <!--Contenedor busqueda-->\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\n\n        <!--Opciones de Busqueda-->\n        <div>\n            <div class=\"contenedor py-3\">\n                <form>\n                    <!--Tabs-->\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"mt-3\">\n                                <div class=\"container\">\n                                    <!--Opcion Tab-->\n                                    <nav>\n                                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                            <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\"\n                                                id=\"nav-Pregunta1ACT-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta1ACT\" role=\"tab\"\n                                                aria-controls=\"nav-Pregunta1ACT\" aria-selected=\"true\">Busqueda de Actividades</a>\n                                            <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\"\n                                                id=\"nav-Pregunta2CON-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta2CON\" role=\"tab\"\n                                                aria-controls=\"nav-Pregunta2CON\" aria-selected=\"false\">Busqueda de Contenidos</a>\n                                        </div>\n                                    </nav>\n        \n                                    <!--Tabs Resultados-->\n                                    <div class=\"tab-content\" id=\"nav-tabContent\">\n                                        <br>\n        \n                                        <!--Tab 1-->\n                                        <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1ACT\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1ACT-tab\">\n                                            <div class=\"form-group\">\n                                                <h4 style=\"cursor:context-menu\" class=\"pb-1 pt-3 text-center text-white font-weight-bold\">Actividades</h4>\n                                                <!--Buscar Actividad-->\n                                                <div>\n                                                    <div class=\"contenedor py-3\">\n                                                        <form #frmBuscarActividad=\"ngForm\" (ngSubmit)=\"saveDataActividad(frmBuscarActvidad)\">\n                                                            <div class=\"form-group\">\n                                                                <!--Barra busqueda-->\n                                                                <br>\n                                                                <div class=\"form-inline\">\n                                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaActividad\"\n                                                                        placeholder=\"Busqueda por nombre de la Actividad\" [(ngModel)]=\"nombreActividadSelected\"\n                                                                        name=\"inputBusquedaActividad\">\n                                                                </div>\n                                                            </div>\n                                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\n                                                            <div class=\"form-row pb-3\">\n                                                                <!--Filtros-->\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputMateriaA\" class=\"text-white\">Materia</label>\n                                                                    <select [(ngModel)]=\"materiaSelectedA\" id=\"inputMateriaA\" name=\"materiaA\"\n                                                                        class=\"form-control\" ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">\n                                                                            {{mater.nombre_materia}}</option>\n                                                                    </select>\n                                                                </div>\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputGradoA\" class=\"text-white\">Grado</label>\n                                                                    <select [(ngModel)]=\"gradoSelectedA\" id=\"inputGradoA\" name=\"gradoA\" class=\"form-control\"\n                                                                        ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\n                                                                        </option>\n                                                                    </select>\n                                                                </div>\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputDocenteA\" class=\"text-white\">Profesor</label>\n                                                                    <select [(ngModel)]=\"docenteSelectedA\" id=\"inputDocenteA\" name=\"DocenteA\"\n                                                                        class=\"form-control\" ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">\n                                                                            {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\n                                                                    </select>\n                                                                </div>\n                                                            </div>\n                                                            <!--Filtro Competencia-->\n                                                            <div class=\"form-group col px-0\">\n                                                                <label for=\"inputDocenteA\" class=\"text-white\">Buscador Competencia</label>\n                                                                <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia\" placeholder=\"Ingrese palabra clave\" [(ngModel)]=\"nombreCompetenciaSelected\"\n                                                                    name=\"inputBusquedaCompetencia\">\n                                                            </div>\n                                                            <div class=\"form-row pb-3\">\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputDocenteA\" class=\"text-white\">Competencia</label>\n                                                                    <select [(ngModel)]=\"competenciaSelectedA\" id=\"inputCompetenciaA\" name=\"competenciaA\" class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();'ngModel required>\n                                                                        <option class=\"col-auto px-0\" selected></option>\n                                                                        <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\n                                                                        <option class=\"col-auto px-0\" *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelected:materiaSelectedA:gradoSelectedA\"\n                                                                            [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\n                                                                        </option>\n                                                                    </select>\n                                                                    <!--el valor seleccionado es {{competenciaSelectedA}}-->\n                                                                </div>\n                                                            </div>\n                                                            <!--Tabla de Resultados-->\n                                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\n                                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\n                                                                style=\"width: 95%; height: 450px\">\n                                                                <!--Resultado-->\n                                                                <div class=\"row-1\"\n                                                                    *ngFor=\"let actividad of actividadVisualizar | filterActividad: nombreActividadSelected:materiaSelectedA:gradoSelectedA:docenteSelectedA:competenciaSelectedA\">\n                                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                                        <div class=\"card-footer p-2 bg-warning rounded-top\">\n                                                                            <h5 class=\"card-title m-1\">{{actividad.titulo_actividad}}</h5>\n                                                                        </div>\n                                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\n                                                                            <div class=\"col\" style=\"max-width: 840px;\">\n                                                                                <div class=\"card-body p-2\">\n                                                                                    <p class=\"card-text \">Descripcion: {{actividad.descripcion_actividad}}.</p>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia:\n                                                                                                {{actividad.materia}}</small></p>\n                                                                                    </div>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado:\n                                                                                                {{actividad.id_grado}}</small></p>\n                                                                                    </div>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Competencia:\n                                                                                                {{actividad.competencia}}</small></p>\n                                                                                    </div>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Profesor:\n                                                                                                {{actividad.docente}}</small></p>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                        <!--Boton ver Actividad-->\n                                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\"\n                                                                                (click)=\"getActividadinModal(actividad)\">Ver</a>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </form>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n        \n                                        <!--Tab 2-->\n                                        <div class=\"tab-pane fade\" id=\"nav-Pregunta2CON\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2CON-tab\">\n                                            <div class=\"form-group\">\n                                                <h4 style=\"cursor:context-menu\" class=\"pb-1 pt-3 text-center text-white font-weight-bold\">Contenidos</h4>\n                                                <!--Buscar Contenido-->\n                                                <div>\n                                                    <div class=\"contenedor py-3\">\n                                                        <form #frmBuscarContenido=\"ngForm\" (ngSubmit)=\"saveDataContent(frmBuscarContenido)\">\n                                                            <div class=\"form-group\">\n                                                                <!--Barra busqueda-->\n                                                                <br>\n                                                                <div class=\"form-inline\">\n                                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusqueda\"\n                                                                        placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreCREASelected\"\n                                                                        name=\"inputBusquedaContenido\">\n                                                                </div>\n                                                            </div>\n                                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\n                                                            <div class=\"form-row pb-3\">\n                                                                <!--Filtros-->\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputMateria\" class=\"text-white\">Materia</label>\n                                                                    <select [(ngModel)]=\"materiaSelected\" id=\"inputMateria\" name=\"materia\" class=\"form-control\"\n                                                                        ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">\n                                                                            {{mater.nombre_materia}}</option>\n                                                                    </select>\n                                                                </div>\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputGrado\" class=\"text-white\">Grado</label>\n                                                                    <select [(ngModel)]=\"gradoSelected\" id=\"inputGrado\" name=\"grado\" class=\"form-control\"\n                                                                        ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\n                                                                        </option>\n                                                                    </select>\n                                                                </div>\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputDocente\" class=\"text-white\">Profesor</label>\n                                                                    <select [(ngModel)]=\"docenteSelected\" id=\"inputDocente\" name=\"Docente\" class=\"form-control\"\n                                                                        ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">\n                                                                            {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\n                                                                    </select>\n                                                                </div>\n                                                                <div class=\"form-group col\">\n                                                                    <label for=\"inputType\" class=\"text-white\">Tipo de Contenido</label>\n                                                                    <select [(ngModel)]=\"tipoContenidoSelected\" id=\"inputType\" name=\"tipoContenido\"\n                                                                        class=\"form-control\" ngModel required>\n                                                                        <option selected></option>\n                                                                        <option *ngFor=\"let tipCon of tipoContenido\" [value]=\"tipCon.id_tipoContenido\">\n                                                                            {{tipCon.nombre_tipoContenido}}\n                                                                        </option>\n                                                                    </select>\n                                                                </div>\n                                                            </div>\n                                                            <!--Tabla de Resultados-->\n                                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\n                                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\n                                                                style=\"width: 95%; height: 450px\">\n                                                                <!--Resultado-->\n                                                                <div class=\"row-1\"\n                                                                    *ngFor=\"let contenidoREA of contenidoVisualizar | filterContent: nombreCREASelected:materiaSelected:gradoSelected:docenteSelected:tipoContenidoSelected\">\n                                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                                        <div class=\"card-footer p-2 bg-primary rounded-top\">\n                                                                            <h5 class=\"card-title m-1\">{{contenidoREA.nombre_CREA}}</h5>\n                                                                        </div>\n                                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\n                                                                            <div class=\"col\" style=\"max-width: 840px;\">\n                                                                                <div class=\"card-body p-2\">\n                                                                                    <p class=\"card-text \">Descripcion: {{contenidoREA.descripcion_CREA}}.</p>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia:\n                                                                                                {{contenidoREA.materia}}</small></p>\n                                                                                    </div>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado:\n                                                                                                {{contenidoREA.id_grado}}</small></p>\n                                                                                    </div>\n                                                                                    <div>\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido:\n                                                                                                {{contenidoREA.nombre_tipo_CREA}}</small></p>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                        <!--Boton ver Contenido-->\n                                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                                            <a class=\"btn btn-primary\" (click)=\"verContenido(contenidoREA)\">Ver</a>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </form>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <hr class=\"style3\">\n        <br>\n    </div>\n\n    <!-- Modal Actividad Seleccionada -->\n    <div class=\"modal fade col\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content \">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title text-center my-0\" id=\"myModalLabel\">Actividad Seleccionada</h4>\n                    <button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"\">\n                        <div>\n                            <h3 style=\"cursor:context-menu\" class=\"text-center bg-warning py-4\">{{ActividadService.selectedActividad.titulo_actividad}}</h3>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <div>\n                                                <h5 class=\"\">Descripcion: {{ActividadService.selectedActividad.descripcion_actividad}}</h5>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{ActividadService.selectedActividad.materia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{ActividadService.selectedActividad.id_grado}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{ActividadService.selectedActividad.competencia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{ActividadService.selectedActividad.docente}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Autor: {{ActividadService.selectedActividad.autor}}</small></p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Contenido Actividad-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Contenido:</h5>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\n                                    <h5 style=\"cursor:context-menu\" class=\"card-title m-1\">{{contenidoAct.nombre_CREA}}</h5>\n                                </div>\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <p class=\"card-text m-1\">Descripcion: {{contenidoAct.descripcion_CREA}}</p>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{contenidoAct.materia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{contenidoAct.id_grado}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido: {{contenidoAct.nombre_tipo_CREA}}</small></p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--Boton ver Contenido-->\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                    <a class=\"btn btn-primary\" (click)=\"verContenidoActividad()\">Ver</a>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Quiz del contenido-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Quiz del contenido:</h5>\n                        </div>\n                        <div class=\"contenedor py-3\">\n                            <div class=\"\">\n                                <label>Descripcion: {{ActividadService.selectedActividad.descripcion_test}}</label>\n                            </div>\n                            <div class=\"container\">\n                                <!--Tabs-->\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <div class=\"card mt-3 tab-card\">\n                                            <div class=\"card-header tab-card-header bg-light\">\n                                                <!--Opcion Tab-->\n                                                <nav>\n                                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                                        <a class=\"col nav-item nav-link text-center active\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta1\" role=\"tab\"\n                                                            aria-controls=\"nav-Pregunta1\" aria-selected=\"true\">Pregunta 1</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta2\" role=\"tab\"\n                                                            aria-controls=\"nav-Pregunta2\" aria-selected=\"false\">Pregunta 2</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta3-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta3\" role=\"tab\"\n                                                            aria-controls=\"nav-Pregunta3\" aria-selected=\"false\">Pregunta 3</a>\n                                                    </div>\n                                                </nav>\n\n                                                <!--Tabs Resultados-->\n                                                <div class=\"tab-content\" id=\"nav-tabContent\">\n                                                    <br>\n                                                    <!--Tab 1-->\n                                                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q1}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A11}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A12}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A13}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A14}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 2-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q2}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A21}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A22}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A23}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A24}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 3-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta3\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q3}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A31}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A32}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A33}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A34}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Taller Actividad-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Taller:</h5>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\n                                    <h5 class=\"card-title m-1\">{{tallerAct.nombre_CREA}}</h5>\n                                </div>\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <p class=\"card-text \">Descripcion: {{tallerAct.descripcion_CREA}}</p>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{tallerAct.materia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{tallerAct.id_grado}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido: {{tallerAct.nombre_tipo_CREA}}</small></p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--Boton ver Taller-->\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                    <a class=\"btn btn-primary\" (click)=\"verTallerActividad()\">Ver</a>\n                                </div>\n                            </div> \n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Evaluacion del contenido-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Evaluacion:</h5>\n                        </div>\n                        <div class=\"contenedor py-3\">\n                            <div class=\"\">\n                                <label>Descripcion: {{ActividadService.selectedActividad.descripcion_evaluacion}}</label>\n                            </div>\n                            <div class=\"container\">\n                                <!--Tabs-->\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <div class=\"card mt-3 tab-card\">\n                                            <div class=\"card-header tab-card-header bg-light\">\n                                                <!--Opcion Tab-->\n                                                <nav>\n                                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                                        <a class=\"col nav-item nav-link text-center active\" id=\"nav-Pregunta1E-tab\"\n                                                            data-toggle=\"tab\" href=\"#nav-Pregunta1E\" role=\"tab\" aria-controls=\"nav-Pregunta1E\"\n                                                            aria-selected=\"true\">Pregunta 1</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta2E-tab\" data-toggle=\"tab\"\n                                                            href=\"#nav-Pregunta2E\" role=\"tab\" aria-controls=\"nav-Pregunta2E\"\n                                                            aria-selected=\"false\">Pregunta 2</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta3E-tab\" data-toggle=\"tab\"\n                                                            href=\"#nav-Pregunta3E\" role=\"tab\" aria-controls=\"nav-Pregunta3E\"\n                                                            aria-selected=\"false\">Pregunta 3</a>\n                                                    </div>\n                                                </nav>\n                        \n                                                <!--Tabs Resultados-->\n                                                <div class=\"tab-content\" id=\"nav-tabContent\">\n                                                    <br>\n                                                    <!--Tab 1-->\n                                                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1E-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ1}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA11}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA12}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA13}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA14}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 2-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta2E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2E-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ2}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA21}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA22}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA23}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA24}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 3-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta3E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3E-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ3}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA31}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA32}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA33}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA34}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                    </div>  \n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light\">\n                    <button type=\"button\" class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Visitante/header-visitante/header-visitante.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Visitante/header-visitante/header-visitante.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n<div class=\"container py-4 m-0\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top pt-4 pb-3\">\n            <div class=\"container\">\n                <img src=\"assets/img/logoC.png\" class=\"\" alt=\"Logo\" style=\"cursor: pointer\" routerLink=\"/login\">\n                <button class=\"navbar-toggler navbar-toggler-right \" type=\"button\" data-toggle=\"collapse\"\n                    data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item\">\n                            <a class=\"btn nav-link bg-info px-5 text-dark text-center font-weight-bold rounded\" style=\"cursor:pointer\" (click)=\"salirBusquedaVisitante()\">Salir</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    </div>\n</div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrar-docente/administrar-docente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrar-docente/administrar-docente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 col-9 mx-auto\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-light rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Administrar Usuario</h1>\r\n    </div>\r\n    \r\n    <!--Contenedor Formularios-->\r\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n    \r\n        <!--Tabs-->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"mt-3\">\r\n                    <div class=\"card-header tab-card-header\">\r\n                        <!--Opcion Tab-->\r\n                        <nav>\r\n                            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta1\" role=\"tab\" aria-controls=\"nav-Pregunta1\"\r\n                                    aria-selected=\"true\">Información Personal</a>\r\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta2\" role=\"tab\" aria-controls=\"nav-Pregunta2\"\r\n                                    aria-selected=\"false\">Información Login</a>\r\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta3-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta3\" role=\"tab\" aria-controls=\"nav-Pregunta3\"\r\n                                    aria-selected=\"false\">Gestion de Materias</a>\r\n                            </div>\r\n                        </nav>\r\n        \r\n                        <!--Tabs Resultados-->\r\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                            <br>\r\n\r\n                            <!--Tab 1-->\r\n                            <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\r\n                                <!--Informacion Personal Docente-->\r\n                                <div>\r\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Informacion Personal</h3>\r\n                                    <div class=\"contenedor py-3\">\r\n                                        <form #frmInformacionPersonal=\"ngForm\">\r\n                            \r\n                                            <div class=\"col-5 mx-auto\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <div class=\"form-group \">\r\n                                                        <label for=\"inputNombreDocente\" class=\"text-white \">Nombre del profesor</label>\r\n                                                        <input type=\"text\" name=\"nombre_docente\" class=\"form-control col\" id=\"inputNombreDocente\"\r\n                                                            placeholder=\"Nombre\" required [(ngModel)]=\"AuthDService.selectedDocente.nombre_docente\">\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputApellidoDocente\" class=\"text-white \">Apellidos del profesor</label>\r\n                                                        <input type=\"text\" name=\"apellido_docente\" class=\"form-control col\" id=\"inputApellidoDocente\" placeholder=\"Apellidos\" required\r\n                                                            [(ngModel)]=\"AuthDService.selectedDocente.apellido_docente\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                            \r\n                                            <!--Boton Crear Contenido-->\r\n                                            <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\r\n                                                <a class=\"btn bg-info px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\"\r\n                                                    (click)=\"actualizarInfoPersonalDocente(frmInformacionPersonal)\">Actualizar Datos</a>\r\n                                            </div>\r\n                                        </form>\r\n                                        <hr class=\"style9\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Tab 2-->\r\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\r\n                                <!--Informacion Login Docente-->\r\n                                <div>\r\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Informacion Login</h3>\r\n                                    <div class=\"contenedor py-3\">\r\n                                        <form #frmInformacionLogin=\"ngForm\">\r\n                            \r\n                                            <div class=\"col-5 mx-auto\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputNombreUsuario\" class=\"text-white \">Nombre Usuario</label>\r\n                                                        <input type=\"text\" name=\"nombre_usuario\" class=\"form-control col\" id=\"inputNombreUsuario\" placeholder=\"Usuario\" required\r\n                                                            [(ngModel)]=\"AuthDService.selectedDocente.nombre_usuario\">\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputCorreoElectronico\" class=\"text-white \">Correo Electronico</label>\r\n                                                        <input type=\"text\" name=\"correo_electronico\" class=\"form-control col\" id=\"inputCorreoElectronico\" placeholder=\"Correo Electronico\" required\r\n                                                            [(ngModel)]=\"AuthDService.selectedDocente.correo_electronico\">\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"inputContrasena\" class=\"text-white \">Contraseña</label>\r\n                                                        <input type=\"text\" name=\"contrasena\" class=\"form-control col\" id=\"inputContrasena\"\r\n                                                            placeholder=\"Contraseña\" required [(ngModel)]=\"AuthDService.selectedDocente.contrasena\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                            \r\n                                            <!--Boton Actualizar Login Docente-->\r\n                                            <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\r\n                                                <a class=\"btn bg-info px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\"\r\n                                                    (click)=\"actualizarInfoLoginDocente(frmInformacionLogin)\">Actualizar Datos</a>\r\n                                            </div>\r\n                                        </form>\r\n                                        <hr class=\"style9\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <!--Tab 3-->\r\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta3\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3-tab\">\r\n                                <!--Gestion de Materias Activas-->\r\n                                <div>\r\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Gestion de Materias</h3>\r\n                                    <div class=\"contenedor mx-3 py-3\">\r\n                                        <form #frmCrearMateria=\"ngForm\">\r\n                            \r\n                                            <!--Crear Materias-->\r\n                                            <h5 class=\"py-3 text-white\">Crear Materias:</h5>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"inputNombreMateriaActiva\" class=\"text-white \">Nombre de la Materia</label>\r\n                                                <input type=\"text\" name=\"nombre_materiaActiva\" class=\"form-control col-md-8\" id=\"inputNombreMateriaActiva\" placeholder=\"Nombre Materia\" required \r\n                                                    [(ngModel)]=\"ContentREAService.selectedContenidoREA.nombre_CREA\">\r\n                                            </div>\r\n                                            <!-- Selectores -->\r\n                                            <div class=\"form-row\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputMateriaBase\" class=\"text-white\">Materia Base</label>\r\n                                                    <select [(ngModel)]=\"id_materia\" name=\"id_materia\" id=\"inputMateriaBase\" class=\"form-control\" ngModel required>\r\n                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}\r\n                                                        </option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                                                    <select [(ngModel)]=\"id_grado\" name=\"id_grado\" id=\"inputGrado\" class=\"form-control\" ngModel required>\r\n                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                            \r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                                            <!--Boton Crear Materia-->\r\n                                            <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\r\n                                                <a class=\"btn bg-info px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo3\"\r\n                                                    (click)=\"CrearMateriaActiva(frmCrearMateria)\">Crear Materia</a>\r\n                                            </div>\r\n                                            <br>\r\n                            \r\n                                            <!--Borrar Materias-->\r\n                                            <h5 class=\"py-3 text-white\">Borrar Materias:</h5>\r\n                                            <div class=\"row mx-auto\">\r\n                                                <table\r\n                                                    class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                    style=\"height: 256px;\">\r\n                                                    <thead class=\"bg-info\">\r\n                                                        <th class=\"pl-3 pr-4 py-2 text-dark\">Nombre Materia</th>\r\n                                                        <th class=\"px-4 py-2 text-dark\">Materia Base</th>\r\n                                                        <th class=\"px-4 py-2 text-dark\">Grado</th>\r\n                                                        <th class=\"pl-3 pr-3 py-2 text-dark\">Accion</th>\r\n                                                    </thead>\r\n                                                    <tbody class=\"bg-light\">\r\n                                                        <tr mdbTableCol\r\n                                                            *ngFor=\"let materiaActiva of MateriaActivaInfo | filterTableMateriaDocente: idDocente\">\r\n                                                            <td class=\"pl-3 pr-4 py-2 text-dark\">{{ materiaActiva.nombre_materiaActiva }}</td>\r\n                                                            <td class=\"px-4 py-2 text-center text-dark\">{{ materiaActiva.nombre_materia}}</td>\r\n                                                            <td class=\"px-4 py-2 text-center text-dark\">{{ materiaActiva.id_grado }}</td>\r\n                                                            <td class=\"pl-3 pr-3 py-2\">\r\n                                                                <a class=\"btn bg-warning py-0 px-1 text-dark\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"saveMateriaActivaData(materiaActiva)\">\r\n                                                                    borrar\r\n                                                                </a>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </form>\r\n                                        <br>\r\n                                        <hr class=\"style9\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Infromacion Actualizada-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"\" *ngIf=\"mensajeInfo\">Actualizando Informacion.</div>\r\n                    <div class=\"text-info\" *ngIf=\"correctoInfo\">Se ha actualizado tu informacion.</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Confirmar Eliminar MateriaActiva-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Acción</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Para borrar la Materia presione Aceptar, de lo contrario presione X\r\n                    para cancelar.\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo4\"\r\n                        (click)=\"deleteMateriaActiva()\">Aceptar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal MateriaActiva Eliminada-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel4\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"\" *ngIf=\"mensajeInfo\">Eliminando Materia.</div>\r\n                    <div class=\"text-info\" *ngIf=\"correctoInfo\">La Materia ha sido Eliminada.</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Confirmar MateriaActiva Creada-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"mensaje\">\r\n                    Creando Tu Materia.\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto\">\r\n                    Tu Materia ha sido creada.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error\">\r\n                    La Materia no se ha podido crear. Verifica que has ingresado todos los \r\n                    datos requeridos.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/borrar-actividad/borrar-actividad.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/borrar-actividad/borrar-actividad.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 contenedor py-3\">\r\n    \r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-warning rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center\">Borrar Actividad</h1>\r\n    </div>\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Buscar Actividad-->\r\n        <div>\r\n            <div class=\"contenedor py-3\">\r\n                <form #frmBorrarActividad=\"ngForm\" (ngSubmit)=\"onBorrarActividad(frmBorrarActividad)\">\r\n                    <div class=\"form-group\">\r\n                        <!--Barra busqueda-->\r\n                        <br>\r\n                        <div class=\"form-inline\">\r\n                            <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaActividad\"\r\n                                placeholder=\"Busqueda por nombre de la Actividad\" [(ngModel)]=\"nombreActividadSelected\" name=\"inputBusquedaActividad\">\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                    <div class=\"form-row pb-3\">\r\n                        <!--Filtros-->\r\n                        <div class=\"form-group col-4\">\r\n                            <label for=\"inputMateriaA\" class=\"text-white\">Materia</label>\r\n                            <select [(ngModel)]=\"materiaSelectedA\" id=\"inputMateriaA\" name=\"materiaA\" class=\"form-control\" ngModel required>\r\n                                <option selected></option>\r\n                                <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-4\">\r\n                            <label for=\"inputGradoA\" class=\"text-white\">Grado</label>\r\n                            <select [(ngModel)]=\"gradoSelectedA\" id=\"inputGradoA\" name=\"gradoA\" class=\"form-control\" ngModel required>\r\n                                <option selected></option>\r\n                                <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <!--Filtro Competencia-->\r\n                    <div class=\"form-group col px-0\">\r\n                        <label for=\"inputDocenteA\" class=\"text-white\">Buscador Competencia</label>\r\n                        <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia\" placeholder=\"Ingrese palabra clave\" [(ngModel)]=\"nombreCompetenciaSelected\" \r\n                            name=\"inputBusquedaCompetencia\">\r\n                    </div>\r\n                    <div class=\"form-row pb-3\">\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputDocenteA\" class=\"text-white\">Competencia</label>\r\n                            <select [(ngModel)]=\"competenciaSelectedA\" id=\"inputCompetenciaA\" name=\"competenciaA\" class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();' ngModel required>\r\n                                <option class=\"col-auto px-0\" selected></option>\r\n                                <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\r\n                                <option class=\"col-auto px-0\" *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelected:materiaSelectedA:gradoSelectedA\" [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\r\n                                </option>\r\n                            </select>\r\n                            <!--el valor seleccionado es {{competenciaSelectedA}}-->\r\n                        </div>\r\n                    </div>\r\n                    <!--Tabla de Resultados-->\r\n                    <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                    <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\" style=\"width: 95%; height: 450px\"> \r\n                        <!--Resultado-->\r\n                        <div class=\"row-1\" *ngFor=\"let actividad of actividadVisualizar | filterActividadDelete: nombreActividadSelected:materiaSelectedA:gradoSelectedA:id_docenteAuth:competenciaSelectedA\">\r\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                <div class=\"card-footer p-2 bg-warning rounded-top\">\r\n                                    <h5 class=\"card-title m-1\">{{actividad.titulo_actividad}}</h5>\r\n                                </div>\r\n                                <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                    <div class=\"col\" style=\"max-width: 840px;\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <p class=\"card-text \">Descripcion: {{actividad.descripcion_actividad}}.</p>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{actividad.materia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{actividad.id_grado}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{actividad.competencia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{actividad.docente}}</small></p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--Boton borrar Actividad-->\r\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                    <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\" (click)=\"saveDataActivity(actividad)\">Borrar Actividad</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <hr class=\"style1\">   \r\n        <br>\r\n    </div>  \r\n    \r\n    <!-- Modal Confirmar Eliminar Actividad -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Confirmar Acción</h4>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button> \r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Para borrar la Actividad presione Aceptar, de lo contrario presione X\r\n                    para cancelar.\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <a class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"deleteActividad()\">Aceptar</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Actividad Eliminada-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"\" *ngIf=\"mensaje\">Eliminando Actividad. Espere por favor.</div>\r\n                    <div class=\"text-info\" *ngIf=\"correcto\">La Actividad ha sido Eliminado.</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/borrar-contenido/borrar-contenido.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/borrar-contenido/borrar-contenido.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 contenedor py-3\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-primary rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center\">Borrar Contenido</h1>\r\n    </div>\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Buscar Actividad-->\r\n        <div>\r\n            <div class=\"contenedor py-3\">\r\n                <form #frmBorrarContenido=\"ngForm\" (ngSubmit)=\"onBorrarContenido(frmBorrarContenido)\">\r\n                    <!--Barra busqueda-->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputNombreActividad\" class=\"text-white\">Busqueda de Contenido</label>\r\n                        <div class=\"form-inline\">\r\n                            <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusqueda\" placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreCREASelected\" name=\"inputBusquedaContenido\">\r\n                        </div>\r\n                    </div>\r\n                    <!--Filtros-->\r\n                    <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                    <div class=\"form-row pb-3\">\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputMateria\" class=\"text-white\">Materia</label>\r\n                            <select [(ngModel)]=\"materiaSelected\" id=\"inputMateria\" name=\"materia\" class=\"form-control\" ngModel required>\r\n                                <option selected></option>\r\n                                <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">{{mater.nombre_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                            <select [(ngModel)]=\"gradoSelected\" id=\"inputGrado\" name=\"grado\" class=\"form-control\" ngModel required>\r\n                                <option selected></option>\r\n                                <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputType\" class=\"text-white\">Tipo de Contenido</label>\r\n                            <select [(ngModel)]=\"tipoContenidoSelected\" id=\"inputType\" name=\"tipoContenido\" class=\"form-control\" ngModel required>\r\n                                <option selected></option>\r\n                                <option *ngFor=\"let tipCon of tipoContenido\" [value]=\"tipCon.id_tipoContenido\">{{tipCon.nombre_tipoContenido}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <!--Tabla de Resultados-->\r\n                    <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                    <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                        style=\"width: 95%; height: 450px\">\r\n                        <!--Resultado-->\r\n                        <div class=\"row-1\" *ngFor=\"let contenidoREA of contenidoVisualizar | filterContentDelete: nombreCREASelected:materiaSelected:gradoSelected:tipoContenidoSelected\">\r\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                    <h5 class=\"card-title m-1\">{{contenidoREA.nombre_CREA}}</h5>\r\n                                </div>\r\n                                <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                    <div class=\"col\" style=\"max-width: 840px;\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <p class=\"card-text \">Descripcion: {{contenidoREA.descripcion_CREA}}.</p>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{contenidoREA.materia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{contenidoREA.id_grado}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido: {{contenidoREA.nombre_tipo_CREA}}</small></p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--Boton borrar Contenido-->\r\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                    <a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\" (click)=\"saveData(contenidoREA)\">Borrar Contenido</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <hr class=\"style2\">\r\n        <br>\r\n    </div>\r\n\r\n    <!--Modal Confirmar Eliminar Contenido-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Acción</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Para borrar el Contenido presione Aceptar, de lo contrario presione X\r\n                    para cancelar.\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <a class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"deleteContenido()\">Aceptar</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Contenido Eliminado-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"\" *ngIf=\"mensaje\">Eliminando Contenido. Espere por favor.</div>\r\n                    <div class=\"text-info\" *ngIf=\"correcto\">El contenido ha sido Eliminado.</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/busqueda/busqueda.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/busqueda/busqueda.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 container py-3\">\r\n\r\n    <!-- Buscador -->\r\n    <div class=\"container m-auto pb-2 bg-danger rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center\">Busqueda</h1>\r\n    </div>\r\n    <!--Contenedor busqueda-->\r\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Opciones de Busqueda-->\r\n        <div>\r\n            <div class=\"contenedor py-3\">\r\n                <form>\r\n                    <!--Tabs-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"mt-3\">\r\n                                <div class=\"container\">\r\n                                    <!--Opcion Tab-->\r\n                                    <nav>\r\n                                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                            <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\"\r\n                                                id=\"nav-Pregunta1ACT-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta1ACT\" role=\"tab\"\r\n                                                aria-controls=\"nav-Pregunta1ACT\" aria-selected=\"true\">Busqueda de Actividades</a>\r\n                                            <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\"\r\n                                                id=\"nav-Pregunta2CON-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta2CON\" role=\"tab\"\r\n                                                aria-controls=\"nav-Pregunta2CON\" aria-selected=\"false\">Busqueda de Contenidos</a>\r\n                                        </div>\r\n                                    </nav>\r\n        \r\n                                    <!--Tabs Resultados-->\r\n                                    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                                        <br>\r\n        \r\n                                        <!--Tab 1-->\r\n                                        <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1ACT\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1ACT-tab\">\r\n                                            <div class=\"form-group\">\r\n                                                <h4 style=\"cursor:context-menu\" class=\"pb-1 pt-3 text-center text-white font-weight-bold\">Actividades</h4>\r\n                                                <!--Buscar Actividad-->\r\n                                                <div>\r\n                                                    <div class=\"contenedor py-3\">\r\n                                                        <form #frmBuscarActividad=\"ngForm\" (ngSubmit)=\"saveDataActividad(frmBuscarActvidad)\">\r\n                                                            <div class=\"form-group px-0\">\r\n                                                                <!--Barra busqueda-->\r\n                                                                <br>\r\n                                                                <div class=\"form-inline\">\r\n                                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaActividad\" placeholder=\"Busqueda por nombre de la Actividad\" [(ngModel)]=\"nombreActividadSelected\"\r\n                                                                        name=\"inputBusquedaActividad\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                                                            <div class=\"form-row pb-3\">\r\n                                                                <!--Filtros-->\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputMateriaA\" class=\"text-white\">Materia</label>\r\n                                                                    <select [(ngModel)]=\"materiaSelectedA\" id=\"inputMateriaA\" name=\"materiaA\"\r\n                                                                        class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">\r\n                                                                            {{mater.nombre_materia}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputGradoA\" class=\"text-white\">Grado</label>\r\n                                                                    <select [(ngModel)]=\"gradoSelectedA\" id=\"inputGradoA\" name=\"gradoA\" class=\"form-control\"\r\n                                                                        ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\r\n                                                                        </option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputDocenteA\" class=\"text-white\">Profesor</label>\r\n                                                                    <select [(ngModel)]=\"docenteSelectedA\" id=\"inputDocenteA\" name=\"DocenteA\"\r\n                                                                        class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">\r\n                                                                            {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <!--Filtro Competencia-->\r\n                                                            <div class=\"form-group col px-0\">\r\n                                                                <label for=\"inputDocenteA\" class=\"text-white\">Buscador Competencia</label>\r\n                                                                <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia\" placeholder=\"Ingrese palabra clave\" [(ngModel)]=\"nombreCompetenciaSelected\"\r\n                                                                    name=\"inputBusquedaCompetencia\">\r\n                                                            </div>\r\n                                                            <div class=\"form-row pb-3\">\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputDocenteA\" class=\"text-white\">Competencia</label>\r\n                                                                    <select [(ngModel)]=\"competenciaSelectedA\" id=\"inputCompetenciaA\" name=\"competenciaA\" class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();' ngModel required>\r\n                                                                        <option class=\"col-auto px-0\" selected></option>\r\n                                                                        <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\r\n                                                                        <option class=\"col-auto px-0\" *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelected:materiaSelectedA:gradoSelectedA\"\r\n                                                                            [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\r\n                                                                        </option>\r\n                                                                    </select>\r\n                                                                    <!--el valor seleccionado es {{competenciaSelectedA}}-->\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <!--Tabla de Resultados-->\r\n                                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                                style=\"width: 95%; height: 450px\">\r\n                                                                <!--Resultado-->\r\n                                                                <div class=\"row-1\"\r\n                                                                    *ngFor=\"let actividad of actividadVisualizar | filterActividad: nombreActividadSelected:materiaSelectedA:gradoSelectedA:docenteSelectedA:competenciaSelectedA\">\r\n                                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                                        <div class=\"card-footer p-2 bg-warning rounded-top\">\r\n                                                                            <h5 class=\"card-title m-1\">{{actividad.titulo_actividad}}</h5>\r\n                                                                        </div>\r\n                                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                                            <div class=\"col\" style=\"max-width: 840px;\">\r\n                                                                                <div class=\"card-body p-2\">\r\n                                                                                    <p class=\"card-text \">Descripcion: {{actividad.descripcion_actividad}}.</p>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia: {{actividad.materia}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado: {{actividad.id_grado}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{actividad.competencia}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{actividad.docente}}</small></p>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <!--Boton ver Actividad-->\r\n                                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\"\r\n                                                                                (click)=\"getActividadinModal(actividad)\">Ver</a>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n        \r\n                                        <!--Tab 2-->\r\n                                        <div class=\"tab-pane fade\" id=\"nav-Pregunta2CON\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2CON-tab\">\r\n                                            <div class=\"form-group\">\r\n                                                <h4 style=\"cursor:context-menu\" class=\"pb-1 pt-3 text-center text-white font-weight-bold\">Contenidos</h4>\r\n                                                <!--Buscar Contenido-->\r\n                                                <div>\r\n                                                    <div class=\"contenedor py-3\">\r\n                                                        <form #frmBuscarContenido=\"ngForm\" (ngSubmit)=\"saveDataContent(frmBuscarContenido)\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <!--Barra busqueda-->\r\n                                                                <br>\r\n                                                                <div class=\"form-inline\">\r\n                                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusqueda\"\r\n                                                                        placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreCREASelected\"\r\n                                                                        name=\"inputBusquedaContenido\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                                                            <div class=\"form-row pb-3\">\r\n                                                                <!--Filtros-->\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputMateria\" class=\"text-white\">Materia</label>\r\n                                                                    <select [(ngModel)]=\"materiaSelected\" id=\"inputMateria\" name=\"materia\" class=\"form-control\"\r\n                                                                        ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">\r\n                                                                            {{mater.nombre_materia}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                                                                    <select [(ngModel)]=\"gradoSelected\" id=\"inputGrado\" name=\"grado\" class=\"form-control\"\r\n                                                                        ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\r\n                                                                        </option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputDocente\" class=\"text-white\">Profesor</label>\r\n                                                                    <select [(ngModel)]=\"docenteSelected\" id=\"inputDocente\" name=\"Docente\" class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">{{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputType\" class=\"text-white\">Tipo de Contenido</label>\r\n                                                                    <select [(ngModel)]=\"tipoContenidoSelected\" id=\"inputType\" name=\"tipoContenido\" class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let tipCon of tipoContenido\" [value]=\"tipCon.id_tipoContenido\">{{tipCon.nombre_tipoContenido}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <!--Tabla de Resultados-->\r\n                                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                                style=\"width: 95%; height: 450px\">\r\n                                                                <!--Resultado-->\r\n                                                                <div class=\"row-1\"\r\n                                                                    *ngFor=\"let contenidoREA of contenidoVisualizar | filterContent: nombreCREASelected:materiaSelected:gradoSelected:docenteSelected:tipoContenidoSelected\">\r\n                                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                                        <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                                            <h5 class=\"card-title m-1\">{{contenidoREA.nombre_CREA}}</h5>\r\n                                                                        </div>\r\n                                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                                            <div class=\"col\" style=\"max-width: 840px;\">\r\n                                                                                <div class=\"card-body p-2\">\r\n                                                                                    <p class=\"card-text \">Descripcion: {{contenidoREA.descripcion_CREA}}.</p>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia:\r\n                                                                                                {{contenidoREA.materia}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado:\r\n                                                                                                {{contenidoREA.id_grado}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido:\r\n                                                                                                {{contenidoREA.nombre_tipo_CREA}}</small></p>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <!--Boton ver Contenido-->\r\n                                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                                            <a class=\"btn btn-primary\" (click)=\"verContenido(contenidoREA)\">Ver</a>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <hr class=\"style3\">\r\n        <br>\r\n    </div>\r\n\r\n    <!-- Modal Actividad Seleccionada -->\r\n    <div class=\"modal fade col\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content \">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h4 class=\"modal-title text-center my-0\" id=\"myModalLabel\">Actividad Seleccionada</h4>\r\n                    <button class=\"close \" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"\">\r\n                        <div>\r\n                            <h3 style=\"cursor:context-menu\" class=\"text-center bg-warning py-4\">{{ActividadService.selectedActividad.titulo_actividad}}</h3>\r\n                        </div>\r\n                        <div class=\"row-1\">\r\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                <div class=\"row no-gutters\">\r\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <div>\r\n                                                <h5 class=\"\">Descripcion: {{ActividadService.selectedActividad.descripcion_actividad}}</h5>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{ActividadService.selectedActividad.materia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{ActividadService.selectedActividad.id_grado}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{ActividadService.selectedActividad.competencia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{ActividadService.selectedActividad.docente}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Autor: {{ActividadService.selectedActividad.autor}}</small></p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"style1b\">\r\n\r\n                        <!--Contenido Actividad-->\r\n                        <div>\r\n                            <h5 style=\"cursor:context-menu\" class=\"\">Contenido:</h5>\r\n                        </div>\r\n                        <div class=\"row-1\">\r\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                    <h5 style=\"cursor:context-menu\" class=\"card-title m-1\">{{contenidoAct.nombre_CREA}}</h5>\r\n                                </div>\r\n                                <div class=\"row no-gutters\">\r\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <p class=\"card-text m-1\">Descripcion: {{contenidoAct.descripcion_CREA}}</p>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{contenidoAct.materia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{contenidoAct.id_grado}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido:\r\n                                                        {{contenidoAct.nombre_tipo_CREA}}</small></p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--Boton ver Contenido-->\r\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                    <a class=\"btn btn-primary\" (click)=\"verContenidoActividad()\">Ver</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"style1b\">\r\n\r\n                        <!--Quiz del contenido-->\r\n                        <div>\r\n                            <h5 style=\"cursor:context-menu\" class=\"\">Quiz del contenido:</h5>\r\n                        </div>\r\n                        <div class=\"contenedor py-3\">\r\n                            <div class=\"\">\r\n                                <label>Descripcion: {{ActividadService.selectedActividad.descripcion_test}}</label>\r\n                            </div>\r\n                            <div class=\"container\">\r\n                                <!--Tabs-->\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"card mt-3 tab-card\">\r\n                                            <div class=\"card-header tab-card-header bg-light\">\r\n                                                <!--Opcion Tab-->\r\n                                                <nav>\r\n                                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                                        <a class=\"col nav-item nav-link text-center active\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta1\" role=\"tab\"\r\n                                                            aria-controls=\"nav-Pregunta1\" aria-selected=\"true\">Pregunta 1</a>\r\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta2\" role=\"tab\"\r\n                                                            aria-controls=\"nav-Pregunta2\" aria-selected=\"false\">Pregunta 2</a>\r\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta3-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta3\" role=\"tab\"\r\n                                                            aria-controls=\"nav-Pregunta3\" aria-selected=\"false\">Pregunta 3</a>\r\n                                                    </div>\r\n                                                </nav>\r\n\r\n                                                <!--Tabs Resultados-->\r\n                                                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                                                    <br>\r\n                                                    <!--Tab 1-->\r\n                                                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\r\n                                                            <div class=\"\">\r\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q1}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A11}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A12}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A13}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A14}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <!--Tab 2-->\r\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\r\n                                                            <div class=\"\">\r\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q2}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A21}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A22}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A23}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A24}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <!--Tab 3-->\r\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta3\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3-tab\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\r\n                                                            <div class=\"\">\r\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q3}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A31}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A32}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A33}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A34}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"style1b\">\r\n\r\n                        <!--Taller Actividad-->\r\n                        <div>\r\n                            <h5 style=\"cursor:context-menu\" class=\"\">Taller:</h5>\r\n                        </div>\r\n                        <div class=\"row-1\">\r\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                    <h5 style=\"cursor:context-menu\" class=\"card-title m-1\">{{tallerAct.nombre_CREA}}</h5>\r\n                                </div>\r\n                                <div class=\"row no-gutters\">\r\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <p class=\"card-text \">Descripcion: {{tallerAct.descripcion_CREA}}</p>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{tallerAct.materia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{tallerAct.id_grado}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido:\r\n                                                        {{tallerAct.nombre_tipo_CREA}}</small></p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--Boton ver Taller-->\r\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                    <a class=\"btn btn-primary\" (click)=\"verTallerActividad()\">Ver</a>\r\n                                </div>\r\n                            </div> \r\n                        </div>\r\n                        <hr class=\"style1b\">\r\n\r\n                        <!--Evaluacion del contenido-->\r\n                        <div>\r\n                            <h5 style=\"cursor:context-menu\" class=\"\">Evaluacion:</h5>\r\n                        </div>\r\n                        <div class=\"contenedor py-3\">\r\n                            <div class=\"\">\r\n                                <label>Descripcion: {{ActividadService.selectedActividad.descripcion_evaluacion}}</label>\r\n                            </div>\r\n                            <div class=\"container\">\r\n                                <!--Tabs-->\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"card mt-3 tab-card\">\r\n                                            <div class=\"card-header tab-card-header bg-light\">\r\n                                                <!--Opcion Tab-->\r\n                                                <nav>\r\n                                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                                        <a class=\"col nav-item nav-link text-center active\" id=\"nav-Pregunta1E-tab\"\r\n                                                            data-toggle=\"tab\" href=\"#nav-Pregunta1E\" role=\"tab\" aria-controls=\"nav-Pregunta1E\"\r\n                                                            aria-selected=\"true\">Pregunta 1</a>\r\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta2E-tab\" data-toggle=\"tab\"\r\n                                                            href=\"#nav-Pregunta2E\" role=\"tab\" aria-controls=\"nav-Pregunta2E\"\r\n                                                            aria-selected=\"false\">Pregunta 2</a>\r\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta3E-tab\" data-toggle=\"tab\"\r\n                                                            href=\"#nav-Pregunta3E\" role=\"tab\" aria-controls=\"nav-Pregunta3E\"\r\n                                                            aria-selected=\"false\">Pregunta 3</a>\r\n                                                    </div>\r\n                                                </nav>\r\n                        \r\n                                                <!--Tabs Resultados-->\r\n                                                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                                                    <br>\r\n                                                    <!--Tab 1-->\r\n                                                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1E-tab\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\r\n                                                            <div class=\"\">\r\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ1}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA11}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA12}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA13}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA14}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <!--Tab 2-->\r\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta2E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2E-tab\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\r\n                                                            <div class=\"\">\r\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ2}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA21}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA22}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA23}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA24}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <!--Tab 3-->\r\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta3E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3E-tab\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\r\n                                                            <div class=\"\">\r\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ3}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA31}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA32}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA33}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-group row\">\r\n                                                            <div class=\"pl-5\">\r\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA34}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"style1b\">\r\n\r\n                    </div>  \r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light\">\r\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\">Cerrar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-actividad/crear-actividad.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-actividad/crear-actividad.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 contenedor py-3\">\r\n    \r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-warning rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Crear Actividade</h1>\r\n    </div>\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container container bg-secondary pt-1  rounded-bottom\">\r\n        \r\n        <!--Actividad-->\r\n        <div>\r\n            <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Informacion de la Actividad</h3>\r\n            <div class=\"contenedor py-3\">\r\n                <form #frmCrearActividad=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputNombreActividad\" class=\"text-white \">Nombre de la Actividad</label>\r\n                        <input type=\"text\" name=\"nombre_actividad\" class=\"form-control col-md-8\" id=\"inputNombreActividad\" placeholder=\"Nombre Actividad\" required [(ngModel)]=\"nombre_actividad\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputDescripcionActividad\" class=\"text-white\">Descripcion de la Actividad</label>\r\n                        <textarea class=\"form-control\" name=\"descripcion_actividad\" id=\"inputDescripcionActividad\" \r\n                            rows=\"4\" required [(ngModel)]=\"descripcion_actividad\" placeholder=\"Descripcion ...\"></textarea>\r\n                    </div>\r\n                    <!-- Selectores -->\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"inputMateriaActividad\" class=\"text-white\">Materia</label>\r\n                            <select [(ngModel)]=\"materiaSelectedA\" name=\"materiaSelectedA\" id=\"inputMateriaActividad\" class=\"form-control\" ngModel required>\r\n                                <!--<option selected [value]='0'>- Materia -</option>-->\r\n                                <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"inputGradoActivdad\" class=\"text-white\">Grado</label>\r\n                            <select [(ngModel)]=\"gradoSelectedA\" name=\"gradoSelectedA\" id=\"inputGradoActivdad\" class=\"form-control\" ngModel required>\r\n                                <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"inputMiMateriaActivdad\" class=\"text-white\">Mis Materias</label>\r\n                            <select [(ngModel)]=\"miMateriaSelectedA\" name=\"miMateriaSelectedA\" id=\"inputMiMateriaActivdad\" class=\"form-control\" ngModel required>\r\n                                <option *ngFor=\"let ma of materiaActiva | filterMiMaterias: materiaSelectedA:gradoSelectedA:id_docenteAuth\" \r\n                                    [value]=\"ma.id_materiaActiva\">{{ma.nombre_materiaActiva}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <!--Filtro Competencia-->\r\n                    <div class=\"form-group col px-0\">\r\n                        <label for=\"inputDocenteA\" class=\"text-white\">Buscador Competencia</label>\r\n                        <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia\" placeholder=\"Ingrese palabra clave\" [(ngModel)]=\"nombreCompetenciaSelected\"\r\n                            name=\"inputBusquedaCompetencia\">\r\n                    </div>\r\n                    <div class=\"form-row pb-3\">\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputDocenteA\" class=\"text-white\">Competencia</label>\r\n                            <select [(ngModel)]=\"competenciaSelectedA\" id=\"inputCompetenciaA\" name=\"competenciaA\" class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();'ngModel required>\r\n                                <option class=\"col-auto px-0\" selected></option>\r\n                                <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\r\n                                <option class=\"col-auto px-0\" *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelected:materiaSelectedA:gradoSelectedA\"\r\n                                    [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\r\n                                </option>\r\n                            </select>\r\n                            <!--el valor seleccionado es {{competenciaSelectedA}}-->\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"style1\">\r\n                    \r\n                    <!--Contenido de la Actividad-->\r\n                    <div>\r\n                        <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Contenido de la Actividad</h3>\r\n                        <div class=\"contenedor py-3\">\r\n                            <form #frmBuscarContenido=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <!--Barra busqueda-->\r\n                                    <label for=\"inputNombreActividad\" class=\"text-white\">Busqueda de Contenido</label>\r\n                                    <div class=\"form-inline\">\r\n                                        <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusqueda\" placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreCREASelectedC\"\r\n                                            name=\"inputBusquedaContenido\">\r\n                                    </div>\r\n                                </div>\r\n                                <!--Filtros-->\r\n                                <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                                <div class=\"form-row pb-3\">\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputMateria\" class=\"text-white\">Materia</label>\r\n                                        <select [(ngModel)]=\"materiaSelectedC\" id=\"inputMateria\" name=\"materia\" class=\"form-control\" ngModel\r\n                                            required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">{{mater.nombre_materia}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                                        <select [(ngModel)]=\"gradoSelectedC\" id=\"inputGrado\" name=\"grado\" class=\"form-control\" ngModel\r\n                                            required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputDocente\" class=\"text-white\">Profesor</label>\r\n                                        <select [(ngModel)]=\"docenteSelectedC\" id=\"inputDocente\" name=\"Docente\" class=\"form-control\" ngModel required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">{{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputType\" class=\"text-white\">Tipo de Contenido</label>\r\n                                        <select [(ngModel)]=\"tipoContenidoSelectedC\" id=\"inputType\" name=\"tipoContenido\"\r\n                                            class=\"form-control\" ngModel required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let tipCon of tipoContenido\" [value]=\"tipCon.id_tipoContenido\">\r\n                                                {{tipCon.nombre_tipoContenido}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!--Tabla de Resultados-->\r\n                                <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                    style=\"width: 95%; height: 450px\">\r\n                                    <!--Resultado-->\r\n                                    <div class=\"row-1\"\r\n                                        *ngFor=\"let contenidoREA of contenidoVisualizar | filterContent: nombreCREASelectedC:materiaSelectedC:gradoSelectedC:docenteSelectedC:tipoContenidoSelectedC:ID_TipoContenido_Taller\">\r\n                                        <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                            <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                <h5 class=\"card-title m-1\">{{contenidoREA.nombre_CREA}}</h5>\r\n                                            </div>\r\n                                            <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                    <div class=\"card-body p-2\">\r\n                                                        <p class=\"card-text \">Descripcion: {{contenidoREA.descripcion_CREA}}.</p>\r\n                                                        <div>\r\n                                                            <p class=\"card-text\"><small class=\"text-muted\">Materia: {{contenidoREA.materia}}</small></p>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <p class=\"card-text\"><small class=\"text-muted\">Grado: {{contenidoREA.id_grado}}</small></p>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido: {{contenidoREA.nombre_tipo_CREA}}</small></p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Boton Adjuntar Contenido-->\r\n                                            <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                <a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"saveDataContent(contenidoREA)\">Adjuntar</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"style1\">\r\n                    \r\n                    <!--Creacion del Quiz-->\r\n                    <div>\r\n                        <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Quiz del Contenido</h3>\r\n                        <div class=\"contenedor py-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputDescripcionQuiz\" class=\"text-white\">Descripcion del Quiz</label>\r\n                                <textarea class=\"form-control\" name=\"descripcion_quiz\" id=\"inputDescripcionQuiz\" rows=\"4\" required\r\n                                    [(ngModel)]=\"descripcion_quiz\" placeholder=\"Descripcion ...\"></textarea>\r\n                            </div>\r\n                            <div class=\"container\">\r\n                                <!--Tabs-->\r\n                                <div>\r\n                                    <label for=\"tituloPreguntasQuiz\" class=\"text-white\">Preguntas del Quiz</label>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"card mt-3 tab-card\">\r\n                                            <div class=\"card-header tab-card-header\">\r\n                                                <!--Opcion Tab-->\r\n                                                <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\r\n                                                    <li class=\"nav-item col\">\r\n                                                        <a class=\"nav-link text-center\" id=\"one-tab\" data-toggle=\"tab\" href=\"#pregunta1\"\r\n                                                            role=\"tab\" aria-controls=\"pregunta1\" aria-selected=\"true\">Pregunta 1</a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item col\">\r\n                                                        <a class=\"nav-link text-center\" id=\"two-tab\" data-toggle=\"tab\" href=\"#pregunta2\"\r\n                                                            role=\"tab\" aria-controls=\"pregunta2\" aria-selected=\"false\">Pregunta 2</a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item col\">\r\n                                                        <a class=\"nav-link text-center\" id=\"three-tab\" data-toggle=\"tab\" href=\"#pregunta3\"\r\n                                                            role=\"tab\" aria-controls=\"pregunta3\" aria-selected=\"false\">Pregunta 3</a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <div class=\"tab-content\" id=\"myTabContent\">\r\n                                                <!--Pregunta 1 Tabs-->\r\n                                                <div class=\"tab-pane fade show active p-3\" id=\"pregunta1\" role=\"tabpanel\"\r\n                                                    aria-labelledby=\"one-tab\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\r\n                                                        <label for=\"inputPregunta1\" class=\"text-dark\">Escribir pregunta</label>\r\n                                                        <textarea class=\"form-control\" name=\"preguntaQ1\" id=\"inputPregunta1\" rows=\"3\"\r\n                                                            required [(ngModel)]=\"preguntaQ1\" placeholder=\"Pregunta ...\"></textarea>\r\n                                                    </div>\r\n                                                    <label for=\"tituloCuatroRespuestas\" class=\"text-dark\">Escribir las cuatro posibles\r\n                                                        respuestas</label>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1A\" class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta11\" id=\"inputRespuesta1A\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta11\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1B\" class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta12\" id=\"inputRespuesta1B\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta12\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1C\" class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta13\" id=\"inputRespuesta1C\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta13\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1D\" class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta14\" id=\"inputRespuesta1D\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta14\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <label for=\"inputSelectPreguntaCorrecta\" class=\"text-dark\">Seleccione la respuesta\r\n                                                        correcta</label>\r\n                                                    <div class=\"form-grup row-1\">\r\n                                                        <div class=\"form-group col-2\">\r\n                                                            <select [(ngModel)]=\"respuestaCorrectaTSelected1\" name=\"respuestaCorrectaTSelected1\"\r\n                                                                id=\"inputRespuestaCorrecta1\" class=\"form-control\" ngModel required>\r\n                                                                <option [value]=1>A</option>\r\n                                                                <option [value]=2>B</option>\r\n                                                                <option [value]=3>C</option>\r\n                                                                <option [value]=4>D</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                </div>\r\n                                                <!--Pregunta 2 Tabs-->\r\n                                                <div class=\"tab-pane fade p-3\" id=\"pregunta2\" role=\"tabpanel\" aria-labelledby=\"two-tab\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\r\n                                                        <label for=\"inputPregunta2\" class=\"text-dark\">Escribir pregunta</label>\r\n                                                        <textarea class=\"form-control\" name=\"preguntaQ2\" id=\"inputPregunta2\" rows=\"3\"\r\n                                                            required [(ngModel)]=\"preguntaQ2\" placeholder=\"Pregunta ...\"></textarea>\r\n                                                    </div>\r\n                                                    <label for=\"tituloCuatroRespuestas\" class=\"text-dark\">Escribir las cuatro posibles\r\n                                                        respuestas</label>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2A\" class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta21\" id=\"inputRespuesta2A\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta21\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2B\" class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta22\" id=\"inputRespuesta2B\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta22\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2C\" class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta23\" id=\"inputRespuesta2C\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta23\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2D\" class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta24\" id=\"inputRespuesta2D\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta24\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <label for=\"inputSelectPreguntaCorrecta\" class=\"text-dark\">Seleccione la respuesta\r\n                                                        correcta</label>\r\n                                                    <div class=\"form-grup row-1\">\r\n                                                        <div class=\"form-group col-2\">\r\n                                                            <select [(ngModel)]=\"respuestaCorrectaTSelected2\" name=\"respuestaCorrectaTSelected2\"\r\n                                                                id=\"inputRespuestaCorrecta2\" class=\"form-control\" ngModel required>\r\n                                                                <option [value]=1>A</option>\r\n                                                                <option [value]=2>B</option>\r\n                                                                <option [value]=3>C</option>\r\n                                                                <option [value]=4>D</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                </div>\r\n                                                <div class=\"tab-pane fade p-3\" id=\"pregunta3\" role=\"tabpanel\" aria-labelledby=\"three-tab\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\r\n                                                        <label for=\"inputPregunta3\" class=\"text-dark\">Escribir pregunta</label>\r\n                                                        <textarea class=\"form-control\" name=\"preguntaQ3\" id=\"inputPregunta3\" rows=\"3\"\r\n                                                            required [(ngModel)]=\"preguntaQ3\" placeholder=\"Pregunta ...\"></textarea>\r\n                                                    </div>\r\n                                                    <label for=\"tituloCuatroRespuestas\" class=\"text-dark\">Escribir las cuatro posibles\r\n                                                        respuestas</label>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3A\" class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta31\" id=\"inputRespuesta3A\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta31\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3B\" class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta32\" id=\"inputRespuesta3B\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta32\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3C\" class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta33\" id=\"inputRespuesta3C\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta33\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3D\" class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta34\" id=\"inputRespuesta3D\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta34\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <label for=\"inputSelectPreguntaCorrecta\" class=\"text-dark\">Seleccione la respuesta\r\n                                                        correcta</label>\r\n                                                    <div class=\"form-grup row-1\">\r\n                                                        <div class=\"form-group col-2\">\r\n                                                            <select [(ngModel)]=\"respuestaCorrectaTSelected3\" name=\"respuestaCorrectaTSelected3\"\r\n                                                                id=\"inputRespuestaCorrecta3\" class=\"form-control\" ngModel required>\r\n                                                                <option [value]=1>A</option>\r\n                                                                <option [value]=2>B</option>\r\n                                                                <option [value]=3>C</option>\r\n                                                                <option [value]=4>D</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"style1\">\r\n\r\n                    <!--Taller de la Actividad-->\r\n                    <div>\r\n                        <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Taller de la Actividad</h3>\r\n                        <div class=\"contenedor py-3\">\r\n                            <form #frmBuscarTaller=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <!--Barra busqueda-->\r\n                                    <label for=\"inputNombreTaller\" class=\"text-white\">Busqueda del Taller</label>\r\n                                    <div class=\"form-inline\">\r\n                                        <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaTaller\" placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreTallerSelected\" name=\"inputBusquedaTaller\">\r\n                                    </div>\r\n                                </div>\r\n                                <!--Filtros-->\r\n                                <label for=\"inputFiltrosTaller\" class=\"text-white\">Filtros:</label>\r\n                                <div class=\"form-row pb-3\">\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputMateriaTaller\" class=\"text-white\">Materia</label>\r\n                                        <select [(ngModel)]=\"materiaTallerSelected\" id=\"inputMateriaTaller\" name=\"materiaTaller\" class=\"form-control\" ngModel required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">{{mater.nombre_materia}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputGradoTaller\" class=\"text-white\">Grado</label>\r\n                                        <select [(ngModel)]=\"gradoTallerSelected\" id=\"inputGradoTaller\" name=\"gradoTaller\" class=\"form-control\" ngModel required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"form-group col\">\r\n                                        <label for=\"inputDocenteTaller\" class=\"text-white\">Profesor</label>\r\n                                        <select [(ngModel)]=\"docenteSelectedTaller\" id=\"inputDocenteTaller\" name=\"DocenteTaller\" class=\"form-control\" ngModel required>\r\n                                            <option selected></option>\r\n                                            <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">{{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!--Tabla de Resultados-->\r\n                                <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                    style=\"width: 95%; height: 450px\">\r\n                                    <!--Resultado-->\r\n                                    <div class=\"row-1\" *ngFor=\"let tallerREA of contenidoVisualizar | filterTaller: nombreTallerSelected:materiaTallerSelected:gradoTallerSelected:docenteSelectedTaller:ID_TipoContenido_Taller\">\r\n                                        <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                            <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                <h5 class=\"card-title m-1\">{{tallerREA.nombre_CREA}}</h5>\r\n                                            </div>\r\n                                            <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                    <div class=\"card-body p-2\">\r\n                                                        <p class=\"card-text \">Descripcion: {{tallerREA.descripcion_CREA}}.</p>\r\n                                                        <div>\r\n                                                            <p class=\"card-text\"><small class=\"text-muted\">Materia: {{tallerREA.materia}}</small></p>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <p class=\"card-text\"><small class=\"text-muted\">Grado: {{tallerREA.id_grado}}</small></p>\r\n                                                        </div>\r\n                                                        <div>\r\n                                                            <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido: {{tallerREA.nombre_tipo_CREA}}</small></p>\r\n                                                        </div>  \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Boton Adjuntar Contenido-->\r\n                                            <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                <a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#mimodalejemplo3\" (click)=\"saveDataTaller(tallerREA)\" >Adjuntar</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"style1\">\r\n                    \r\n                    <!--Creacion del Evaluacion-->\r\n                    <div>\r\n                        <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Evaluación</h3>\r\n                        <div class=\"contenedor py-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputDescripcionEvaluacion\" class=\"text-white\">Descripcion de la Evaluación</label>\r\n                                <textarea class=\"form-control\" name=\"descripcion_evaluacion\" id=\"inputDescripcionEvaluacion\" rows=\"4\" required\r\n                                    [(ngModel)]=\"descripcion_evaluacion\" placeholder=\"Descripcion ...\"></textarea>\r\n                            </div>\r\n                            <div class=\"container\">\r\n                                <!--Tabs-->\r\n                                <div>\r\n                                    <label for=\"tituloPreguntasevaluacion\" class=\"text-white\">Preguntas de la Evaluación</label>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"card mt-3 tab-card\">\r\n                                            <div class=\"card-header tab-card-header\">\r\n                                                <!--Opcion Tab-->\r\n                                                <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\r\n                                                    <li class=\"nav-item col\">\r\n                                                        <a class=\"nav-link text-center\" id=\"one-tabE\" data-toggle=\"tab\" href=\"#pregunta1E\"\r\n                                                            role=\"tab\" aria-controls=\"pregunta1E\" aria-selected=\"true\">Pregunta 1</a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item col\">\r\n                                                        <a class=\"nav-link text-center\" id=\"two-tabE\" data-toggle=\"tab\" href=\"#pregunta2E\"\r\n                                                            role=\"tab\" aria-controls=\"pregunta2E\" aria-selected=\"false\">Pregunta 2</a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item col\">\r\n                                                        <a class=\"nav-link text-center\" id=\"three-tabE\" data-toggle=\"tab\" href=\"#pregunta3E\"\r\n                                                            role=\"tab\" aria-controls=\"pregunta3E\" aria-selected=\"false\">Pregunta 3</a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            \r\n                                            <div class=\"tab-content\" id=\"myTabContent\">\r\n                                                <!--Pregunta 1 Tabs-->\r\n                                                <div class=\"tab-pane fade show active p-3\" id=\"pregunta1E\" role=\"tabpanel\" aria-labelledby=\"one-tabE\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\r\n                                                        <label for=\"inputPregunta1E\" class=\"text-dark\">Escribir pregunta</label>\r\n                                                        <textarea class=\"form-control\" name=\"preguntaQ1E\" id=\"inputPregunta1E\" rows=\"3\" required \r\n                                                            [(ngModel)]=\"preguntaQ1E\" placeholder=\"Pregunta ...\"></textarea>\r\n                                                    </div>\r\n                                                    <label for=\"tituloCuatroRespuestasE\" class=\"text-dark\">Escribir las cuatro posibles respuestas</label>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1AE\" class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta11E\" id=\"inputRespuesta1AE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta11E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1BE\" class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta12E\" id=\"inputRespuesta1BE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta12E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1CE\" class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta13E\" id=\"inputRespuesta1CE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta13E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta1DE\" class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta14E\" id=\"inputRespuesta1DE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta14E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <label for=\"inputSelectPreguntaCorrectaE\" class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                    <div class=\"form-grup row-1\">\r\n                                                        <div class=\"form-group col-2\">\r\n                                                            <select [(ngModel)]=\"respuestaCorrectaESelected1\" name=\"respuestaCorrectaESelected1\" id=\"inputRespuestaCorrecta1E\" class=\"form-control\" ngModel required>\r\n                                                                <option [value]=1>A</option>\r\n                                                                <option [value]=2>B</option>\r\n                                                                <option [value]=3>C</option>\r\n                                                                <option [value]=4>D</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <!--Pregunta 2 Tabs-->\r\n                                                <div class=\"tab-pane fade p-3\" id=\"pregunta2E\" role=\"tabpanel\" aria-labelledby=\"two-tabE\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\r\n                                                        <label for=\"inputPregunta2E\" class=\"text-dark\">Escribir pregunta</label>\r\n                                                        <textarea class=\"form-control\" name=\"preguntaQ2E\" id=\"inputPregunta2E\" rows=\"3\"\r\n                                                            required [(ngModel)]=\"preguntaQ2E\" placeholder=\"Pregunta ...\"></textarea>\r\n                                                    </div>\r\n                                                    <label for=\"tituloCuatroRespuestasE\" class=\"text-dark\">Escribir las cuatro posibles respuestas</label>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2AE\" class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta21E\" id=\"inputRespuesta2AE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta21E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2BE\" class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta22E\" id=\"inputRespuesta2BE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta22E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2CE\" class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta23E\" id=\"inputRespuesta2CE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta23E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta2DE\" class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta24E\" id=\"inputRespuesta2DE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta24E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <label for=\"inputSelectPreguntaCorrectaE\" class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                    <div class=\"form-grup row-1\">\r\n                                                        <div class=\"form-group col-2\">\r\n                                                            <select [(ngModel)]=\"respuestaCorrectaESelected2\" name=\"respuestaCorrectaESelected2\" id=\"inputRespuestaCorrecta2E\" class=\"form-control\" ngModel required>\r\n                                                                <option [value]=1>A</option>\r\n                                                                <option [value]=2>B</option>\r\n                                                                <option [value]=3>C</option>\r\n                                                                <option [value]=4>D</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <!--Pregunta 3 Tabs-->\r\n                                                <div class=\"tab-pane fade p-3\" id=\"pregunta3E\" role=\"tabpanel\" aria-labelledby=\"three-tabE\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\r\n                                                        <label for=\"inputPregunta3E\" class=\"text-dark\">Escribir pregunta</label>\r\n                                                        <textarea class=\"form-control\" name=\"preguntaQ3E\" id=\"inputPregunta3E\" rows=\"3\"\r\n                                                            required [(ngModel)]=\"preguntaQ3E\" placeholder=\"Pregunta ...\"></textarea>\r\n                                                    </div>\r\n                                                    <label for=\"tituloCuatroRespuestasE\" class=\"text-dark\">Escribir las cuatro posibles respuestas</label>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3AE\" class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta31E\" id=\"inputRespuesta3AE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta31E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3BE\" class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta32E\" id=\"inputRespuesta3BE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta32E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3CE\" class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta33E\" id=\"inputRespuesta3CE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta33E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group row\">\r\n                                                        <label for=\"inputRespuesta3DE\" class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                        <div class=\"col-sm-10\">\r\n                                                            <textarea class=\"form-control\" name=\"respuesta34E\" id=\"inputRespuesta3DE\" rows=\"1\"\r\n                                                                required [(ngModel)]=\"respuesta34E\" placeholder=\"respuesta ...\"></textarea>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <label for=\"inputSelectPreguntaCorrectaE\" class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                    <div class=\"form-grup row-1\">\r\n                                                        <div class=\"form-group col-2\">\r\n                                                            <select [(ngModel)]=\"respuestaCorrectaESelected3\" name=\"respuestaCorrectaESelected3\" id=\"inputRespuestaCorrecta3E\" class=\"form-control\" ngModel required>\r\n                                                                <option [value]=1>A</option>\r\n                                                                <option [value]=2>B</option>\r\n                                                                <option [value]=3>C</option>\r\n                                                                <option [value]=4>D</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"style1\">\r\n                    <br>\r\n                    \r\n                    <!--Boton Crear Actividad-->\r\n                    <div class=\"row pb-4 justify-content-md-center no-gutters\">\r\n                        <a class=\"btn bg-warning px-5 py-4 font-weight-bold\"  data-toggle=\"modal\" data-target=\"#mimodalejemplo\" (click)=\"onCrearActividad(frmCrearActividad)\">Crear Actividad</a>\r\n                    </div>\r\n\r\n                </form>\r\n                <hr class=\"style1\">\r\n            </div>\r\n        </div>  \r\n    </div>  \r\n\r\n    <!-- Modal Confirmar Actividad Creada-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\r\n                    Creando la Actividad. Espera por favor.\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto\">\r\n                    La Actividad ha sido creada.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error\">\r\n                    La Actividad no se ha podido crear. Verifica que has ingresado todos los \r\n                    datos requeridos.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error2\">\r\n                    La Actividad no se ha podido crear. Verifica que has \r\n                    adjuntado el contenido y el taller.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Adjuntar Contenido-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\">\r\n                    El Contenido ha sido adjuntado\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Adjuntar Taller-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\">\r\n                    El Taller ha sido adjuntado\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dudas/dudas.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dudas/dudas.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<!--Contenedor Contenido Pagina-->\n<div class=\"mb-5 contenedor py-3\">\n\n    <!--Titulo pagina-->\n    <div class=\"container m-auto pb-2 bg-info rounded-top\">\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Dudas</h1>\n    </div>\n    \n    <!--Contenedor Formularios-->\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\n\n        <!--Tabs-->\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"mt-3\">\n                    <div class=\"card-header tab-card-header\">\n                        <!--Opcion Tab-->\n                        <nav>\n                            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta1\" role=\"tab\" aria-controls=\"nav-Pregunta1\" aria-selected=\"true\">Sin Resolver</a>\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\"\n                                    href=\"#nav-Pregunta2\" role=\"tab\" aria-controls=\"nav-Pregunta2\" aria-selected=\"false\">Resueltas</a>\n                            </div>\n                        </nav>\n        \n                        <!--Tabs Resultados-->\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\n                            <br>\n\n                            <!--Tab 1-->\n                            <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\n                                <!--Dudas Sin Resolver-->\n                                <div>\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Dudas Sin Resolver</h3>\n                            \n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <form #frmBuscarCompetencia=\"ngForm\">\n                            \n                                            <!--Buscar-->\n                                            <h5 class=\"py-3 text-white\">Filtros:</h5>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control col-md-8\" id=\"inputNombreActividadSinR\" placeholder=\"Nombre Actividad\" \n                                                    [(ngModel)]=\"nombreActividadSelectedSinR\" name=\"nombreActividadSelectedSinR\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control col-md-6\" id=\"inputNombreEstudianteSinR\" placeholder=\"Nombre Estudiante\" \n                                                    [(ngModel)]=\"nombreEstudianteSelectedSinR\" name=\"nombreEstudianteSelectedSinR\">\n                                            </div>\n                                            <!-- Selectores -->\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group col-4\">\n                                                    <label for=\"inputMateriaSinR\" class=\"text-white\">Materia</label>\n                                                    <select [(ngModel)]=\"materiaSinRSelected\" name=\"materiaSinRSelected\" id=\"inputMateriaSinR\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let materia of materias\" [value]=\"materia.id_materia\">{{materia.nombre_materia}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group col-3\">\n                                                    <label for=\"inputGradoSinR\" class=\"text-white\">Grado</label>\n                                                    <select [(ngModel)]=\"gradoSinRSelected\" name=\"gradoSinRSelected\" id=\"inputGradoSinR\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let grado of grados\" [value]=\"grado.id_grado\">{{grado.nombre_grado}}</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                            \n                                            <!--Resultados-->\n                                            <h5 class=\"py-3 text-white\">Resultados:</h5>\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\n                                                style=\"width: 95%; height: 450px\">\n                                                <!--Resultado-->\n                                                <div class=\"row-1\" *ngFor=\"let duda of dudasVisualizar | filterDuda: nombreActividadSelectedSinR:materiaSinRSelected:gradoSinRSelected:id_docenteAuth:SinROption:nombreEstudianteSelectedSinR\">\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                        <div class=\"row no-gutters border border-info\">\n                                                            <div class=\"col\" style=\"max-width: 840px;\">\n                                                                <div class=\"card-body p-2\">\n                                                                    <p class=\"card-text\">Pregunta: {{duda.pregunta}}</p>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Actividad: {{duda.nombre_actividad}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Estudiante: {{duda.estudiante}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia: {{duda.materia}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado: {{duda.id_grado}}</small></p>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <!--Boton Responder Duda-->\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo3\" (click)=\"saveDataDuda(duda)\">Responder</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <br>\n                                        <hr class=\"style4\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!--Tab 2-->\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\n                                <!--Dudas Resueltas-->\n                                <div>\n                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Dudas Resueltas</h3>\n                            \n                                    <div class=\"contenedor mx-3 py-3\">\n                                        <form #frmBuscarCompetencia=\"ngForm\">\n                            \n                                            <!--Buscar-->\n                                            <h5 class=\"py-3 text-white\">Filtros:</h5>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control col-md-8\" id=\"inputNombreActividadR\" placeholder=\"Nombre Actividad\" \n                                                    [(ngModel)]=\"nombreActividadSelectedR\" name=\"nombreActividadSelectedR\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control col-md-6\" id=\"inputNombreEstudianteR\" placeholder=\"Nombre Estudiante\" \n                                                    [(ngModel)]=\"nombreEstudianteSelectedR\" name=\"nombreEstudianteSelectedR\">\n                                            </div>\n                                            <!-- Selectores -->\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group col-4\">\n                                                    <label for=\"inputMateriaR\" class=\"text-white\">Materia</label>\n                                                    <select [(ngModel)]=\"materiaRSelected\" name=\"materiaRSelected\" id=\"inputMateriaR\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let materia of materias\" [value]=\"materia.id_materia\">{{materia.nombre_materia}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"form-group col-3\">\n                                                    <label for=\"inputGradoR\" class=\"text-white\">Grado</label>\n                                                    <select [(ngModel)]=\"gradoRSelected\" name=\"gradoRSelected\" id=\"inputGradoR\" class=\"form-control\" ngModel required>\n                                                        <option selected></option>\n                                                        <option *ngFor=\"let grado of grados\" [value]=\"grado.id_grado\">{{grado.nombre_grado}}\n                                                        </option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                            \n                                            <!--Resultados-->\n                                            <h5 class=\"py-3 text-white\">Resultados:</h5>\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\n                                                style=\"width: 95%; height: 450px\">\n                                                <!--Resultado-->\n                                                <div class=\"row-1\" *ngFor=\"let dudaR of dudasVisualizar | filterDuda: nombreActividadSelectedR:materiaRSelected:gradoRSelected:id_docenteAuth:ROption:nombreEstudianteSelectedR\">\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                        <div class=\"row no-gutters border border-info\">\n                                                            <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                                                <div class=\"card-body p-2\">\n                                                                    <p class=\"card-text\">Pregunta: {{dudaR.pregunta}}</p>\n                                                                    <p class=\"card-text\">Respuesta: {{dudaR.respuesta}}</p>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Actividad: {{dudaR.nombre_actividad}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Estudiante: {{dudaR.estudiante}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia: {{dudaR.materia}}</small></p>\n                                                                    </div>\n                                                                    <div>\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado: {{dudaR.id_grado}}</small></p>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <!--Boton Ocultar Duda-->\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"saveDataDuda(dudaR)\">Ocultar</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <br>\n                                        <hr class=\"style4\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmar Duda Ocultada -->\n    <div class=\"modal fade\" id=\"mimodalejemplo4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel4\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h4>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body text-info\">\n                    Se ha Ocultado la Duda.\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Confirmar Ocultar Duda -->\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Confirmar Accion</h4>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Para Ocultar la Duda presione aceptar, de lo contrario presione X\n                    para cancelar.\n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo4\" (click)=\"ocultarDuda()\">Aceptar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Responder Duda -->\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Duda Seleccionada</h4>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #frmRespuesta=\"ngForm\">\n                        <div class=\"row no-gutters border border-info\">\n                            <div class=\"col\" style=\"max-width: 840px;\">\n                                <div class=\"card-body p-2\">\n                                    <p class=\"card-text\">Pregunta: {{dudaToSave.pregunta}}</p>\n                                    <div>\n                                        <p class=\"card-text text-info\" data-toggle=\"modal\" style=\"cursor:pointer\"\n                                            data-target=\"#mimodalejemplo\" (click)=\"getActividadinModal()\"><small\n                                                class=\"text-muted\">Actividad: {{dudaToSave.nombre_actividad}}</small></p>\n                                    </div>\n                                    <div>\n                                        <p class=\"card-text\"><small class=\"text-muted\">Estudiante: {{dudaToSave.estudiante}}</small></p>\n                                    </div>\n                                    <div>\n                                        <p class=\"card-text\"><small class=\"text-muted\">Materia: {{dudaToSave.materia}}</small></p>\n                                    </div>\n                                    <div>\n                                        <p class=\"card-text\"><small class=\"text-muted\">Grado: {{dudaToSave.id_grado}}</small></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"text-center pt-3 pb-2\">Respuesta:</h5>\n                            <textarea class=\"form-control\" name=\"respuesta\" id=\"inputRespuesta\" rows=\"4\" required\n                                [(ngModel)]=\"respuesta\" placeholder=\"Escriba una respuesta ...\"></textarea>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"responderPregunta(frmRespuesta)\">Enviar Respuesta</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Actividad Seleccionada -->\n    <div class=\"modal fade col\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content \">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title text-center my-0\" id=\"myModalLabel\">Actividad</h4>\n                    <button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"\">\n                        <div>\n                            <h3 style=\"cursor:context-menu\" class=\"text-center bg-warning py-4\">{{ActividadService.selectedActividad.titulo_actividad}}</h3>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <div>\n                                                <h5 class=\"\">Descripcion: {{actividadVisualizar.descripcion_actividad}}</h5>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{actividadVisualizar.materia}}</small>\n                                                </p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{actividadVisualizar.id_grado}}</small>\n                                                </p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{actividadVisualizar.competencia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{actividadVisualizar.docente}}</small>\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Contenido Actividad-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Contenido:</h5>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\n                                    <h5 style=\"cursor:context-menu\" class=\"card-title m-1\">{{contenidoAct.nombre_CREA}}</h5>\n                                </div>\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <p class=\"card-text m-1\">Descripcion: {{contenidoAct.descripcion_CREA}}</p>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{contenidoAct.materia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{contenidoAct.id_grado}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido:\n                                                        {{contenidoAct.nombre_tipo_CREA}}</small></p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--Boton ver Contenido-->\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                    <a class=\"btn btn-primary\" (click)=\"verContenidoActividad()\">Ver</a>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Quiz del contenido-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Quiz del contenido:</h5>\n                        </div>\n                        <div class=\"contenedor py-3\">\n                            <div class=\"\">\n                                <label>Descripcion: {{ActividadService.selectedActividad.descripcion_test}}</label>\n                            </div>\n                            <div class=\"container\">\n                                <!--Tabs-->\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <div class=\"card mt-3 tab-card\">\n                                            <div class=\"card-header tab-card-header bg-light\">\n                                                <!--Opcion Tab-->\n                                                <nav>\n                                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                                        <a class=\"col nav-item nav-link text-center active\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta1\" role=\"tab\"\n                                                            aria-controls=\"nav-Pregunta1\" aria-selected=\"true\">Pregunta 1</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta2\" role=\"tab\"\n                                                            aria-controls=\"nav-Pregunta2\" aria-selected=\"false\">Pregunta 2</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta3-tab\" data-toggle=\"tab\" href=\"#nav-Pregunta3\" role=\"tab\"\n                                                            aria-controls=\"nav-Pregunta3\" aria-selected=\"false\">Pregunta 3</a>\n                                                    </div>\n                                                </nav>\n\n                                                <!--Tabs Resultados-->\n                                                <div class=\"tab-content\" id=\"nav-tabContent\">\n                                                    <br>\n                                                    <!--Tab 1-->\n                                                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q1}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A11}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A12}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A13}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A14}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 2-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q2}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A21}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A22}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A23}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A24}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 3-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta3\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.Q3}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.A31}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.A32}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.A33}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.A34}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Taller Actividad-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Taller:</h5>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"card-footer p-2 bg-primary rounded-top\">\n                                    <h5 class=\"card-title m-1\">{{tallerAct.nombre_CREA}}</h5>\n                                </div>\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <p class=\"card-text \">Descripcion: {{tallerAct.descripcion_CREA}}</p>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{tallerAct.materia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{tallerAct.id_grado}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido:\n                                                        {{tallerAct.nombre_tipo_CREA}}</small></p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--Boton ver Taller-->\n                                <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                    <a class=\"btn btn-primary\" (click)=\"verTallerActividad()\">Ver</a>\n                                </div>\n                            </div> \n                        </div>\n                        <hr class=\"style1b\">\n\n                        <!--Evaluacion del contenido-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Evaluacion:</h5>\n                        </div>\n                        <div class=\"contenedor py-3\">\n                            <div class=\"\">\n                                <label>Descripcion: {{ActividadService.selectedActividad.descripcion_evaluacion}}</label>\n                            </div>\n                            <div class=\"container\">\n                                <!--Tabs-->\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <div class=\"card mt-3 tab-card\">\n                                            <div class=\"card-header tab-card-header bg-light\">\n                                                <!--Opcion Tab-->\n                                                <nav>\n                                                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                                                        <a class=\"col nav-item nav-link text-center active\" id=\"nav-Pregunta1E-tab\"\n                                                            data-toggle=\"tab\" href=\"#nav-Pregunta1E\" role=\"tab\" aria-controls=\"nav-Pregunta1E\"\n                                                            aria-selected=\"true\">Pregunta 1</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta2E-tab\" data-toggle=\"tab\"\n                                                            href=\"#nav-Pregunta2E\" role=\"tab\" aria-controls=\"nav-Pregunta2E\"\n                                                            aria-selected=\"false\">Pregunta 2</a>\n                                                        <a class=\"col nav-item nav-link text-center\" id=\"nav-Pregunta3E-tab\" data-toggle=\"tab\"\n                                                            href=\"#nav-Pregunta3E\" role=\"tab\" aria-controls=\"nav-Pregunta3E\"\n                                                            aria-selected=\"false\">Pregunta 3</a>\n                                                    </div>\n                                                </nav>\n                        \n                                                <!--Tabs Resultados-->\n                                                <div class=\"tab-content\" id=\"nav-tabContent\">\n                                                    <br>\n                                                    <!--Tab 1-->\n                                                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1E-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ1}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA11}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA12}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA13}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA14}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 2-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta2E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2E-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ2}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA21}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA22}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA23}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA24}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n\n                                                    <!--Tab 3-->\n                                                    <div class=\"tab-pane fade\" id=\"nav-Pregunta3E\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta3E-tab\">\n                                                        <div class=\"form-group\">\n                                                            <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\n                                                            <div class=\"\">\n                                                                <label class=\"\">Pregunta: {{ActividadService.selectedActividad.EQ3}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <label class=\"text-dark\">Posibles Respuestas:</label>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">A) {{ActividadService.selectedActividad.EA31}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">B) {{ActividadService.selectedActividad.EA32}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">C) {{ActividadService.selectedActividad.EA33}}</label>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group row\">\n                                                            <div class=\"pl-5\">\n                                                                <label class=\"\">D) {{ActividadService.selectedActividad.EA34}}</label>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style1b\">\n\n                    </div>  \n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light\">\n                    <button type=\"button\" class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"py-5 bg-dark\">\n    <div class=\"container\">\n        <!--<p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2019</p>-->\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n<div class=\"container py-4 m-0\">\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top pt-4 pb-3\">\r\n            <div class=\"container\">\r\n                <img src=\"assets/img/logoC.png\" class=\"\" alt=\"Logo\" style=\"cursor: pointer\" routerLink=\"/inicioProfesores\">\r\n                <button class=\"navbar-toggler navbar-toggler-right \" type=\"button\" data-toggle=\"collapse\"\r\n                    data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\r\n                    aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n                    <ul class=\"navbar-nav ml-auto\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-danger px-4 text-dark text-center font-weight-bold rounded\" routerLink=\"/busqueda\">Busqueda</a>\r\n                        </li>\r\n                        <li class=\"nav-item px-1\">\r\n                            <a class=\"nav-link bg-success px-4 text-dark text-center font-weight-bold rounded\" routerLink=\"/metricas\">Metricas</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-info px-4 text-dark text-center font-weight-bold rounded\" routerLink=\"/dudas\">Dudas</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown px-1\">\r\n                            <a class=\"nav-link py-2 mb-1 bg-warning text-center text-dark font-weight-bold rounded dropdown-toggle\"\r\n                                id=\"navbarGestionarActividad\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" data-target=\"#navbarDropdownActividad\">\r\n                                Gestionar Actividad\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right bg-warning text-dark\" id=\"navbarDropdownActividad\"\r\n                                aria-labelledby=\"navbarDropdownActividad\">\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/crearActividad\">Crear Actividad</a>\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/modificarActividad\">Modificar Actividad</a>\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/borrarActividad\">Borrar Actividad</a>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link py-2 mb-1 bg-primary text-center text-dark font-weight-bold rounded dropdown-toggle\"\r\n                                href=\"#\" id=\"navbarMateria\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" data-target=\"#navbarDropdownContenido\">\r\n                                Gestionar Contenido\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right bg-primary text-dark\" id=\"navbarDropdownContenido\"\r\n                                aria-labelledby=\"navbarDropdownContenido\">\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/subirContenido\">Subir Contenido</a>\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/borrarContenido\">Borrar Contenido</a>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown pl-1\">\r\n                            <a class=\"nav-link px-4 py-2 mb-1 text-center bg-light text-dark font-weight-bold rounded dropdown-toggle\"\r\n                                href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" data-target=\"#navbarDropdownPerfil\">\r\n                                Perfil\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right bg-secondary text-dark\" id=\"navbarDropdownPerfil\"\r\n                                aria-labelledby=\"navbarDropdownPerfil\">\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/InformacionProfesor\">Informacion usuario</a>\r\n                                <a class=\"dropdown-item text-center\" routerLink=\"/AdministrarProfesor\">Administrar usuario</a>\r\n                                <a class=\"dropdown-item btn text-center\" style=\"cursor: pointer\" (click)=\"logOut()\">Cerrar sesión</a>\r\n                                <a class=\"dropdown-item text-center\" style=\"cursor: pointer\" (click)=\"verManual()\">Ayuda</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/infromacion-docente/infromacion-docente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/infromacion-docente/infromacion-docente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 col-9 mx-auto\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-light rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Información Profesor</h1>\r\n    </div>\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Informacion del docente-->\r\n        <div class=\"container mx-auto\">\r\n            <br>\r\n            <div class=\"col-10\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <h5 class=\"text-white\">Nombre Docente:</h5>\r\n                    </div>\r\n                    <div class=\"col-auto\"><span class=\"text-white align-middle\">{{DocenteInfo.nombre_docente+' '+DocenteInfo.apellido_docente}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <h5 class=\"text-white\">Colegio:</h5>\r\n                    </div>\r\n                    <div class=\"col-auto\"><span class=\"text-white align-middle\">{{ColegioInfo.nombre_colegio}}</span></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <h5 class=\"text-white\">Nombre Usuario:</h5>\r\n                    </div>\r\n                    <div class=\"col-auto\"><span class=\"text-white align-middle\">{{DocenteInfo.nombre_usuario}}</span></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <h5 class=\"text-white\">Correo Electronico:</h5>\r\n                    </div>\r\n                    <div class=\"col-auto\"><span class=\"text-white align-middle\">{{DocenteInfo.correo_electronico}}</span></div>\r\n                </div>\r\n            </div>\r\n            \r\n\r\n            <br>\r\n            <hr class=\"style9\">\r\n\r\n            <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Materias creadas</h3>\r\n            <br>\r\n                <div class=\"row mx-auto\">\r\n                    <table class=\"mx-auto text-white m-auto rounded table-striped table-wrapper-scroll-y my-custom-scrollbar\" style=\"height: 256px;\">\r\n                        <thead class=\"bg-info\">\r\n                            <th class=\" pl-4 pr-0 py-2 text-dark\">Nombre Materia</th>\r\n                            <th class=\" px-5 py-2 text-dark\">Materia Base</th>\r\n                            <th class=\" pl-0 pr-4 py-2 text-dark\">Grado</th>\r\n                        </thead>\r\n                        <tbody class=\"bg-light\">\r\n                            <tr mdbTableCol *ngFor=\"let materiaActiva of MateriaActivaInfo | filterTableMateriaDocente: idDocente\">\r\n                                <td class=\" pl-4 pr-0 py-1 text-dark\">{{ materiaActiva.nombre_materiaActiva }}</td>\r\n                                <td class=\" px-5 py-1 text-dark text-center\">{{ materiaActiva.nombre_materia }}</td>\r\n                                <td class=\" pl-0 pr-4 py-1 text-dark text-center\">{{ materiaActiva.id_grado }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            <br>\r\n            <hr class=\"style9\">\r\n            <br>\r\n        </div>\r\n        \r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio-profesores/inicio-profesores.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio-profesores/inicio-profesores.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"contenedor pb-5\">\r\n\r\n    <div class=\"container\">\r\n    \r\n        <!-- Titulo Pagina Principal -->\r\n        <div class=\"container m-auto pb-2 bg-info rounded-top\">\r\n            <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center\">Bienvenido a la Plataforma</h1>\r\n        </div>\r\n    \r\n        <!--Contenedor-->\r\n        <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n    \r\n            <!--Parrafo de Informacion-->\r\n            <div>\r\n                <div class=\"contenedor pt-4\">\r\n                    <img src=\"assets/img/logoA.png\" class=\"row mx-auto\" alt=\"Logo\">\r\n                    <h3 style=\"cursor:context-menu\" class=\"text-light text-center pt-4\">Hola Profesor {{nombreApellidoDocente}}</h3>\r\n                    <h6 class=\"text-light pt-3 px-5 text-center\">El Modelo de Aula Invertida o Flipped Classroom en ingles; es muy importante\r\n                        para que tu clase sea mas interactiva, participativa y colaborativa. Con el fin de ayudarte a que\r\n                        tus estudiantes aprendan y afiancen los temas, te brindamos diferentes herramientas para que lo logres.\r\n                    </h6>\r\n                    <h6 class=\"text-light pt-3 px-5 text-center\">Recuerda: \"La educación no es llenar un cubo, sino encender un fuego\" — William Butler Yeats\r\n                    </h6>\r\n                </div>\r\n            </div>\r\n            <hr class=\"style4 pb-3\">\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- /.container -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"container h-100\">\r\n        <div class=\"d-flex justify-content-center pt-5\">\r\n            <div class=\"container user_card\" style=\"height: 490px;\">\r\n                <div class=\"d-flex justify-content-center mb-5\">\r\n                    <div class=\"brand_logo_container\">\r\n                        <img src=\"assets/img/login2.png\"\r\n                            class=\"brand_logo\" alt=\"Logo\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"justify-content-center form_container mt-5 py-4\">\r\n                    <form #frmLogin=\"ngForm\" >\r\n                        <div class=\"input-group mb-2\">\r\n                            <input type=\"text\" name=\"correo_electronico\" class=\"form-control input_user col-10 mx-auto\" value=\"\" placeholder=\"Correo Electronico\" ngModel required>\r\n                        </div>\r\n                        <div class=\"input-group mb-2\">\r\n                            <input type=\"password\" name=\"contrasena\" class=\"form-control input_pass col-10 mx-auto\" value=\"\" placeholder=\"Contraseña\" ngModel required>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"\" style=\"height: 10px;\">\r\n                            <div class=\"text-danger text-center\" *ngIf=\"error1\">El correo o la contraseña son incorrectos</div>\r\n                            <div class=\"text-danger text-center\" *ngIf=\"error2\">El usuario o la contraseña son incorrectos</div>\r\n                            <div class=\"text-danger text-center\" *ngIf=\"error3\">Error Servidor</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center mt-2 login_container\">\r\n                    <a name=\"button\" style=\"cursor: pointer\" class=\"btn bg-primary col text-white\" (click)=\"onLoginDocente(frmLogin)\">Ingresar</a>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center mt-1 login_container\">\r\n                    <a name=\"button\" class=\"btn bg-danger col text-white\" routerLink=\"/registroProfesor\">Registrarse</a>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center mt-1 login_container\">\r\n                    <a name=\"button\" style=\"cursor: pointer\" class=\"btn bg-warning col text-white\" (click)=\"onLoginVisitante()\">Visitante</a>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center mt-1 login_container\">\r\n                    <a name=\"button\" style=\"cursor: pointer\" class=\"btn bg-secondary col text-white\" (click)=\"onLoginAdmin(frmLogin)\">Administrador</a>\r\n                </div>\r\n                <div class=\"mt-4 mx-0\">\r\n                    <!--<div class=\"d-flex justify-content-center links\">\r\n                        <a href=\"#\">Olvidastes tu contraseña?</a>\r\n                    </div>-->\r\n                    <div class=\"row align-items-center justify-content-between\">\r\n                        <div class=\"col-2\"><span class=\"text-white\" style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\">Servidor:</span>\r\n                            <span class=\"text-info pl-1\" *ngIf=\"correctoIP\">Conectado</span>\r\n                            <span class=\"text-danger pl-1\" *ngIf=\"errorIP\">Desconectado</span>\r\n                        </div>\r\n                        <img src=\"assets/img/downloadApp1.png\" class=\"\" width=45% height=45% class=\"rounded float-right pr-1\" alt=\"Logo\" style=\"cursor: pointer\" (click)=\"downloadApp()\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Ingresar IPServidor-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Configuracion IP del Servidor</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <form #frmIPS=\"ngForm\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputIPServer\" class=\"\">Ingresa la IP del Servidor:</label>\r\n                            <input type=\"text\" name=\"IPServer\" class=\"form-control col-md-5\" id=\"inputIPServer\"\r\n                                placeholder=\"IP Servidor\" required [(ngModel)]=\"IPServer\">\r\n                        </div>\r\n                        <a><small class=\"text-muted\">Nota:\r\n                        </small></a><br>\r\n                        <a><small class=\"text-muted\">- Si no sabe la iderección IP del servidor, consulta con el Administrador encargado \r\n                                para que te la proporcione.\r\n                        </small></a><br>\r\n                        <a><small class=\"text-muted\">- Si no logras conectarte, consulta con el Administrador si el servidor se encuentra \r\n                                en funcionamiento.\r\n                        </small></a>\r\n                    </div>\r\n                </form>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <a class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"actualizarIPServer(frmIPS)\">Ingresar IP</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Confirmar IP Ingresado y Funcionando -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correctoIP\">\r\n                    IP Correcta. Se ha conectado con el servidor.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"errorIP\">\r\n                    No ha sido posible conectarse con el servidor. Verifica que la IP introducida es correcta.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/metricas/metricas.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/metricas/metricas.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<!--Contenedor Contenido Pagina-->\n<div class=\"mb-5 container py-3\">\n\n    <!-- Metricas -->\n    <div class=\"container m-auto pb-2 bg-success rounded-top\">\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center\">Metricas</h1>\n    </div>\n    <!--Contenedor busqueda-->\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\n        <div>\n            <div class=\"contenedor py-3\">\n                <form>\n                    <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1ACT\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1ACT-tab\">\n                        <div class=\"form-group\">\n                            <h4 style=\"cursor:context-menu\" class=\"pb-1 pt-3 text-center text-white font-weight-bold\">Buscar Actividades</h4>\n                            <!--Buscar Actividad-->\n                            <div>\n                                <div class=\"contenedor py-3\">\n                                    <form #frmBuscarActividad=\"ngForm\" (ngSubmit)=\"saveDataActividad(frmBuscarActvidad)\">\n                                        <div class=\"form-group\">\n                                            <!--Barra busqueda-->\n                                            <br>\n                                            <div class=\"form-inline\">\n                                                <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaActividad\"\n                                                    placeholder=\"Busqueda por nombre de la Actividad\" [(ngModel)]=\"nombreActividadSelected\"\n                                                    name=\"nombreActividadSelected\">\n                                            </div>\n                                        </div>\n                                        <label for=\"inputState\" class=\"text-white\">Filtros:</label>\n                                        <div class=\"form-row pb-3\">\n                                            <!--Filtros-->\n                                            <div class=\"form-group col-3\">\n                                                <label for=\"inputMateriaA\" class=\"text-white\">Materia</label>\n                                                <select [(ngModel)]=\"materiaSelectedA\" id=\"inputMateriaA\" name=\"materiaA\"\n                                                    class=\"form-control\" ngModel required>\n                                                    <option selected></option>\n                                                    <option *ngFor=\"let mater of materias\" [value]=\"mater.id_materia\">\n                                                        {{mater.nombre_materia}}</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"form-group col-3\">\n                                                <label for=\"inputGradoA\" class=\"text-white\">Grado</label>\n                                                <select [(ngModel)]=\"gradoSelectedA\" id=\"inputGradoA\" name=\"gradoA\" class=\"form-control\"\n                                                    ngModel required>\n                                                    <option selected></option>\n                                                    <option *ngFor=\"let grad of grados\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <!--Filtro Competencia-->\n                                        <div class=\"form-group col px-0\">\n                                            <label for=\"inputDocenteA\" class=\"text-white\">Buscador Competencia</label>\n                                            <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia\" placeholder=\"Ingrese palabra clave\" [(ngModel)]=\"nombreCompetenciaSelected\"\n                                                name=\"inputBusquedaCompetencia\">\n                                        </div>\n                                        <div class=\"form-row pb-3\">\n                                            <div class=\"form-group col\">\n                                                <label for=\"inputDocenteA\" class=\"text-white\">Competencia</label>\n                                                <select [(ngModel)]=\"competenciaSelectedA\" id=\"inputCompetenciaA\" name=\"competenciaA\" class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();'ngModel required>\n                                                    <option class=\"col-auto px-0\" selected></option>\n                                                    <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\n                                                    <option class=\"col-auto px-0\" *ngFor=\"let compe of competencias | filterCompetencia: nombreCompetenciaSelected:materiaSelectedA:gradoSelectedA\"\n                                                        [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\n                                                    </option>\n                                                </select>\n                                                <!--el valor seleccionado es {{competenciaSelectedA}}-->\n                                            </div>\n                                        </div>\n                                        <!--Tabla de Resultados-->\n                                        <label for=\"inputState\" class=\"text-white\">Resultados:</label>\n                                        <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\n                                            style=\"width: 95%; height: 450px\">\n                                            <!--Resultado-->\n                                            <div class=\"row-1\"\n                                                *ngFor=\"let actividad of actividadVisualizar | filterActividad: nombreActividadSelected:materiaSelectedA:gradoSelectedA:id_docenteAuth:competenciaSelectedA\">\n                                                <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                                    <div class=\"card-footer p-2 bg-warning rounded-top\">\n                                                        <h5 class=\"card-title m-1\">{{actividad.titulo_actividad}}</h5>\n                                                    </div>\n                                                    <div class=\"row no-gutters border border-top-0 border-secondary\">\n                                                        <div class=\"col\" style=\"max-width: 840px;\">\n                                                            <div class=\"card-body p-2\">\n                                                                <p class=\"card-text \">Descripcion: {{actividad.descripcion_actividad}}.</p>\n                                                                <div>\n                                                                    <p class=\"card-text\"><small class=\"text-muted\">Materia: {{actividad.materia}}</small></p>\n                                                                </div>\n                                                                <div>\n                                                                    <p class=\"card-text\"><small class=\"text-muted\">Grado: {{actividad.id_grado}}</small></p>\n                                                                </div>\n                                                                <div>\n                                                                    <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{actividad.competencia}}</small></p>\n                                                                </div>\n                                                                <div>\n                                                                    <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{actividad.docente}}</small></p>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <!--Boton ver Metricas Actividad-->\n                                                    <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\n                                                        <a class=\"btn bg-success font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\" (click)=\"getActividadinModal(actividad)\">Ver Metricas</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <hr class=\"style10\">\n        <br>\n    </div>\n\n    <!-- Modal Actividad Seleccionada -->\n    <div class=\"modal fade col\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" style=\"overflow-y: scroll;\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content \">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title text-center my-0\" id=\"myModalLabel\">Actividad Seleccionada</h4>\n                    <button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body bg-light\">\n                    <div class=\"\">\n                        <div>\n                            <h3 style=\"cursor:context-menu\" class=\"text-center bg-warning py-4\">{{ActividadService.selectedActividad.titulo_actividad}}</h3>\n                        </div>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"row no-gutters\">\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <div>\n                                                <h5 class=\"\">Descripcion: {{ActividadService.selectedActividad.descripcion_actividad}}</h5>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{ActividadService.selectedActividad.materia}}</small>\n                                                </p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{ActividadService.selectedActividad.id_grado}}</small>\n                                                </p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{ActividadService.selectedActividad.competencia}}</small></p>\n                                            </div>\n                                            <div>\n                                                <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{ActividadService.selectedActividad.docente}}</small>\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style10\">\n\n                        <!--Metricas Globales Actividad-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Metricas Actividad:</h5>\n                        </div>\n                        <p class=\"card-text mb-1 ml-2\">Estudiantes participando en la Actividad: {{metricasActividad.inicio}} </p>\n                        <div class=\"row-1\">\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                                <div class=\"row no-gutters \">\n                                    <div class=\"col\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <p class=\"card-text mb-1 ml-2\">Acciones</p>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Estudiantes que vieron el Contenido: </small></a>\n                                                <a> {{metricasActividad.contenido}}</a>\n                                            </div>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Estudiantes que hicieron el Quiz: </small></a>\n                                                <a> {{metricasActividad.quiz}}</a>\n                                            </div>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Estudiantes que hicieron el Taller: </small></a>\n                                                <a> {{metricasActividad.taller}}</a>\n                                            </div>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Estudiantes que hicieron la Evaluación: </small></a>\n                                                <a> {{metricasActividad.evaluacion}}</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col my-auto\" style=\"max-width: 840px;\">\n                                        <div class=\"card-body p-2\">\n                                            <p class=\"card-text mb-1 ml-2\">Notas</p>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Promedio Nota Quiz de todos los estudiantes: </small></a>\n                                                <a> {{metricasActividad.nota_quiz}}</a>\n                                            </div>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Promedio Nota Evaluacion de todos los estudiantes: </small></a>\n                                                <a> {{metricasActividad.nota_evaluacion}}</a>\n                                            </div>\n                                            <div>\n                                                <a class=\"card-text\"><small class=\"text-muted\">Promedio Nota Final de todos los estudiantes: </small></a>\n                                                <a> {{metricasActividad.nota_final}}</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <hr class=\"style10\">\n\n                        <!--Estudiantes con Metricas-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Estudiantes:</h5>\n                        </div>\n                        <!--Buscar Esdtudiante-->\n                        <label class=\"pt-2\">Buscador:</label>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaEstudiante\" placeholder=\"Nombre / Apellido\" [(ngModel)]=\"palabraClaveESelected\"\n                                name=\"palabraClaveESelected\">\n                        </div>\n                        <div class=\"form-group col-4\">\n                            <label for=\"inputOption\" class=\"\">Estudiantes que:</label>\n                            <select [(ngModel)]=\"optionSelected\" id=\"inputOption\" name=\"optionSelected\" class=\"form-control\" ngModel required>\n                                <option selected></option>\n                                <option *ngFor=\"let option of options\" style=\"overflow-y: scroll;\" [value]=\"option.valor\">{{option.opcion}}</option>\n                            </select>\n                        </div>\n\n                        <!--Resultado Estudiantes-->\n                        <div class=\"pt-4 row mx-auto\">\n                            <table class=\"mx-auto text-white m-auto rounded table-secondary table-striped table-wrapper-scroll-y my-custom-scrollbar\"\n                                style=\"height: 256px;\">\n                                <thead class=\"bg-secondary\">\n                                    <th class=\"pl-3 pr-5 py-2 text-white\">Nombre Estudiante</th>\n                                    <th class=\"pl-4 pr-4 py-2 text-white text-center\">Accion</th>\n                                </thead>\n                                <tbody class=\"bg-light\">\n                                    <tr mdbTableCol *ngFor=\"let metrica of metricasVisualizar | filterEstudianteMetricas: palabraClaveESelected:optionSelected\">\n                                        <td class=\"pl-3 pr-5 py-2 text-dark\">{{ metrica.estudiante }}</td>\n                                        <td class=\"pl-4 pr-4 py-2\"> \n                                            <a class=\"btn bg-success py-0 px-1 text-dark font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\" (click)=\"getAvanceEstudianteModal(metrica)\">ver Metricas</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <hr class=\"style10\">\n\n                        <!--Opcion de Reinicio de Actividad-->\n                        <div>\n                            <h5 style=\"cursor:context-menu\" class=\"\">Reinicio de Actividad:</h5>\n                        </div>\n                        <label class=\"pt-2\">Al reiniciar la actividad, los datos actuales de los estudiantes que se han almacenado\n                            ya no seran tomados encuentas en esta Actividad para generar sus Metricas. Las nuevas Metricas de la\n                            actividad seran generadas con los nuevos datos que se obtengan en adelante de los actuales estudiantes\n                            o de los nuevos estudiantes.\n                        </label>\n                        <!--Boton Reiniciar Actividad-->\n                        <div class=\"row pt-3 justify-content-md-center no-gutters bg-light\">\n                            <button type=\"button\" class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mimodalejemplo3\">Reiniciar Actividad</button>\n                        </div>\n                        <hr class=\"style10\">\n\n                    </div>  \n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light\">\n                    <button type=\"button\" class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal Metricas Estudiante -->\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Metricas Estudiante</h4>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body bg-light\">\n                    <!--Metricas Globales Actividad-->\n                    <div class=\"pb-2\">\n                        <h5 style=\"cursor:context-menu\" class=\"\">Estudiante: {{ metricaVisualizarToSave.estudiante }}</h5>\n                    </div>\n                    <div class=\"pb-1 row\">\n                        <h6 style=\"cursor:context-menu\" class=\"col-3\">Progreso Actividad: </h6>\n                    </div>\n                    <div class=\"progress\">\n                            <div *ngIf=\"bar20\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated \" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:20%\">\n                                20%\n                            </div>\n                            <div *ngIf=\"bar40\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated \" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n                                40%\n                            </div>\n                            <div *ngIf=\"bar60\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated \" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n                                60%\n                            </div>\n                            <div *ngIf=\"bar80\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated \" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\n                                80%\n                            </div>\n                            <div *ngIf=\"bar100\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated \" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n                                100%\n                            </div>\n                        </div>\n                    <div class=\"row-1\">\n                        <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\n                            <div class=\"row no-gutters \">\n                                <div class=\"col\" style=\"max-width: 840px;\">\n                                    <div class=\"card-body p-2\">\n                                        <p class=\"card-text mb-1 ml-2\">Acciones</p>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">El estudiante inico la Actividad: </small></a>\n                                            <a> {{metricaVisualizarToSave.inicio}}</a>\n                                        </div>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">El estudiante vio el Contenido: </small></a>\n                                            <a> {{metricaVisualizarToSave.contenido}}</a>\n                                        </div>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">El estudiante hizo el Quiz: </small></a>\n                                            <a> {{metricaVisualizarToSave.quiz}}</a>\n                                        </div>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">El estudiante hizo el Taller:\n                                                </small></a>\n                                            <a> {{metricaVisualizarToSave.taller}}</a>\n                                        </div>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">El estudiante hizo la Evaluación: </small></a>\n                                            <a> {{metricaVisualizarToSave.evaluacion}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col my-auto\" style=\"max-width: 840px;\">\n                                    <div class=\"card-body p-2\">\n                                        <p class=\"card-text mb-1 ml-2\">Notas</p>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">Nota Quiz del estudiante: </small></a>\n                                            <a> {{metricaVisualizarToSave.nota_quiz}}</a>\n                                        </div>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">Nota Evaluacion del estudiante: </small></a>\n                                            <a> {{metricaVisualizarToSave.nota_evaluacion}}</a>\n                                        </div>\n                                        <div>\n                                            <a class=\"card-text\"><small class=\"text-muted\">Nota Final del estudiante: </small></a>\n                                            <a> {{metricaVisualizarToSave.nota_final}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--Modal Confirmar Reiniciar Actividad -->\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-light\">\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Confirmar Acción</h5>\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    Para reiniciar la Actividad presione Aceptar, de lo contrario presione X\n                    para cancelar.\n                </div>\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\"\n                        (click)=\"reiniciarActividad()\">Aceptar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modificar-actividad/modificar-actividad.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modificar-actividad/modificar-actividad.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 contenedor py-3\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-warning rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Modificar Actividad</h1>\r\n    </div>\r\n\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Tabs-->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"mt-3\">\r\n                    <div class=\"card-header tab-card-header\">\r\n                        <!--Opcion Tab-->\r\n                        <nav>\r\n                            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                                <a class=\"col nav-item nav-link text-center active font-weight-bold text-dark\" id=\"nav-Pregunta1-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta1\" role=\"tab\" aria-controls=\"nav-Pregunta1\"\r\n                                    aria-selected=\"true\">Realizar Modificaciones a una Actividad</a>\r\n                                <a class=\"col nav-item nav-link text-center font-weight-bold text-dark\" id=\"nav-Pregunta2-tab\" data-toggle=\"tab\"\r\n                                    href=\"#nav-Pregunta2\" role=\"tab\" aria-controls=\"nav-Pregunta2\"\r\n                                    aria-selected=\"false\">Activar Secciones de una Actividad</a>\r\n                            </div>\r\n                        </nav>\r\n        \r\n                        <!--Tabs Resultados-->\r\n                        <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                            <br>\r\n\r\n                            <!--Tab 1-->\r\n                            <div class=\"tab-pane fade show active\" id=\"nav-Pregunta1\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta1-tab\">\r\n                                <!--Buscar Actividad-->\r\n                                <div>\r\n                                    <div class=\"contenedor py-3\">\r\n                                        <form #frmBuscarActividad=\"ngForm\" (ngSubmit)=\"saveDataActividad(frmBuscarActvidad)\">\r\n                                            <div class=\"form-group\">\r\n                                                <!--Barra busqueda-->\r\n                                                <br>\r\n                                                <label for=\"inputNombreActividad\" class=\"text-white\">Busqueda de Actividad</label>\r\n                                                <div class=\"form-inline\">\r\n                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaActividad\"\r\n                                                        placeholder=\"Busqueda por nombre de la Actividad\" [(ngModel)]=\"nombreActividadSelected\"\r\n                                                        name=\"inputBusquedaActividad\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                                            <div class=\"form-row pb-3\">\r\n                                                <!--Filtros-->\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputMateriaA\" class=\"text-white\">Materia</label>\r\n                                                    <select [(ngModel)]=\"materiaSelectedA\" id=\"inputMateriaA\" name=\"materiaA\" class=\"form-control\"\r\n                                                        ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}\r\n                                                        </option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputGradoA\" class=\"text-white\">Grado</label>\r\n                                                    <select [(ngModel)]=\"gradoSelectedA\" id=\"inputGradoA\" name=\"gradoA\" class=\"form-control\" ngModel\r\n                                                        required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputDocenteA\" class=\"text-white\">Profesor</label>\r\n                                                    <select [(ngModel)]=\"docenteSelectedA\" id=\"inputDocenteA\" name=\"DocenteA\" class=\"form-control\"\r\n                                                        ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">\r\n                                                            {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Filtro Competencia-->\r\n                                            <div class=\"form-group col px-0\">\r\n                                                <label for=\"inputDocenteA\" class=\"text-white\">Buscador Competencia</label>\r\n                                                <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia\"\r\n                                                    placeholder=\"Ingrese palabra clave\" [(ngModel)]=\"nombreCompetenciaSelected\"\r\n                                                    name=\"inputBusquedaCompetencia\">\r\n                                            </div>\r\n                                            <div class=\"form-row pb-3\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputDocenteA\" class=\"text-white\">Competencia</label>\r\n                                                    <select [(ngModel)]=\"competenciaSelectedA\" id=\"inputCompetenciaA\" name=\"competenciaA\"\r\n                                                        class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }'\r\n                                                        onblur='this.size=1;' onchange='this.size=1; this.blur();' ngModel required>\r\n                                                        <option class=\"col-auto px-0\" selected></option>\r\n                                                        <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\r\n                                                        <option class=\"col-auto px-0\"\r\n                                                            *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelected:materiaSelectedA:gradoSelectedA\"\r\n                                                            [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\r\n                                                        </option>\r\n                                                    </select>\r\n                                                    <!--el valor seleccionado es {{competenciaSelectedA}}-->\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Tabla de Resultados-->\r\n                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                style=\"width: 95%; height: 450px\">\r\n                                                <!--Resultado-->\r\n                                                <div class=\"row-1\"\r\n                                                    *ngFor=\"let actividad of actividadVisualizar | filterActividad: nombreActividadSelected:materiaSelectedA:gradoSelectedA:docenteSelectedA:competenciaSelectedA\">\r\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                        <div class=\"card-footer p-2 bg-warning rounded-top\">\r\n                                                            <h5 class=\"card-title m-1\">{{actividad.titulo_actividad}}</h5>\r\n                                                        </div>\r\n                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                            <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                                <div class=\"card-body p-2\">\r\n                                                                    <p class=\"card-text \">Descripcion: {{actividad.descripcion_actividad}}.</p>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia:\r\n                                                                                {{actividad.materia}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado:\r\n                                                                                {{actividad.id_grado}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Competencia:\r\n                                                                                {{actividad.competencia}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Profesor:\r\n                                                                                {{actividad.docente}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Autor:\r\n                                                                                {{actividad.autor}}</small></p>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo2\"\r\n                                                                (click)=\"getActividadinForm(actividad)\">Seleccionar Actividad</a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                                <hr class=\"style1\">\r\n                            \r\n                                <!--Modificar Actividad-->\r\n                                <div class=\"container container pt-1 bg-secondary rounded-bottom\">\r\n                            \r\n                                    <!--Actividad-->\r\n                                    <div>\r\n                                        <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Informacion de la Actividad</h3>\r\n                                        <div class=\"contenedor py-3\">\r\n                                            <!--Informacion de la Actividad-->\r\n                                            <form #frmModificarActividad=\"ngForm\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"inputNombreActividad\" class=\"text-white \">Nombre de la Actividad</label>\r\n                                                    <input type=\"text\" name=\"titulo_actividad\" class=\"form-control col-md-8\"\r\n                                                        id=\"inputNombreActividad\" placeholder=\"Nombre Actividad\" required\r\n                                                        [(ngModel)]=\"ActividadService.selectedActividad.titulo_actividad\">\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"inputDescripcionActividad\" class=\"text-white\">Descripcion de la Actividad</label>\r\n                                                    <textarea class=\"form-control\" name=\"descripcion_actividad\" id=\"inputDescripcionActividad\"\r\n                                                        rows=\"4\" placeholder=\"Descripcion ...\" required\r\n                                                        [(ngModel)]=\"ActividadService.selectedActividad.descripcion_actividad\"></textarea>\r\n                                                </div>\r\n                                                <!-- Selectores -->\r\n                                                <div class=\"form-row\">\r\n                                                    <div class=\"form-group col-md-4\">\r\n                                                        <label for=\"inputMateriaActividad\" class=\"text-white\">Materia</label>\r\n                                                        <select name=\"id_materia\" id=\"inputMateriaActividad\" class=\"form-control\" ngModel required\r\n                                                            [(ngModel)]=\"materiaSelectedAM\">\r\n                                                            <!--<option selected [value]='0'>- Materia -</option>-->\r\n                                                            <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">\r\n                                                                {{mater.nombre_materia}}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"form-group col-md-4\">\r\n                                                        <label for=\"inputGradoActivdad\" class=\"text-white\">Grado</label>\r\n                                                        <select name=\"id_grado\" id=\"inputGradoActivdad\" class=\"form-control\" ngModel required\r\n                                                            [(ngModel)]=\"gradoSelecteAM\">\r\n                                                            <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"form-group col-md-4\">\r\n                                                        <label for=\"inputMiMateriaActivdad\" class=\"text-white\">Mis Materias</label>\r\n                                                        <select [(ngModel)]=\"miMateriaSelectedA\" name=\"id_materiaActiva\" id=\"inputMiMateriaActivdad\" class=\"form-control\" ngModel required>\r\n                                                            <option *ngFor=\"let ma of materiaActiva | filterMiMaterias: materiaSelectedAM:gradoSelecteAM:id_docenteAuth\" \r\n                                                                [value]=\"ma.id_materiaActiva\">{{ma.nombre_materiaActiva}}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!--Filtro Competencia-->\r\n                                                <div class=\"form-group col px-0\">\r\n                                                    <label for=\"inputTextoBusquedaCompetenciaA\" class=\"text-white\">Buscador Competencia</label>\r\n                                                    <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetenciaA\" placeholder=\"Ingrese palabra clave\" \r\n                                                        [(ngModel)]=\"nombreCompetenciaSelectedAct\" name=\"nombreCompetenciaSelectedA\">\r\n                                                </div>\r\n                                                <div class=\"form-row pb-3\">\r\n                                                    <div class=\"form-group col\">\r\n                                                        <label for=\"inputDocenteIA\" class=\"text-white\">Competencia</label>\r\n                                                        <select id=\"inputCompetenciaIA\" name=\"id_competencia\" class=\"form-control\" ngModel required onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();' [(ngModel)]=\"ActividadService.selectedActividad.id_competencia\">\r\n                                                            <option class=\"col-auto px-0\" selected></option>\r\n                                                            <option class=\"col-auto px-0\" [value]=0>Sin Competencia</option>\r\n                                                            <option class=\"col-auto px-0\" *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelectedAct:ActividadService.selectedActividad.id_materia:ActividadService.selectedActividad.id_grado\"\r\n                                                                [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\r\n                                                            </option>\r\n                                                        </select>\r\n                                                        <!--el valor seleccionado es {{ActividadService.selectedActividad.id_competencia}}-->\r\n                                                    </div>\r\n                                                </div>\r\n                                                <hr class=\"style1\">\r\n                            \r\n                                                <!--Modificacion Contenido de la Actividad-->\r\n                                                <div>\r\n                                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Contenido de la Actividad\r\n                                                    </h3>\r\n                                                    <div class=\"contenedor py-3\">\r\n                                                        <!--Contenido Original-->\r\n                                                        <label for=\"inputState\" class=\"text-white\">Contenido original de la Actividad</label>\r\n                                                        <div class=\"col container p-4 my bg-light table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                            style=\"width: 95%; height: 95%\">\r\n                                                            <!-- -->\r\n                                                            <div class=\"row-1\">\r\n                                                                <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                                    <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                                        <h5 class=\"card-title m-1\">{{contenidoAct.nombre_CREA}}</h5>\r\n                                                                    </div>\r\n                                                                    <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                                        <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                                            <div class=\"card-body p-2\">\r\n                                                                                <p class=\"card-text \">Descripcion: {{contenidoAct.descripcion_CREA}}\r\n                                                                                </p>\r\n                                                                                <div>\r\n                                                                                    <p class=\"card-text\"><small class=\"text-muted\">Materia: {{contenidoAct.materia}}</small></p>\r\n                                                                                </div>\r\n                                                                                <div>\r\n                                                                                    <p class=\"card-text\"><small class=\"text-muted\">Grado: {{contenidoAct.id_grado}}</small></p>\r\n                                                                                </div>\r\n                                                                                <div>\r\n                                                                                    <p class=\"card-text\"><small class=\"text-muted\">Tipo de contenido: {{contenidoAct.nombre_tipo_CREA}}</small></p>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <form #frmBuscarContenido=\"ngForm\" (ngSubmit)=\"onBuscarContenido(frmBorrarContenido)\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <!--Barra busqueda-->\r\n                                                                <label for=\"inputNombreActividad\" class=\"text-white\">Busqueda de Contenido</label>\r\n                                                                <div class=\"form-inline\">\r\n                                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusqueda\"\r\n                                                                        placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreCREASelected\"\r\n                                                                        name=\"inputBusquedaContenido\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <!--Filtros-->\r\n                                                            <label for=\"inputState\" class=\"text-white\">Filtros:</label>\r\n                                                            <div class=\"form-row pb-3\">\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputMateria\" class=\"text-white\">Materia</label>\r\n                                                                    <select [(ngModel)]=\"materiaSelected\" id=\"inputMateria\" name=\"materia\"\r\n                                                                        class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">\r\n                                                                            {{mater.nombre_materia}}\r\n                                                                        </option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                                                                    <select [(ngModel)]=\"gradoSelected\" id=\"inputGrado\" name=\"grado\"\r\n                                                                        class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">\r\n                                                                            {{grad.nombre_grado}}\r\n                                                                        </option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputDocente\" class=\"text-white\">Profesor</label>\r\n                                                                    <select [(ngModel)]=\"docenteSelected\" id=\"inputDocente\" name=\"Docente\"\r\n                                                                        class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">\r\n                                                                            {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputType\" class=\"text-white\">Tipo de Contenido</label>\r\n                                                                    <select [(ngModel)]=\"tipoContenidoSelected\" id=\"inputType\" name=\"tipoContenido\"\r\n                                                                        class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let tipCon of tipoContenido\"\r\n                                                                            [value]=\"tipCon.id_tipoContenido\">\r\n                                                                            {{tipCon.nombre_tipoContenido}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                            </div>\r\n                            \r\n                                                            <!--Tabla de Resultados-->\r\n                                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                                style=\"width: 95%; height: 450px\">\r\n                                                                <!--Resultado-->\r\n                                                                <div class=\"row-1\"\r\n                                                                    *ngFor=\"let contenidoREA of contenidoVisualizar | filterContent: nombreCREASelectedC:materiaSelectedC:gradoSelectedC:docenteSelectedC:tipoContenidoSelectedC:ID_TipoContenido_Taller\">\r\n                                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                                        <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                                            <h5 class=\"card-title m-1\">{{contenidoREA.nombre_CREA}}</h5>\r\n                                                                        </div>\r\n                                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                                            <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                                                <div class=\"card-body p-2\">\r\n                                                                                    <p class=\"card-text \">Descripcion:\r\n                                                                                        {{contenidoREA.descripcion_CREA}}.</p>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia:\r\n                                                                                                {{contenidoREA.materia}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado:\r\n                                                                                                {{contenidoREA.id_grado}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Tipo de\r\n                                                                                                contenido: {{contenidoREA.nombre_tipo_CREA}}</small>\r\n                                                                                        </p>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <!--Boton Adjuntar Contenido-->\r\n                                                                        <div\r\n                                                                            class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                                            <a class=\"btn btn-primary\" data-toggle=\"modal\"\r\n                                                                                data-target=\"#mimodalejemplo2\"\r\n                                                                                (click)=\"saveDataContent(contenidoREA)\">Adjuntar</a>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <hr class=\"style1\">\r\n                            \r\n                                                <!--Modificacion del Quiz-->\r\n                                                <div>\r\n                                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Quiz del Contenido</h3>\r\n                                                    <div class=\"contenedor py-3\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <label for=\"inputDescripcionQuiz\" class=\"text-white\">Descripcion del Quiz</label>\r\n                                                            <textarea class=\"form-control\" name=\"descripcion_test\" id=\"inputDescripcionQuiz\"\r\n                                                                rows=\"4\" placeholder=\"Descripcion ...\" required\r\n                                                                [(ngModel)]=\"ActividadService.selectedActividad.descripcion_test\"></textarea>\r\n                                                        </div>\r\n                                                        <div class=\"container\">\r\n                                                            <!--Tabs-->\r\n                                                            <div>\r\n                                                                <label for=\"tituloPreguntasQuiz\" class=\"text-white\">Preguntas del Quiz</label>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col\">\r\n                                                                    <div class=\"card mt-3 tab-card\">\r\n                                                                        <div class=\"card-header tab-card-header\">\r\n                                                                            <!--Opcion Tab-->\r\n                                                                            <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\r\n                                                                                <li class=\"nav-item col\">\r\n                                                                                    <a class=\"nav-link text-center\" id=\"one-tab\" data-toggle=\"tab\"\r\n                                                                                        href=\"#pregunta1\" role=\"tab\" aria-controls=\"pregunta1\"\r\n                                                                                        aria-selected=\"true\">Pregunta 1</a>\r\n                                                                                </li>\r\n                                                                                <li class=\"nav-item col\">\r\n                                                                                    <a class=\"nav-link text-center\" id=\"two-tab\" data-toggle=\"tab\"\r\n                                                                                        href=\"#pregunta2\" role=\"tab\" aria-controls=\"pregunta2\"\r\n                                                                                        aria-selected=\"false\">Pregunta 2</a>\r\n                                                                                </li>\r\n                                                                                <li class=\"nav-item col\">\r\n                                                                                    <a class=\"nav-link text-center\" id=\"three-tab\" data-toggle=\"tab\"\r\n                                                                                        href=\"#pregunta3\" role=\"tab\" aria-controls=\"pregunta3\"\r\n                                                                                        aria-selected=\"false\">Pregunta 3</a>\r\n                                                                                </li>\r\n                                                                            </ul>\r\n                                                                        </div>\r\n                                                                        <div class=\"tab-content\" id=\"myTabContent\">\r\n                                                                            <!--Pregunta 1 Tabs-->\r\n                                                                            <div class=\"tab-pane fade show active p-3\" id=\"pregunta1\"\r\n                                                                                role=\"tabpanel\" aria-labelledby=\"one-tab\">\r\n                                                                                <div class=\"form-group\">\r\n                                                                                    <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\r\n                                                                                    <label for=\"inputPregunta1\" class=\"text-dark\">Escribir\r\n                                                                                        pregunta</label>\r\n                                                                                    <textarea class=\"form-control\" name=\"Q1\" id=\"inputPregunta1\"\r\n                                                                                        rows=\"3\" required\r\n                                                                                        [(ngModel)]=\"ActividadService.selectedActividad.Q1\"\r\n                                                                                        placeholder=\"Pregunta ...\"></textarea>\r\n                                                                                </div>\r\n                                                                                <label for=\"tituloCuatroRespuestas\" class=\"text-dark\">Escribir las\r\n                                                                                    cuatro posibles respuestas</label>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta1A\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A11\"\r\n                                                                                            id=\"inputRespuesta1A\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A11\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta1B\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A12\"\r\n                                                                                            id=\"inputRespuesta1B\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A12\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta1C\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A13\"\r\n                                                                                            id=\"inputRespuesta1C\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A13\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta1D\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A14\"\r\n                                                                                            id=\"inputRespuesta1D\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A14\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <label for=\"inputSelectPreguntaCorrecta\"\r\n                                                                                    class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                                                <div class=\"form-grup row-1\">\r\n                                                                                    <div class=\"form-group col-2\">\r\n                                                                                        <select [(ngModel)]=\"ActividadService.selectedActividad.CA1\"\r\n                                                                                            name=\"CA1\" id=\"inputRespuestaCorrecta1\"\r\n                                                                                            class=\"form-control\" ngModel required>\r\n                                                                                            <option [value]=1>A</option>\r\n                                                                                            <option [value]=2>B</option>\r\n                                                                                            <option [value]=3>C</option>\r\n                                                                                            <option [value]=4>D</option>\r\n                                                                                        </select>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                                            </div>\r\n                                                                            <!--Pregunta 2 Tabs-->\r\n                                                                            <div class=\"tab-pane fade p-3\" id=\"pregunta2\" role=\"tabpanel\"\r\n                                                                                aria-labelledby=\"two-tab\">\r\n                                                                                <div class=\"form-group\">\r\n                                                                                    <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\r\n                                                                                    <label for=\"inputPregunta2\" class=\"text-dark\">Escribir\r\n                                                                                        pregunta</label>\r\n                                                                                    <textarea class=\"form-control\" name=\"Q2\" id=\"inputPregunta2\"\r\n                                                                                        rows=\"3\" required\r\n                                                                                        [(ngModel)]=\"ActividadService.selectedActividad.Q2\"\r\n                                                                                        placeholder=\"Pregunta ...\"></textarea>\r\n                                                                                </div>\r\n                                                                                <label for=\"tituloCuatroRespuestas\" class=\"text-dark\">Escribir las\r\n                                                                                    cuatro posibles\r\n                                                                                    respuestas</label>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta2A\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A21\"\r\n                                                                                            id=\"inputRespuesta2A\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A21\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta2B\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A22\"\r\n                                                                                            id=\"inputRespuesta2B\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A22\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta2C\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A23\"\r\n                                                                                            id=\"inputRespuesta2C\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A23\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta2D\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A24\"\r\n                                                                                            id=\"inputRespuesta2D\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A24\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <label for=\"inputSelectPreguntaCorrecta\"\r\n                                                                                    class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                                                <div class=\"form-grup row-1\">\r\n                                                                                    <div class=\"form-group col-2\">\r\n                                                                                        <select [(ngModel)]=\"ActividadService.selectedActividad.CA2\"\r\n                                                                                            name=\"CA2\" id=\"inputRespuestaCorrecta2\"\r\n                                                                                            class=\"form-control\" ngModel required>\r\n                                                                                            <option [value]=1>A</option>\r\n                                                                                            <option [value]=2>B</option>\r\n                                                                                            <option [value]=3>C</option>\r\n                                                                                            <option [value]=4>D</option>\r\n                                                                                        </select>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                                            </div>\r\n                                                                            <div class=\"tab-pane fade p-3\" id=\"pregunta3\" role=\"tabpanel\"\r\n                                                                                aria-labelledby=\"three-tab\">\r\n                                                                                <div class=\"form-group\">\r\n                                                                                    <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\r\n                                                                                    <label for=\"inputPregunta3\" class=\"text-dark\">Escribir\r\n                                                                                        pregunta</label>\r\n                                                                                    <textarea class=\"form-control\" name=\"Q3\" id=\"inputPregunta3\"\r\n                                                                                        rows=\"3\" required\r\n                                                                                        [(ngModel)]=\"ActividadService.selectedActividad.Q3\"\r\n                                                                                        placeholder=\"Pregunta ...\"></textarea>\r\n                                                                                </div>\r\n                                                                                <label for=\"tituloCuatroRespuestas\" class=\"text-dark\">Escribir las\r\n                                                                                    cuatro posibles respuestas</label>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta3A\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A31\"\r\n                                                                                            id=\"inputRespuesta3A\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A31\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta3B\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A32\"\r\n                                                                                            id=\"inputRespuesta3B\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A32\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta3C\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A33\"\r\n                                                                                            id=\"inputRespuesta3C\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A33\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuesta3D\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"A34\"\r\n                                                                                            id=\"inputRespuesta3D\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.A34\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <label for=\"inputSelectPreguntaCorrecta\"\r\n                                                                                    class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                                                <div class=\"form-grup row-1\">\r\n                                                                                    <div class=\"form-group col-2\">\r\n                                                                                        <select [(ngModel)]=\"ActividadService.selectedActividad.CA3\"\r\n                                                                                            name=\"CA3\" id=\"inputRespuestaCorrecta3\"\r\n                                                                                            class=\"form-control\" ngModel required>\r\n                                                                                            <option [value]=1>A</option>\r\n                                                                                            <option [value]=2>B</option>\r\n                                                                                            <option [value]=3>C</option>\r\n                                                                                            <option [value]=4>D</option>\r\n                                                                                        </select>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <hr class=\"style1\">\r\n                                                <br>\r\n                            \r\n                                                <!--Modificacion Taller de la Actividad-->\r\n                                                <div>\r\n                                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Taller de la Actividad</h3>\r\n                                                    <div class=\"contenedor py-3\">\r\n                                                        <!--Taller Original-->\r\n                                                        <label for=\"inputState\" class=\"text-white\">Taller original de la Actividad</label>\r\n                                                        <div class=\"col container p-4 my bg-light table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                            style=\"width: 95%; height: 95%\">\r\n                                                            <!-- -->\r\n                                                            <div class=\"row-1\">\r\n                                                                <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                                    <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                                        <h5 class=\"card-title m-1\">{{tallerAct.nombre_CREA}}</h5>\r\n                                                                    </div>\r\n                                                                    <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                                        <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                                            <div class=\"card-body p-2\">\r\n                                                                                <p class=\"card-text \">Descripcion: {{tallerAct.descripcion_CREA}}\r\n                                                                                </p>\r\n                                                                                <div>\r\n                                                                                    <p class=\"card-text\"><small class=\"text-muted\">Materia:\r\n                                                                                            {{tallerAct.materia}}</small></p>\r\n                                                                                </div>\r\n                                                                                <div>\r\n                                                                                    <p class=\"card-text\"><small class=\"text-muted\">Grado:\r\n                                                                                            {{tallerAct.id_grado}}</small></p>\r\n                                                                                </div>\r\n                                                                                <div>\r\n                                                                                    <p class=\"card-text\"><small class=\"text-muted\">Tipo de\r\n                                                                                            contenido: {{tallerAct.nombre_tipo_CREA}}</small></p>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <form #frmBuscarTaller=\"ngForm\">\r\n                                                            <div class=\"form-group\">\r\n                                                                <!--Barra busqueda-->\r\n                                                                <label for=\"inputNombreTaller\" class=\"text-white\">Busqueda del Taller</label>\r\n                                                                <div class=\"form-inline\">\r\n                                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaTaller\"\r\n                                                                        placeholder=\"Busqueda por nombre\" [(ngModel)]=\"nombreTallerSelected\"\r\n                                                                        name=\"inputBusquedaTaller\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <!--Filtros-->\r\n                                                            <label for=\"inputFiltrosTaller\" class=\"text-white\">Filtros:</label>\r\n                                                            <div class=\"form-row pb-3\">\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputMateriaTaller\" class=\"text-white\">Materia</label>\r\n                                                                    <select [(ngModel)]=\"materiaTallerSelected\" id=\"inputMateriaTaller\"\r\n                                                                        name=\"materiaTaller\" class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.nombre_materia\">\r\n                                                                            {{mater.nombre_materia}}\r\n                                                                        </option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputGradoTaller\" class=\"text-white\">Grado</label>\r\n                                                                    <select [(ngModel)]=\"gradoTallerSelected\" id=\"inputGradoTaller\"\r\n                                                                        name=\"gradoTaller\" class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">\r\n                                                                            {{grad.nombre_grado}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"form-group col\">\r\n                                                                    <label for=\"inputDocenteTaller\" class=\"text-white\">Profesor</label>\r\n                                                                    <select [(ngModel)]=\"docenteSelectedTaller\" id=\"inputDocenteTaller\"\r\n                                                                        name=\"DocenteTaller\" class=\"form-control\" ngModel required>\r\n                                                                        <option selected></option>\r\n                                                                        <option *ngFor=\"let docen of docente\" [value]=\"docen.id_docente\">\r\n                                                                            {{(docen.nombre_docente+\" \"+docen.apellido_docente)}}</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                            </div>\r\n                            \r\n                                                            <!--Tabla de Resultados-->\r\n                                                            <label for=\"inputState\" class=\"text-white\">Resultados:</label>\r\n                                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                                style=\"width: 95%; height: 450px\">\r\n                                                                <!--Resultado-->\r\n                                                                <div class=\"row-1\"\r\n                                                                    *ngFor=\"let tallerREA of contenidoVisualizar | filterTaller: nombreTallerSelected:materiaTallerSelected:gradoTallerSelected:docenteSelectedTaller:ID_TipoContenido_Taller\">\r\n                                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                                        <div class=\"card-footer p-2 bg-primary rounded-top\">\r\n                                                                            <h5 class=\"card-title m-1\">{{tallerREA.nombre_CREA}}</h5>\r\n                                                                        </div>\r\n                                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                                            <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                                                <div class=\"card-body p-2\">\r\n                                                                                    <p class=\"card-text \">Descripcion:\r\n                                                                                        {{tallerREA.descripcion_CREA}}.</p>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia:\r\n                                                                                                {{tallerREA.materia}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado:\r\n                                                                                                {{tallerREA.id_grado}}</small></p>\r\n                                                                                    </div>\r\n                                                                                    <div>\r\n                                                                                        <p class=\"card-text\"><small class=\"text-muted\">Tipo de\r\n                                                                                                contenido:\r\n                                                                                                {{tallerREA.nombre_tipo_CREA}}</small></p>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <!--Boton Adjuntar Contenido-->\r\n                                                                        <div\r\n                                                                            class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                                            <a class=\"btn btn-primary\" data-toggle=\"modal\"\r\n                                                                                data-target=\"#mimodalejemplo3\"\r\n                                                                                (click)=\"saveDataTaller(tallerREA)\">Adjuntar</a>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <hr class=\"style1\">\r\n                            \r\n                                                <!--Modificacion de la Evaluacion-->\r\n                                                <div>\r\n                                                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Evaluación</h3>\r\n                                                    <div class=\"contenedor py-3\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <label for=\"inputDescripcionEvaluacion\" class=\"text-white\">Descripcion de la\r\n                                                                Evaluación</label>\r\n                                                            <textarea class=\"form-control\" name=\"descripcion_evaluacion\"\r\n                                                                id=\"inputDescripcionEvaluacion\" rows=\"4\" required\r\n                                                                [(ngModel)]=\"ActividadService.selectedActividad.descripcion_evaluacion\"\r\n                                                                placeholder=\"Descripcion ...\"></textarea>\r\n                                                        </div>\r\n                                                        <div class=\"container\">\r\n                                                            <!--Tabs-->\r\n                                                            <div>\r\n                                                                <label for=\"tituloPreguntasEvaluacion\" class=\"text-white\">Preguntas de la\r\n                                                                    Evaluación</label>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col\">\r\n                                                                    <div class=\"card mt-3 tab-card\">\r\n                                                                        <div class=\"card-header tab-card-header\">\r\n                                                                            <!--Opcion Tab-->\r\n                                                                            <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\r\n                                                                                <li class=\"nav-item col\">\r\n                                                                                    <a class=\"nav-link text-center\" id=\"oneE-tab\" data-toggle=\"tab\"\r\n                                                                                        href=\"#pregunta1E\" role=\"tab\" aria-controls=\"pregunta1E\"\r\n                                                                                        aria-selected=\"true\">Pregunta 1</a>\r\n                                                                                </li>\r\n                                                                                <li class=\"nav-item col\">\r\n                                                                                    <a class=\"nav-link text-center\" id=\"twoE-tab\" data-toggle=\"tab\"\r\n                                                                                        href=\"#pregunta2E\" role=\"tab\" aria-controls=\"pregunta2E\"\r\n                                                                                        aria-selected=\"false\">Pregunta 2</a>\r\n                                                                                </li>\r\n                                                                                <li class=\"nav-item col\">\r\n                                                                                    <a class=\"nav-link text-center\" id=\"threeE-tab\"\r\n                                                                                        data-toggle=\"tab\" href=\"#pregunta3E\" role=\"tab\"\r\n                                                                                        aria-controls=\"pregunta3E\" aria-selected=\"false\">Pregunta\r\n                                                                                        3</a>\r\n                                                                                </li>\r\n                                                                            </ul>\r\n                                                                        </div>\r\n                                                                        <div class=\"tab-content\" id=\"myTabContent\">\r\n                                                                            <!--Pregunta 1 Tabs-->\r\n                                                                            <div class=\"tab-pane fade show active p-3\" id=\"pregunta1E\"\r\n                                                                                role=\"tabpanel\" aria-labelledby=\"oneE-tab\">\r\n                                                                                <div class=\"form-group\">\r\n                                                                                    <h5 class=\"py-1 text-center text-dark\">Pregunta 1</h5>\r\n                                                                                    <label for=\"inputPregunta1E\" class=\"text-dark\">Escribir\r\n                                                                                        pregunta</label>\r\n                                                                                    <textarea class=\"form-control\" name=\"EQ1\" id=\"inputPregunta1E\"\r\n                                                                                        rows=\"3\" required\r\n                                                                                        [(ngModel)]=\"ActividadService.selectedActividad.EQ1\"\r\n                                                                                        placeholder=\"Pregunta ...\"></textarea>\r\n                                                                                </div>\r\n                                                                                <label for=\"tituloCuatroRespuestasE\" class=\"text-dark\">Escribir las\r\n                                                                                    cuatro posibles respuestas</label>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE1A\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA11\"\r\n                                                                                            id=\"inputRespuestaE1A\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA11\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE1B\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA12\"\r\n                                                                                            id=\"inputRespuestaE1B\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA12\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE1C\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA13\"\r\n                                                                                            id=\"inputRespuestaE1C\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA13\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE1D\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA14\"\r\n                                                                                            id=\"inputRespuestaE1D\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA14\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <label for=\"inputSelectPreguntaCorrectaE\"\r\n                                                                                    class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                                                <div class=\"form-grup row-1\">\r\n                                                                                    <div class=\"form-group col-2\">\r\n                                                                                        <select\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.ECA1\"\r\n                                                                                            name=\"ECA1\" id=\"inputRespuestaCorrecta1E\"\r\n                                                                                            class=\"form-control\" ngModel required>\r\n                                                                                            <option [value]=1>A</option>\r\n                                                                                            <option [value]=2>B</option>\r\n                                                                                            <option [value]=3>C</option>\r\n                                                                                            <option [value]=4>D</option>\r\n                                                                                        </select>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                                            </div>\r\n                            \r\n                                                                            <!--Pregunta 2 Tabs-->\r\n                                                                            <div class=\"tab-pane fade p-3\" id=\"pregunta2E\" role=\"tabpanel\"\r\n                                                                                aria-labelledby=\"twoE-tab\">\r\n                                                                                <div class=\"form-group\">\r\n                                                                                    <h5 class=\"py-1 text-center text-dark\">Pregunta 2</h5>\r\n                                                                                    <label for=\"inputPregunta2E\" class=\"text-dark\">Escribir\r\n                                                                                        pregunta</label>\r\n                                                                                    <textarea class=\"form-control\" name=\"EQ2\" id=\"inputPregunta2E\"\r\n                                                                                        rows=\"3\" required\r\n                                                                                        [(ngModel)]=\"ActividadService.selectedActividad.EQ2\"\r\n                                                                                        placeholder=\"Pregunta ...\"></textarea>\r\n                                                                                </div>\r\n                                                                                <label for=\"tituloCuatroRespuestasE\" class=\"text-dark\">Escribir las\r\n                                                                                    cuatro posibles respuestas</label>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE2A\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA21\"\r\n                                                                                            id=\"inputRespuestaE2A\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA21\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE2B\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA22\"\r\n                                                                                            id=\"inputRespuestaE2B\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA22\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE2C\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA23\"\r\n                                                                                            id=\"inputRespuestaE2C\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA23\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE2D\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA24\"\r\n                                                                                            id=\"inputRespuestaE2D\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA24\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <label for=\"inputSelectPreguntaCorrectaE\"\r\n                                                                                    class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                                                <div class=\"form-grup row-1\">\r\n                                                                                    <div class=\"form-group col-2\">\r\n                                                                                        <select\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.ECA2\"\r\n                                                                                            name=\"ECA2\" id=\"inputRespuestaCorrecta2E\"\r\n                                                                                            class=\"form-control\" ngModel required>\r\n                                                                                            <option [value]=1>A</option>\r\n                                                                                            <option [value]=2>B</option>\r\n                                                                                            <option [value]=3>C</option>\r\n                                                                                            <option [value]=4>D</option>\r\n                                                                                        </select>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                                            </div>\r\n                            \r\n                                                                            <!--Pregunta 3 Tabs-->\r\n                                                                            <div class=\"tab-pane fade p-3\" id=\"pregunta3E\" role=\"tabpanel\"\r\n                                                                                aria-labelledby=\"threeE-tab\">\r\n                                                                                <div class=\"form-group\">\r\n                                                                                    <h5 class=\"py-1 text-center text-dark\">Pregunta 3</h5>\r\n                                                                                    <label for=\"inputPreguntaE3\" class=\"text-dark\">Escribir\r\n                                                                                        pregunta</label>\r\n                                                                                    <textarea class=\"form-control\" name=\"EQ3\" id=\"inputPreguntaE3\"\r\n                                                                                        rows=\"3\" required\r\n                                                                                        [(ngModel)]=\"ActividadService.selectedActividad.EQ3\"\r\n                                                                                        placeholder=\"Pregunta ...\"></textarea>\r\n                                                                                </div>\r\n                                                                                <label for=\"tituloCuatroRespuestasE\" class=\"text-dark\">Escribir las\r\n                                                                                    cuatro posibles respuestas</label>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE3A\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta A)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA31\"\r\n                                                                                            id=\"inputRespuestaE3A\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA31\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE3B\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta B)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA32\"\r\n                                                                                            id=\"inputRespuestaE3B\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA32\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE3C\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta C)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA33\"\r\n                                                                                            id=\"inputRespuestaE3C\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA33\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"form-group row\">\r\n                                                                                    <label for=\"inputRespuestaE3D\"\r\n                                                                                        class=\"col-sm-2 col-form-label\">Respuesta D)</label>\r\n                                                                                    <div class=\"col-sm-10\">\r\n                                                                                        <textarea class=\"form-control\" name=\"EA34\"\r\n                                                                                            id=\"inputRespuestaE3D\" rows=\"1\" required\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.EA34\"\r\n                                                                                            placeholder=\"respuesta ...\"></textarea>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <label for=\"inputSelectPreguntaCorrectaE\"\r\n                                                                                    class=\"text-dark\">Seleccione la respuesta correcta</label>\r\n                                                                                <div class=\"form-grup row-1\">\r\n                                                                                    <div class=\"form-group col-2\">\r\n                                                                                        <select\r\n                                                                                            [(ngModel)]=\"ActividadService.selectedActividad.ECA3\"\r\n                                                                                            name=\"ECA3\" id=\"inputRespuestaCorrecta3E\"\r\n                                                                                            class=\"form-control\" ngModel required>\r\n                                                                                            <option [value]=1>A</option>\r\n                                                                                            <option [value]=2>B</option>\r\n                                                                                            <option [value]=3>C</option>\r\n                                                                                            <option [value]=4>D</option>\r\n                                                                                        </select>\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <!--el valor seleccionado es {{respuestaCorrectaSelected1}}-->\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <hr class=\"style1\">\r\n                                                <br>\r\n                            \r\n                                                <!--Boton Modificar Actividad-->\r\n                                                <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\r\n                                                    <a class=\"btn bg-warning px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\"\r\n                                                        (click)=\"onModificarActividad(frmModificarActividad)\">Modificar Actividad</a>\r\n                                                </div>\r\n                            \r\n                                            </form>\r\n                                            <hr class=\"style1\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Tab 2-->\r\n                            <div class=\"tab-pane fade\" id=\"nav-Pregunta2\" role=\"tabpanel\" aria-labelledby=\"nav-Pregunta2-tab\">\r\n                                <!--Buscar Actividad-->\r\n                                <div>\r\n                                    <div class=\"contenedor py-3\">\r\n                                        <form #frmBuscarActividad2=\"ngForm\">\r\n                                            <div class=\"form-group\">\r\n                                                <!--Barra busqueda-->\r\n                                                <br>\r\n                                                <label for=\"inputNombreActividad2\" class=\"text-white\">Busqueda de Actividad</label>\r\n                                                <div class=\"form-inline\">\r\n                                                    <input type=\"text\" class=\"form-control col-md-8\" id=\"inputTextoBusquedaActividad2\" placeholder=\"Busqueda por nombre de la Actividad\" \r\n                                                        [(ngModel)]=\"nombreActividadSelected2\" name=\"inputBusquedaActividad2\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <label for=\"inputState2\" class=\"text-white\">Filtros:</label>\r\n                                            <div class=\"form-row pb-3\">\r\n                                                <!--Filtros-->\r\n                                                <div class=\"form-group col-4\">\r\n                                                    <label for=\"inputMateriaA2\" class=\"text-white\">Materia</label>\r\n                                                    <select [(ngModel)]=\"materiaSelectedA2\" id=\"inputMateriaA2\" name=\"materiaA2\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}\r\n                                                        </option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col-4\">\r\n                                                    <label for=\"inputGradoA2\" class=\"text-white\">Grado</label>\r\n                                                    <select [(ngModel)]=\"gradoSelectedA2\" id=\"inputGradoA2\" name=\"gradoA2\" class=\"form-control\" ngModel required>\r\n                                                        <option selected></option>\r\n                                                        <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Filtro Competencia-->\r\n                                            <div class=\"form-group col px-0\">\r\n                                                <label for=\"inputDocenteA2\" class=\"text-white\">Buscador Competencia</label>\r\n                                                <input type=\"text\" class=\"form-control col-5\" id=\"inputTextoBusquedaCompetencia2\" placeholder=\"Ingrese palabra clave\" \r\n                                                    [(ngModel)]=\"nombreCompetenciaSelected2\" name=\"inputBusquedaCompetencia2\">\r\n                                            </div>\r\n                                            <div class=\"form-row pb-3\">\r\n                                                <div class=\"form-group col\">\r\n                                                    <label for=\"inputDocenteA2\" class=\"text-white\">Competencia</label>\r\n                                                    <select [(ngModel)]=\"competenciaSelectedA2\" id=\"inputCompetenciaA2\" name=\"competenciaA2\" class=\"form-control\" onfocus='if(this.options.length > 2){ this.size = 8; }' onblur='this.size=1;' onchange='this.size=1; this.blur();' ngModel required>\r\n                                                        <option class=\"col-auto px-0\" selected></option>\r\n                                                        <option class=\"col-auto px-0\" selected [value]=0>Sin Competencia</option>\r\n                                                        <option class=\"col-auto px-0\" *ngFor=\"let compe of competencia | filterCompetencia: nombreCompetenciaSelected2:materiaSelectedA2:gradoSelectedA2\" [value]=\"compe.id_competencia\">{{(compe.nombre_competencia)}}\r\n                                                        </option>\r\n                                                    </select>\r\n                                                    <!--el valor seleccionado es {{competenciaSelectedA}}-->\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Tabla de Resultados-->\r\n                                            <label for=\"inputState2\" class=\"text-white\">Resultados:</label>\r\n                                            <div class=\"col container p-4 my bg-light rounded table-wrapper-scroll-y my-custom-scrollbar\"\r\n                                                style=\"width: 95%; height: 450px\">\r\n                                                <!--Resultado-->\r\n                                                <div class=\"row-1\" *ngFor=\"let actividad of actividadVisualizar | filterActividad: nombreActividadSelected2:materiaSelectedA2:gradoSelectedA2:id_docenteAuth:competenciaSelectedA2\">\r\n                                                    <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                                        <div class=\"card-footer p-2 bg-warning rounded-top\">\r\n                                                            <h5 class=\"card-title m-1\">{{actividad.titulo_actividad}}</h5>\r\n                                                        </div>\r\n                                                        <div class=\"row no-gutters border border-top-0 border-secondary\">\r\n                                                            <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                                                <div class=\"card-body p-2\">\r\n                                                                    <p class=\"card-text \">Descripcion: {{actividad.descripcion_actividad}}.</p>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Materia: {{actividad.materia}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Grado: {{actividad.id_grado}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{actividad.competencia}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{actividad.docente}}</small></p>\r\n                                                                    </div>\r\n                                                                    <div>\r\n                                                                        <p class=\"card-text\"><small class=\"text-muted\">Autor: {{actividad.autor}}</small></p>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"card-footer bg-secondary row justify-content-md-center no-gutters p-1\">\r\n                                                            <a class=\"btn bg-warning\" data-toggle=\"modal\" data-target=\"#mimodalejemplo5\" (click)=\"seccionActivity(actividad)\">Seleccionar Actividad</a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                                <hr class=\"style1\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Modal Confirmar Actividad Modificada -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\r\n                    Subiendo Actividad Modificada.\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto1\">\r\n                    Tu Actividad ha sido Actualizada correctamente.\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto2\">\r\n                    La Actividad se ha modificado y creado como tu Actividad .\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error1\">\r\n                    La Actividad no se ha podido modificar. Verifica que has ingresado todos los \r\n                    datos requeridos.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error2\">\r\n                    No has seleccionado una Actividad para modificar.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- Modal Actividad Seleccionada-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Se ha seleccionando una Activida. Toda la informacion de esta actividad se ha cargado\r\n                    para que la puedas revisar y modificar.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- Modal Contenido Cambiado -->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel3\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Se ha cambiado el Contenido de la Actividad que estas\r\n                    modificando.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Taller Cambiado-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel4\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Se ha cambiado el Taller de la Actividad que estas\r\n                    modificando.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal Activar Secciones Actividad-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel5\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Actividad Selecionada</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body bg-light\">\r\n                    <div>\r\n                        <div>\r\n                            <h3 style=\"cursor:context-menu\" class=\"text-center bg-warning py-4\">{{actividadToSave2.titulo_actividad}}</h3>\r\n                        </div>\r\n                        <div class=\"row-1\">\r\n                            <div class=\"card mb-4 border-0\" style=\"max-width: 1440px;\">\r\n                                <div class=\"row no-gutters\">\r\n                                    <div class=\"col-md-10\" style=\"max-width: 840px;\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <div>\r\n                                                <h5 class=\"\">Descripcion: {{actividadToSave2.descripcion_actividad}}</h5>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Materia: {{actividadToSave2.materia}}</small>\r\n                                                </p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Grado: {{actividadToSave2.id_grado}}</small>\r\n                                                </p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Competencia: {{actividadToSave2.competencia}}</small></p>\r\n                                            </div>\r\n                                            <div>\r\n                                                <p class=\"card-text\"><small class=\"text-muted\">Profesor: {{actividadToSave2.docente}}</small>\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"style1\">\r\n\r\n                        <!--Estado Secciones Actividad-->\r\n                        <div>\r\n                            <h5 style=\"cursor:context-menu\" class=\"\">Secciones de la Actividad:</h5>\r\n                        </div>\r\n                        <div class=\"row-1\">\r\n                            <div class=\"card mb-4 border-0\">\r\n                                <div class=\"row no-gutters \">\r\n                                    <div class=\"col\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <h6 class=\"card-text\">Taller</h6>\r\n                                            <div>\r\n                                                <a class=\"card-text\"><small>Estado: </small></a>\r\n                                                <a *ngIf=\"tallerActivado\" class=\"text-info\"> Activado</a>\r\n                                                <a *ngIf=\"tallerDesactivado\" class=\"text-danger\"> Desactivado</a>\r\n                                            </div>\r\n                                            <div *ngIf=\"tallerActivado\">\r\n                                                <div class=\"row pt-3 no-gutters\">\r\n                                                    <button type=\"button\" class=\"btn btn-default bg-danger font-weight-bold\" (click)=\"desactivarTaller()\">Desactivar</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"tallerDesactivado\">\r\n                                                <div class=\"row pt-3 no-gutters\">\r\n                                                    <button type=\"button\" class=\"btn btn-default bg-info font-weight-bold\" (click)=\"activarTaller()\">Activar</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col my-auto\">\r\n                                        <div class=\"card-body p-2\">\r\n                                            <h6 class=\"card-text\">Evaluacion</h6>\r\n                                            <div>\r\n                                                <a class=\"card-text\"><small>Estado: </small></a>\r\n                                                <a *ngIf=\"evaluacionActivado\" class=\"text-info\"> Activado</a>\r\n                                                <a *ngIf=\"evaluacionDesactivado\" class=\"text-danger\"> Desactivado</a>\r\n                                            </div>\r\n                                            <div *ngIf=\"evaluacionActivado\">\r\n                                                <div class=\"row pt-3 no-gutters\">\r\n                                                    <button type=\"button\" class=\"btn btn-default bg-danger font-weight-bold\" (click)=\"desactivarEvaluacion()\">Desactivar</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"evaluacionDesactivado\">\r\n                                                <div class=\"row pt-3 no-gutters\">\r\n                                                    <button type=\"button\" class=\"btn btn-default bg-info font-weight-bold\" (click)=\"activarEvaluacion()\">Activar</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr class=\"style1\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\">\r\n                    <button class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\">Cerrar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-usuario/registro-usuario.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-usuario/registro-usuario.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-visitante></app-header-visitante>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 col-9 mx-auto\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-danger rounded-top\">\r\n        <h1 style=\"cursor:context-menu\" class=\"mt-5 pt-4 text-center m \">Registro de nuevo Profesor</h1>\r\n    </div>\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container pt-1 bg-secondary rounded-bottom\">\r\n\r\n        <!--Informacion del contenido-->\r\n        <div>\r\n            <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Informacion</h3>\r\n            <div class=\"contenedor py-3\">\r\n                <form #frmRegistroProfesor=\"ngForm\">\r\n                \r\n                    <div class=\"col-5 mx-auto\">\r\n                        <div class=\"form-group col\">\r\n                            <div class=\"form-group \">\r\n                                <label for=\"inputNombreDocente\" class=\"text-white \">Nombre del profesor</label>\r\n                                <input type=\"text\" name=\"nombre_docente\" class=\"form-control col\" id=\"inputNombreDocente\"\r\n                                    placeholder=\"Nombre\" required [(ngModel)]=\"AuthDService.selectedDocente.nombre_docente\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputApellidoDocente\" class=\"text-white \">Apellidos del profesor</label>\r\n                                <input type=\"text\" name=\"apellido_docente\" class=\"form-control col\" id=\"inputApellidoDocente\"\r\n                                    placeholder=\"Apellidos\" required [(ngModel)]=\"AuthDService.selectedDocente.apellido_docente\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputColegio\" class=\"text-white\">Colegio</label>\r\n                                <select [(ngModel)]=\"id_colegio\" name=\"id_colegio\" id=\"inputColegio\" class=\"form-control\" ngModel required>\r\n                                    <!--<option selected [value]='0'>- Materia -</option>-->\r\n                                    <option *ngFor=\"let colegio of colegios\" [value]=\"colegio.id_colegio\">{{colegio.nombre_colegio}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputNombreUsuario\" class=\"text-white \">Nombre Usuario</label>\r\n                                <input type=\"text\" name=\"nombre_usuario\" class=\"form-control col\" id=\"inputNombreUsuario\"\r\n                                    placeholder=\"Usuario\" required [(ngModel)]=\"AuthDService.selectedDocente.nombre_usuario\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputContrasena\" class=\"text-white \">Contraseña</label>\r\n                                <input type=\"password\" name=\"contrasena\" class=\"form-control col\" id=\"inputContrasena\" placeholder=\"Contraseña\"\r\n                                    required [(ngModel)]=\"AuthDService.selectedDocente.contrasena\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputCorreoElectronico\" class=\"text-white \">Correo Electronico</label>\r\n                                <input type=\"text\" name=\"correo_electronico\" class=\"form-control col\" id=\"inputCorreoElectronico\"\r\n                                    placeholder=\"Correo Electronico\" required [(ngModel)]=\"AuthDService.selectedDocente.correo_electronico\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <br>\r\n                    <hr class=\"style5\">\r\n                    \r\n                    <h3 style=\"cursor:context-menu\" class=\"py-3 text-center text-white\">Crear tu Primera Materia</h3>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputNombreMateriaActiva\" class=\"text-white \">Nombre de la Materia</label>\r\n                        <input type=\"text\" name=\"nombre_materiaActiva\" class=\"form-control col-md-8\" id=\"inputNombreMateriaActiva\" placeholder=\"Nombre Materia\" required\r\n                            [(ngModel)]=\"ContentREAService.selectedContenidoREA.nombre_CREA\">\r\n                    </div>\r\n                    <!-- Selectores -->\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputMateriaBase\" class=\"text-white\">Materia Base</label>\r\n                            <select [(ngModel)]=\"id_materia\" name=\"id_materia\" id=\"inputMateriaBase\" class=\"form-control\" ngModel required>\r\n                                <!--<option selected [value]='0'>- Materia -</option>-->\r\n                                <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                            <select [(ngModel)]=\"id_grado\" name=\"id_grado\" id=\"inputGrado\" class=\"form-control\" ngModel required>\r\n                                <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <hr class=\"style5\">\r\n                    <br>\r\n                    <!--Boton Crear Materia-->\r\n                    <div class=\"bg-secondary row pb-4 justify-content-md-center no-gutters\">\r\n                        <button class=\"btn bg-danger px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\" (click)=\"onCrearDocente(frmRegistroProfesor)\">Crear Profesor</button>\r\n                    </div>\r\n                </form>\r\n                <hr class=\"style5\">\r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal routerLink=\"/subirContenido\"-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error1\">\r\n                    El profesor no se ha podido registrar. El Usuario o Correo puenden estar en uso,\r\n                    o verifique haber ingresado todos los datos.\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto\">\r\n                    El profesor ha sido registrado.\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\r\n                    Registrando el nuevo profesor. Espere por favor.\r\n                </div>\r\n                <div class=\"modal-footer justify-content-md-center no-gutters bg-light py-1\" *ngIf=\"correcto\">\r\n                    <a class=\"btn btn-default bg-warning font-weight-bold\" data-dismiss=\"modal\" (click)=\"goToLogin()\">Terminar Registro</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/subir-contenido/subir-contenido.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subir-contenido/subir-contenido.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<!--Contenedor Contenido Pagina-->\r\n<div class=\"mb-5 contenedor py-3\">\r\n\r\n    <!--Titulo pagina-->\r\n    <div class=\"container m-auto pb-2 bg-primary rounded-top\">\r\n        <h1 class=\"mt-5 pt-4 text-center m \">Subir Contenido</h1>\r\n    </div>\r\n    <!--Contenedor Formulario-->\r\n    <div class=\"container container bg-secondary pt-1  rounded-bottom\">\r\n\r\n        <!--Informacion del contenido-->\r\n        <div>\r\n            <h3 class=\"py-3 text-center text-white\">Informacion del contenido</h3>\r\n            <div class=\"contenedor py-3\">\r\n                <form #frmSubirContenido=\"ngForm\">\r\n                    <!-- Texto -->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputNombreContenido\" class=\"text-white \">Nombre del contenido</label>\r\n                        <input type=\"text\" name=\"nombre_CREA\" class=\"form-control col-md-8\" id=\"inputNombreContenido\" placeholder=\"Nombre Contenido\" required #nombreCREA=\"ngModel\" [(ngModel)]=\"ContentREAService.selectedContenidoREA.nombre_CREA\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputDescripcionContenido\" class=\"text-white\">Descripcion del contenido</label>\r\n                        <textarea class=\"form-control\" name=\"descripcion_CREA\" id=\"inputDescripcionContenido\"\r\n                            rows=\"4\" required #descripcionCREA=\"ngModel\" [(ngModel)]=\"ContentREAService.selectedContenidoREA.descripcion_CREA\" placeholder=\"Descripcion ...\"></textarea>\r\n                    </div>\r\n                    <!-- Selectores -->\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputMateria\" class=\"text-white\">Materia</label>\r\n                            <select [(ngModel)]=\"materiaSelected\" name=\"materia\" id=\"inputMateria\" class=\"form-control\" ngModel required>\r\n                                <!--<option selected [value]='0'>- Materia -</option>-->\r\n                                <option *ngFor=\"let mater of materia\" [value]=\"mater.id_materia\">{{mater.nombre_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputGrado\" class=\"text-white\">Grado</label>\r\n                            <select [(ngModel)]=\"gradoSelected\" name=\"grado\" id=\"inputGrado\" class=\"form-control\" ngModel required>\r\n                                <option *ngFor=\"let grad of grado\" [value]=\"grad.id_grado\">{{grad.nombre_grado}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col\">\r\n                            <label for=\"inputType\" class=\"text-white\">Tipo de Contenido</label>\r\n                            <select [(ngModel)]=\"tipoContenidoSelected\" name=\"tipoContenido\" id=\"inputType\" class=\"form-control\" ngModel required>\r\n                                <option *ngFor=\"let tipCon of tipoContenido\" [value]=\"tipCon.id_tipoContenido\">{{tipCon.nombre_tipoContenido}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <label for=\"inputMateria\" class=\"text-white\">Seleccionar Contenido</label>\r\n                    <div class=\"input-group\">\r\n                        <div class=\"custom-file col-md-8\">\r\n                            <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFileContenido\" aria-describedby=\"inputGroupFileAddon01\" (change)=\"onFileChange($event)\">\r\n                            <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{nombreContenido}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <hr class=\"style2\">\r\n                    <br>\r\n                    <!--Boton Crear Contenido-->\r\n                    <div class=\"row pb-4 justify-content-md-center no-gutters\">\r\n                        <a class=\"btn bg-primary px-5 py-4 font-weight-bold\" data-toggle=\"modal\" data-target=\"#mimodalejemplo\" (click)=\"onSubirContenido(frmSubirContenido)\">Subir Contenido</a>\r\n                    </div>\r\n                </form>\r\n                <hr class=\"style2\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal Subir Contenido-->\r\n    <div class=\"modal fade\" id=\"mimodalejemplo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header bg-light\">\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Mensaje</h5>\r\n                    <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-info\" *ngIf=\"correcto\">\r\n                    El contenido ha sido subido y su informacion guardada en el servidor.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error\">\r\n                    El contenido no se ha podido subir. Verifica que has ingresado todos los \r\n                    datos requeridos.\r\n                </div>\r\n                <div class=\"modal-body text-danger\" *ngIf=\"error2\">\r\n                    El contenido no se ha podido subir. Verifica que has seleccionado el contenido a subir.\r\n                </div>\r\n                <div class=\"modal-body\" *ngIf=\"subiendo\">\r\n                    Subiendo el contenido. Espere por favor.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
/* Routing hacia fc.module*/
/*{path:'', redirectTo:'/components/login', pathMatch:"full"},
{path:'components', loadChildren: './components/fc.module#FCModule'}*/
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'FC';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_inicio_profesores_inicio_profesores_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inicio-profesores/inicio-profesores.component */ "./src/app/components/inicio-profesores/inicio-profesores.component.ts");
/* harmony import */ var _components_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/crear-actividad/crear-actividad.component */ "./src/app/components/crear-actividad/crear-actividad.component.ts");
/* harmony import */ var _components_borrar_actividad_borrar_actividad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/borrar-actividad/borrar-actividad.component */ "./src/app/components/borrar-actividad/borrar-actividad.component.ts");
/* harmony import */ var _components_modificar_actividad_modificar_actividad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modificar-actividad/modificar-actividad.component */ "./src/app/components/modificar-actividad/modificar-actividad.component.ts");
/* harmony import */ var _components_subir_contenido_subir_contenido_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/subir-contenido/subir-contenido.component */ "./src/app/components/subir-contenido/subir-contenido.component.ts");
/* harmony import */ var _components_borrar_contenido_borrar_contenido_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/borrar-contenido/borrar-contenido.component */ "./src/app/components/borrar-contenido/borrar-contenido.component.ts");
/* harmony import */ var _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/busqueda/busqueda.component */ "./src/app/components/busqueda/busqueda.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pipes_filter_content_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/filter-content.pipe */ "./src/app/pipes/filter-content.pipe.ts");
/* harmony import */ var _pipes_filter_competencia_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/filter-competencia.pipe */ "./src/app/pipes/filter-competencia.pipe.ts");
/* harmony import */ var _pipes_filter_actividad_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/filter-actividad.pipe */ "./src/app/pipes/filter-actividad.pipe.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _pipes_filter_content_delete_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/filter-content-delete.pipe */ "./src/app/pipes/filter-content-delete.pipe.ts");
/* harmony import */ var _components_registro_usuario_registro_usuario_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/registro-usuario/registro-usuario.component */ "./src/app/components/registro-usuario/registro-usuario.component.ts");
/* harmony import */ var _components_infromacion_docente_infromacion_docente_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/infromacion-docente/infromacion-docente.component */ "./src/app/components/infromacion-docente/infromacion-docente.component.ts");
/* harmony import */ var _components_administrar_docente_administrar_docente_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/administrar-docente/administrar-docente.component */ "./src/app/components/administrar-docente/administrar-docente.component.ts");
/* harmony import */ var _pipes_filter_table_materia_docente_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/filter-table-materia-docente.pipe */ "./src/app/pipes/filter-table-materia-docente.pipe.ts");
/* harmony import */ var _pipes_filter_actividad_delete_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/filter-actividad-delete.pipe */ "./src/app/pipes/filter-actividad-delete.pipe.ts");
/* harmony import */ var _components_Admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/Admin/inicio-admin/inicio-admin.component */ "./src/app/components/Admin/inicio-admin/inicio-admin.component.ts");
/* harmony import */ var _components_Admin_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/Admin/header-admin/header-admin.component */ "./src/app/components/Admin/header-admin/header-admin.component.ts");
/* harmony import */ var _components_Admin_gestionar_competencias_admin_gestionar_competencias_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component */ "./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.ts");
/* harmony import */ var _pipes_filter_competencia_admin_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/filter-competencia-admin.pipe */ "./src/app/pipes/filter-competencia-admin.pipe.ts");
/* harmony import */ var _components_Admin_gestionar_usuarios_admin_gestionar_usuarios_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component */ "./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.ts");
/* harmony import */ var _pipes_filter_docente_admin_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/filter-docente-admin.pipe */ "./src/app/pipes/filter-docente-admin.pipe.ts");
/* harmony import */ var _pipes_filter_estudiantes_admin_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/filter-estudiantes-admin.pipe */ "./src/app/pipes/filter-estudiantes-admin.pipe.ts");
/* harmony import */ var _components_Admin_gestionar_colegio_admin_gestionar_colegio_admin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component */ "./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.ts");
/* harmony import */ var _components_Visitante_busqueda_visitante_busqueda_visitante_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/Visitante/busqueda-visitante/busqueda-visitante.component */ "./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.ts");
/* harmony import */ var _components_Visitante_header_visitante_header_visitante_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/Visitante/header-visitante/header-visitante.component */ "./src/app/components/Visitante/header-visitante/header-visitante.component.ts");
/* harmony import */ var _pipes_filter_colegio_admin_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/filter-colegio-admin.pipe */ "./src/app/pipes/filter-colegio-admin.pipe.ts");
/* harmony import */ var _pipes_filter_materiaactiva_admin_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pipes/filter-materiaactiva-admin.pipe */ "./src/app/pipes/filter-materiaactiva-admin.pipe.ts");
/* harmony import */ var _components_dudas_dudas_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/dudas/dudas.component */ "./src/app/components/dudas/dudas.component.ts");
/* harmony import */ var _pipes_filter_duda_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pipes/filter-duda.pipe */ "./src/app/pipes/filter-duda.pipe.ts");
/* harmony import */ var _components_metricas_metricas_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/metricas/metricas.component */ "./src/app/components/metricas/metricas.component.ts");
/* harmony import */ var _pipes_filter_estudiante_metricas_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pipes/filter-estudiante-metricas.pipe */ "./src/app/pipes/filter-estudiante-metricas.pipe.ts");
/* harmony import */ var _pipes_filter_mi_materias_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pipes/filter-mi-materias.pipe */ "./src/app/pipes/filter-mi-materias.pipe.ts");
/* harmony import */ var _pipes_filter_taller_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pipes/filter-taller.pipe */ "./src/app/pipes/filter-taller.pipe.ts");

// RUTAS

//Componentes















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _components_inicio_profesores_inicio_profesores_component__WEBPACK_IMPORTED_MODULE_10__["InicioProfesoresComponent"],
            _components_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_11__["CrearActividadComponent"],
            _components_borrar_actividad_borrar_actividad_component__WEBPACK_IMPORTED_MODULE_12__["BorrarActividadComponent"],
            _components_modificar_actividad_modificar_actividad_component__WEBPACK_IMPORTED_MODULE_13__["ModificarActividadComponent"],
            _components_subir_contenido_subir_contenido_component__WEBPACK_IMPORTED_MODULE_14__["SubirContenidoComponent"],
            _components_borrar_contenido_borrar_contenido_component__WEBPACK_IMPORTED_MODULE_15__["BorrarContenidoComponent"],
            _components_busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_16__["BusquedaComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _pipes_filter_content_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterContentPipe"],
            _pipes_filter_competencia_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterCompetenciaPipe"],
            _pipes_filter_actividad_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterActividadPipe"],
            _pipes_filter_content_delete_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterContentDeletePipe"],
            _components_registro_usuario_registro_usuario_component__WEBPACK_IMPORTED_MODULE_26__["RegistroUsuarioComponent"],
            _components_infromacion_docente_infromacion_docente_component__WEBPACK_IMPORTED_MODULE_27__["InfromacionDocenteComponent"],
            _components_administrar_docente_administrar_docente_component__WEBPACK_IMPORTED_MODULE_28__["AdministrarDocenteComponent"],
            _pipes_filter_table_materia_docente_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterTableMateriaDocentePipe"],
            _pipes_filter_actividad_delete_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterActividadDeletePipe"],
            _components_Admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_31__["InicioAdminComponent"],
            _components_Admin_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_32__["HeaderAdminComponent"],
            _components_Admin_gestionar_competencias_admin_gestionar_competencias_admin_component__WEBPACK_IMPORTED_MODULE_33__["GestionarCompetenciasAdminComponent"],
            _pipes_filter_competencia_admin_pipe__WEBPACK_IMPORTED_MODULE_34__["FilterCompetenciaAdminPipe"],
            _components_Admin_gestionar_usuarios_admin_gestionar_usuarios_admin_component__WEBPACK_IMPORTED_MODULE_35__["GestionarUsuariosAdminComponent"],
            _pipes_filter_docente_admin_pipe__WEBPACK_IMPORTED_MODULE_36__["FilterDocenteAdminPipe"],
            _pipes_filter_estudiantes_admin_pipe__WEBPACK_IMPORTED_MODULE_37__["FilterEstudiantesAdminPipe"],
            _components_Admin_gestionar_colegio_admin_gestionar_colegio_admin_component__WEBPACK_IMPORTED_MODULE_38__["GestionarColegioAdminComponent"],
            _components_Visitante_busqueda_visitante_busqueda_visitante_component__WEBPACK_IMPORTED_MODULE_39__["BusquedaVisitanteComponent"],
            _components_Visitante_header_visitante_header_visitante_component__WEBPACK_IMPORTED_MODULE_40__["HeaderVisitanteComponent"],
            _pipes_filter_colegio_admin_pipe__WEBPACK_IMPORTED_MODULE_41__["FilterColegioAdminPipe"],
            _pipes_filter_materiaactiva_admin_pipe__WEBPACK_IMPORTED_MODULE_42__["FilterMateriaactivaAdminPipe"],
            _components_dudas_dudas_component__WEBPACK_IMPORTED_MODULE_43__["DudasComponent"],
            _pipes_filter_duda_pipe__WEBPACK_IMPORTED_MODULE_44__["FilterDudaPipe"],
            _components_metricas_metricas_component__WEBPACK_IMPORTED_MODULE_45__["MetricasComponent"],
            _pipes_filter_estudiante_metricas_pipe__WEBPACK_IMPORTED_MODULE_46__["FilterEstudianteMetricasPipe"],
            _pipes_filter_mi_materias_pipe__WEBPACK_IMPORTED_MODULE_47__["FilterMiMateriasPipe"],
            _pipes_filter_taller_pipe__WEBPACK_IMPORTED_MODULE_48__["FilterTallerPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_1__["app_routing"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"]
        ],
        providers: [_services_auth_d_service__WEBPACK_IMPORTED_MODULE_18__["AuthDService"], _services_content_rea_service__WEBPACK_IMPORTED_MODULE_19__["ContentREAService"], _services_actividad_service__WEBPACK_IMPORTED_MODULE_24__["ActividadService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: app_routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_routing", function() { return app_routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index.paginas */ "./src/app/components/index.paginas.ts");



const app_routes = [
    { path: 'login', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'registroProfesor', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["RegistroUsuarioComponent"] },
    { path: 'inicioProfesores', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["InicioProfesoresComponent"] },
    { path: 'InformacionProfesor', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["InfromacionDocenteComponent"] },
    { path: 'AdministrarProfesor', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["AdministrarDocenteComponent"] },
    { path: 'subirContenido', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["SubirContenidoComponent"] },
    { path: 'borrarContenido', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["BorrarContenidoComponent"] },
    { path: 'crearActividad', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["CrearActividadComponent"] },
    { path: 'modificarActividad', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["ModificarActividadComponent"] },
    { path: 'borrarActividad', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["BorrarActividadComponent"] },
    { path: 'busqueda', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["BusquedaComponent"] },
    { path: 'inicioAdmin', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["InicioAdminComponent"] },
    { path: 'gestionarCompetenciasAdmin', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["GestionarCompetenciasAdminComponent"] },
    { path: 'gestionarUsuariosAdmin', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["GestionarUsuariosAdminComponent"] },
    { path: 'gestionarColegioAdmin', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["GestionarColegioAdminComponent"] },
    { path: 'busquedaVisitante', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["BusquedaVisitanteComponent"] },
    { path: 'dudas', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["DudasComponent"] },
    { path: 'metricas', component: _components_index_paginas__WEBPACK_IMPORTED_MODULE_2__["MetricasComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];
const app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { useHash: true });


/***/ }),

/***/ "./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWRtaW4vZ2VzdGlvbmFyLWNvbGVnaW8tYWRtaW4vZ2VzdGlvbmFyLWNvbGVnaW8tYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: GestionarColegioAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionarColegioAdminComponent", function() { return GestionarColegioAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_colegio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/colegio */ "./src/app/models/colegio.ts");
/* harmony import */ var _models_grado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/grado */ "./src/app/models/grado.ts");
/* harmony import */ var _models_materia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/materia */ "./src/app/models/materia.ts");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");







let GestionarColegioAdminComponent = class GestionarColegioAdminComponent {
    constructor(router, AuthAdminService) {
        this.router = router;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.correcto = false;
        this.correcto1 = false;
        this.correcto2 = false;
        this.correcto3 = false;
        this.error = false;
        this.error1 = false;
        this.error2 = false;
        this.error3 = false;
        this.subiendo = false;
        this.colegioSelected = false;
        this.getOptions();
    }
    getOptions() {
        this.AuthAdminService.allGrade().subscribe(res => {
            this.grados = res;
        });
        this.AuthAdminService.loadAllDocentes().subscribe(res => {
            this.docentes = res;
        });
        this.AuthAdminService.loadAllColegios().subscribe(res => {
            this.colegios = res;
        });
        this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
            this.areasMaterias = res;
            this.AuthAdminService.allSubject().subscribe(res => {
                this.materias = res;
                this.materiasVisualizar = res;
                for (let i = 0; i < this.materias.length; i++) {
                    for (let n = 0; n < this.areasMaterias.length; n++) {
                        if (this.materias[i].id_areaMateria == this.areasMaterias[n].id_areaMateria) {
                            this.materiasVisualizar[i].areaMateria = this.areasMaterias[n].nombre_areaMateria;
                        }
                    }
                }
                //console.log("actividades visualizar:", this.materiasVisualizar)
            });
        });
    }
    //Obtener informacion y listado de todas las MateriasActivas
    getInformacionCompletaMateriasActivas() {
        this.AuthAdminService.allSubject().subscribe(res => {
            this.materias = res;
            //console.log('info materia',this.materia.length);
            this.AuthAdminService.loadAllDocentes().subscribe(res => {
                this.docentes = res;
                //console.log('info docente', this.resDocente);
                this.AuthAdminService.loadAllColegios().subscribe(res => {
                    this.colegios = res;
                    //console.log('info colegio', this.resColegio);
                    this.AuthAdminService.loadAllSubjectActives().subscribe(res => {
                        this.AuthAdminService.MateriasActivas = res;
                        this.MateriaActivaInfo = res;
                        for (let i = 0; i < this.AuthAdminService.MateriasActivas.length; i++) {
                            for (let m = 0; m < this.materias.length; m++) {
                                if (this.AuthAdminService.MateriasActivas[i].id_materia == this.materias[m].id_materia) {
                                    this.MateriaActivaInfo[i].nombre_materia = this.materias[m].nombre_materia;
                                }
                            }
                            for (let m = 0; m < this.colegios.length; m++) {
                                if (this.AuthAdminService.MateriasActivas[i].id_colegio == this.colegios[m].id_colegio) {
                                    this.MateriaActivaInfo[i].colegio = this.colegios[m].nombre_colegio;
                                }
                            }
                            for (let m = 0; m < this.docentes.length; m++) {
                                if (this.AuthAdminService.MateriasActivas[i].id_docente == this.docentes[m].id_docente) {
                                    this.MateriaActivaInfo[i].docente = this.docentes[m].nombre_docente + " " + this.docentes[m].apellido_docente;
                                }
                            }
                        }
                        //console.log('materiaActivaVisualizar', this.MateriaActivaInfo);
                    });
                });
            });
        });
    }
    //Imprimir datos del docente en el Form 
    getColegioinForm(colegiohtml) {
        this.AuthAdminService.selectedColegio = colegiohtml;
        this.colegioSelected = true;
        //console.log('info colegio', this.AuthAdminService.selectedColegio);
    }
    //Crear Colegio
    crearColegio(form) {
        this.correcto3 = false;
        this.error3 = false;
        this.subiendo = true;
        const newColegio = {
            id_colegio: form.value.NIT,
            NIT: form.value.NIT,
            nombre_colegio: form.value.nombre_colegio,
            ciudad: form.value.ciudad,
            direccion: form.value.direccion,
            telefono: form.value.telefono,
            tipo_colegio: form.value.tipo_colegio,
            calendario: form.value.calendario,
            rector: form.value.rector,
            colegioActivo: 1
        };
        //console.log(newColegioL);
        this.AuthAdminService.createColegio(newColegio).subscribe(res => {
            //console.log(res);
            this.temp2 = res;
            if (this.temp2.Estado == "Error Crear Colegio") {
                this.correcto3 = false;
                this.error3 = true;
                this.subiendo = false;
            }
            else {
                this.correcto3 = true;
                this.error3 = false;
                this.subiendo = false;
                this.getOptions();
                this.resetForm(form);
            }
        });
    }
    //Actualizar datos del Colegio
    actualizarColegio(form) {
        this.correcto = false;
        this.error = true;
        if (this.colegioSelected) {
            const newInfoColegio = {
                id_colegio: this.AuthAdminService.selectedColegio.id_colegio,
                NIT: form.value.NIT,
                nombre_colegio: form.value.nombre_colegio,
                ciudad: form.value.ciudad,
                direccion: form.value.direccion,
                telefono: form.value.telefono,
                tipo_colegio: form.value.tipo_colegio,
                calendario: form.value.calendario,
                rector: form.value.rector
            };
            //console.log(newInfoColegio);
            this.AuthAdminService.uploadSchool(newInfoColegio).subscribe(res => {
                //console.log(res);
                this.correcto = true;
                this.error = false;
                this.getOptions();
                this.resetForm(form);
            });
        }
    }
    //Crear Materia en Mongo
    crearMateria(form) {
        this.correcto1 = false;
        this.error1 = false;
        this.subiendo = true;
        this.AuthAdminService.allSubject().subscribe(res => {
            this.AuthAdminService.Materias = res;
            //crear Cont
            if (this.AuthAdminService.Materias.length == 0) {
                this.newCont = 1;
            }
            else {
                if (this.AuthAdminService.Materias.length) {
                    this.newCont = 1;
                }
                for (let n = 0; n < this.AuthAdminService.Materias.length; n++) {
                    for (let i = 0; i < this.AuthAdminService.Materias.length; i++) {
                        if (this.AuthAdminService.Materias[i].id_colegio == form.value.id_colegioM) {
                            if (this.AuthAdminService.Materias.length) {
                                this.newCont = 1;
                            }
                            if (n + 1 == this.AuthAdminService.Materias[i].cont) {
                                this.newCont = n + 2;
                                this.temp = 0;
                                i = this.AuthAdminService.Materias.length;
                            }
                            else {
                                this.newCont = n + 1;
                                this.temp = 1;
                            }
                        }
                    }
                    if (this.temp == 1) {
                        n = this.AuthAdminService.Materias.length + 1;
                    }
                }
            }
            // ID Materia
            var idGlobal = "" + form.value.id_colegioM + this.newCont;
            this.newID = parseInt(idGlobal);
            // Imagen
            if (form.value.id_areaMateria == 0 || form.value.id_areaMateria > 4) {
                this.urlTemp = "http://localhost:3000/public/repositorio/materiaPorDefecto.jpg";
            }
            if (form.value.id_areaMateria == 1) {
                this.urlTemp = "http://localhost:3000/public/repositorio/lenguajeImagen.jpg";
            }
            if (form.value.id_areaMateria == 2) {
                this.urlTemp = "http://localhost:3000/public/repositorio/matematicasImagen.jpg";
            }
            if (form.value.id_areaMateria == 3) {
                this.urlTemp = "http://localhost:3000/public/repositorio/cienciasSocialesImagen.jpg";
            }
            if (form.value.id_areaMateria == 4) {
                this.urlTemp = "http://localhost:3000/public/repositorio/cienciasNaturalesImagen.jpg";
            }
            const newMateria = {
                id_materia: this.newID,
                cont: this.newCont,
                nombre_materia: form.value.nombre_materia,
                id_colegio: form.value.id_colegioM,
                id_areaMateria: form.value.id_areaMateria,
                gradoInicial: form.value.gradoInicial,
                url_imagen: this.urlTemp
            };
            //console.log('datos newMateria', newMateria);
            this.AuthAdminService.createMateria(newMateria).subscribe(res => {
                //console.log(res);
                this.temp2 = res;
                if (this.temp2.Estado == "Error Crear Materia") {
                    this.correcto1 = false;
                    this.error1 = true;
                    this.subiendo = false;
                }
                else {
                    this.correcto1 = true;
                    this.error1 = false;
                    this.subiendo = false;
                    this.resetForm(form);
                }
            });
        });
    }
    //Crear Grado en Mongo
    CrearGrado(form) {
        this.correcto2 = false;
        this.error2 = false;
        this.subiendo = true;
        const newGrado = {
            id_grado: form.value.id_grado,
            nombre_grado: form.value.nombre_grado
        };
        //console.log('datosGrado', newGrado);
        this.AuthAdminService.createGrade(newGrado).subscribe(res => {
            //console.log(res);
            this.temp2 = res;
            if (this.temp2.Estado == "Error Crear Grado") {
                this.correcto2 = false;
                this.error2 = true;
                this.subiendo = false;
            }
            else {
                this.correcto2 = true;
                this.error2 = false;
                this.subiendo = false;
                this.resetForm(form);
            }
        });
    }
    //Eliminar Materia de Mongo
    deleteMateria() {
        //console.log("id para eliminar:", this.materiaToSave.id_materia);
        this.AuthAdminService.deleteMateria(this.materiaToSave).subscribe(res => {
            //console.log(res);
            this.getOptions();
            this.materiaToSave = new _models_materia__WEBPACK_IMPORTED_MODULE_5__["MateriaI"]();
        });
        //window.location.reload();
    }
    //Eliminar Grado de Mongo
    deleteGrado() {
        //console.log("id para eliminar:", this.gradoToSave.id_competencia);
        this.AuthAdminService.deleteGrade(this.gradoToSave).subscribe(res => {
            //console.log(res);
            this.getOptions();
            this.gradoToSave = new _models_grado__WEBPACK_IMPORTED_MODULE_4__["GradoI"]();
        });
        //window.location.reload();
    }
    //Almacenar info temporal de una Competencia
    saveDataMateria(materiahtml) {
        this.materiaToSave = materiahtml;
        //console.log('docente guardada:', this.materiaToSave);
    }
    //Almacenar info temporal de una AreaMAteria
    saveDataGrado(gradohtml) {
        this.gradoToSave = gradohtml;
        //console.log('estudiante guardada:', this.gradoToSave);
    }
    saveDataColegio(colegiohtml) {
        this.colegioToSave = colegiohtml;
        //console.log('estudiante guardada:', this.gradoToSave);
    }
    //Resetear pagina
    resetPage() {
        window.location.reload();
    }
    //resetear Formulario
    resetForm(form) {
        if (form) {
            form.reset();
            this.newID = 0;
            this.temp = 0;
            this.AuthAdminService.selectedColegio = new _models_colegio__WEBPACK_IMPORTED_MODULE_3__["ColegioI"]();
            this.colegioSelected = false;
            this.getOptions();
        }
    }
    comprobacionLogin() {
        if (this.AuthAdminService.getIdAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
GestionarColegioAdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_6__["AuthAdminService"] }
];
GestionarColegioAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gestionar-colegio-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestionar-colegio-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestionar-colegio-admin.component.css */ "./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.css")).default]
    })
], GestionarColegioAdminComponent);



/***/ }),

/***/ "./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWRtaW4vZ2VzdGlvbmFyLWNvbXBldGVuY2lhcy1hZG1pbi9nZXN0aW9uYXItY29tcGV0ZW5jaWFzLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GestionarCompetenciasAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionarCompetenciasAdminComponent", function() { return GestionarCompetenciasAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");
/* harmony import */ var _models_competencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/competencia */ "./src/app/models/competencia.ts");
/* harmony import */ var _models_areaMateria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/areaMateria */ "./src/app/models/areaMateria.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let GestionarCompetenciasAdminComponent = class GestionarCompetenciasAdminComponent {
    constructor(router, AuthAdminService) {
        this.router = router;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.correcto1 = false;
        this.correcto2 = false;
        this.error1 = false;
        this.error2 = false;
        this.subiendo = false;
        this.getOptions();
        this.getCompetencias();
    }
    getOptions() {
        this.AuthAdminService.allGrade().subscribe(res => {
            this.grados = res;
        });
        this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
            this.areasMaterias = res;
        });
        this.AuthAdminService.loadAllColegios().subscribe(res => {
            this.colegios = res;
        });
    }
    getCompetencias() {
        this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
            this.areasMaterias = res;
            this.AuthAdminService.allCompetencias().subscribe(res => {
                this.AuthAdminService.Competencias = res;
                this.competenciasVisualizar = res;
                for (let i = 0; i < this.AuthAdminService.Competencias.length; i++) {
                    for (let n = 0; n < this.areasMaterias.length; n++) {
                        if (this.AuthAdminService.Competencias[i].id_areaMateria == this.areasMaterias[n].id_areaMateria) {
                            this.competenciasVisualizar[i].areaMateria = this.areasMaterias[n].nombre_areaMateria;
                        }
                    }
                }
                //console.log("actividades visualizar:", this.competenciasVisualizar)
            });
        });
    }
    //Crear Competencia en Mongo
    crearCompetencia(form) {
        this.correcto1 = false;
        this.error1 = false;
        this.subiendo = true;
        this.AuthAdminService.allCompetencias().subscribe(res => {
            this.AuthAdminService.Competencias = res;
            //crear Cont
            if (this.AuthAdminService.Competencias.length == 0) {
                this.newCont = 1;
            }
            else {
                if (this.AuthAdminService.Competencias.length) {
                    this.newCont = 1;
                }
                for (let n = 0; n < this.AuthAdminService.Competencias.length; n++) {
                    for (let i = 0; i < this.AuthAdminService.Competencias.length; i++) {
                        if (this.AuthAdminService.Competencias[i].id_colegio == form.value.id_colegioC) {
                            if (n + 1 == this.AuthAdminService.Competencias[i].cont) {
                                this.newCont = n + 2;
                                this.temp = 0;
                                i = this.AuthAdminService.Competencias.length;
                            }
                            else {
                                this.newCont = n + 1;
                                this.temp = 1;
                            }
                        }
                    }
                    if (this.temp == 1) {
                        n = this.AuthAdminService.Competencias.length + 1;
                    }
                }
            }
            // ID Competencia
            var idGlobal = "" + form.value.id_colegioC + this.newCont;
            this.newID = parseInt(idGlobal);
            const newCompetencia = {
                id_competencia: this.newID,
                cont: this.newCont,
                id_colegio: form.value.id_colegioC,
                nombre_competencia: form.value.nombre_competencia,
                id_areaMateria: form.value.id_areaMateria,
                gradoInicial: form.value.gradoInicial,
                gradoFinal: form.value.gradoFinal
            };
            //console.log('datos NewCompetencia', newCompetencia);
            this.AuthAdminService.createCompetencia(newCompetencia).subscribe(res => {
                //console.log(res);
                this.temp2 = res;
                if (this.temp2.Estado == "Error Crear Competencia") {
                    this.correcto1 = false;
                    this.error1 = true;
                    this.subiendo = false;
                }
                else {
                    this.correcto1 = true;
                    this.error1 = false;
                    this.subiendo = false;
                    this.resetForm(form);
                    this.getCompetencias();
                }
            });
        });
    }
    //Crear AreaMateria en Mongo
    CrearAreaMateria(form) {
        this.correcto2 = false;
        this.error2 = false;
        this.subiendo = true;
        this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
            this.AuthAdminService.AreasMaterias = res;
            //crear Cont
            if (this.AuthAdminService.AreasMaterias.length == 0) {
                this.newCont = 1;
            }
            else {
                if (this.AuthAdminService.AreasMaterias.length) {
                    this.newCont = 1;
                }
                for (let n = 0; n < this.AuthAdminService.AreasMaterias.length; n++) {
                    for (let i = 0; i < this.AuthAdminService.AreasMaterias.length; i++) {
                        if (this.AuthAdminService.AreasMaterias[i].id_colegio == form.value.id_colegioAM) {
                            if (n + 1 == this.AuthAdminService.AreasMaterias[i].cont) {
                                this.newCont = n + 2;
                                this.temp = 0;
                                i = this.AuthAdminService.AreasMaterias.length;
                            }
                            else {
                                this.newCont = n + 1;
                                this.temp = 1;
                            }
                        }
                    }
                    if (this.temp == 1) {
                        n = this.AuthAdminService.AreasMaterias.length + 1;
                    }
                }
            }
            // ID AreaMateria
            var idGlobal = "" + form.value.id_colegioAM + this.newCont;
            this.newID = parseInt(idGlobal);
            const newAreaMateria = {
                id_areaMateria: this.newID,
                cont: this.newCont,
                id_colegio: form.value.id_colegioAM,
                nombre_areaMateria: form.value.nombre_areaMateria
            };
            //console.log('datos NewArea', newAreaMateria);
            this.AuthAdminService.createAreaSubject(newAreaMateria).subscribe(res => {
                //console.log(res);
                this.temp2 = res;
                if (this.temp2.Estado == "Error Crear Area") {
                    this.correcto2 = false;
                    this.error2 = true;
                    this.subiendo = false;
                }
                else {
                    this.correcto2 = true;
                    this.error2 = false;
                    this.subiendo = false;
                    this.getOptions();
                    this.resetForm(form);
                }
            });
        });
    }
    //Almacenar info temporal de una Competencia
    saveDataCompetencia(competenciahtml) {
        this.competenciaToSave = competenciahtml;
        //console.log('actividad guardada:', this.competenciaToSave);
    }
    //Almacenar info temporal de una AreaMAteria
    saveDataAreaMateria(areaMateriahtml) {
        this.areaMateriaToSave = areaMateriahtml;
        //console.log('actividad guardada:', this.areaMateriaToSave);
    }
    //Eliminar Competencia de Mongo
    deleteCompetencia() {
        //console.log("id para eliminar:", this.competenciaToSave.id_competencia);
        this.AuthAdminService.deleteCompetencia(this.competenciaToSave).subscribe(res => {
            //console.log(res);
            this.getCompetencias();
            this.competenciaToSave = new _models_competencia__WEBPACK_IMPORTED_MODULE_2__["CompetenciaI"]();
        });
        //window.location.reload();
    }
    //Eliminar AreaMateria de Mongo
    deleteAreaMateria() {
        //console.log("id para eliminar:", this.areaMateriaToSave.id_areaMateria);
        this.AuthAdminService.deleteAreaSubject(this.areaMateriaToSave).subscribe(res => {
            //console.log(res);
            this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
                this.areasMaterias = res;
                this.areaMateriaToSave = new _models_areaMateria__WEBPACK_IMPORTED_MODULE_3__["AreaMateriaI"]();
            });
        });
        //window.location.reload();
    }
    //Resetear pagina
    resetPage() {
        window.location.reload();
    }
    //resetear Formulario
    resetForm(form) {
        if (form) {
            form.reset();
            this.newID = 1;
            this.temp = 0;
        }
    }
    comprobacionLogin() {
        if (this.AuthAdminService.getIdAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
GestionarCompetenciasAdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_1__["AuthAdminService"] }
];
GestionarCompetenciasAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-gestionar-competencias-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestionar-competencias-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestionar-competencias-admin.component.css */ "./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.css")).default]
    })
], GestionarCompetenciasAdminComponent);



/***/ }),

/***/ "./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWRtaW4vZ2VzdGlvbmFyLXVzdWFyaW9zLWFkbWluL2dlc3Rpb25hci11c3Vhcmlvcy1hZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GestionarUsuariosAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionarUsuariosAdminComponent", function() { return GestionarUsuariosAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");
/* harmony import */ var _models_docente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/docente */ "./src/app/models/docente.ts");
/* harmony import */ var _models_estudiante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/estudiante */ "./src/app/models/estudiante.ts");






let GestionarUsuariosAdminComponent = class GestionarUsuariosAdminComponent {
    constructor(router, AuthAdminService) {
        this.router = router;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.error1 = false;
        this.error2 = false;
        this.profesorSelected = false;
        this.estudianteSelected = false;
        this.AuthAdminService.selectedDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_4__["DocenteI"]();
        this.AuthAdminService.selectedEstudiante = new _models_estudiante__WEBPACK_IMPORTED_MODULE_5__["EstuadianteI"]();
        this.docenteToSave = new _models_docente__WEBPACK_IMPORTED_MODULE_4__["DocenteI"]();
        this.estudianteToSave = new _models_estudiante__WEBPACK_IMPORTED_MODULE_5__["EstuadianteI"]();
        this.cursos = [{ id_curso: 1, nombre_curso: "A" }, { id_curso: 2, nombre_curso: "B" },
            { id_curso: 3, nombre_curso: "C" }, { id_curso: 4, nombre_curso: "D" }];
        this.getOptions();
    }
    getOptions() {
        this.AuthAdminService.allGrade().subscribe(res => {
            this.grados = res;
        });
        this.AuthAdminService.loadAllColegios().subscribe(res => {
            this.colegios = res;
            this.AuthAdminService.loadAllEstudiantes().subscribe(res => {
                this.estudantes = res;
                this.estudiantesVisualizar = res;
                for (let n = 0; n < this.estudantes.length; n++) {
                    for (let i = 0; i < this.cursos.length; i++) {
                        if (this.estudantes[n].curso_estudiante == this.cursos[i].id_curso) {
                            this.estudiantesVisualizar[n].curso = this.cursos[i].nombre_curso;
                        }
                    }
                    for (let i = 0; i < this.colegios.length; i++) {
                        if (this.estudantes[n].id_colegio == this.colegios[i].id_colegio) {
                            this.estudiantesVisualizar[n].colegio = this.colegios[i].nombre_colegio;
                        }
                    }
                }
                //console.log("estudiantes visualizar:", this.estudiantesVisualizar);
                this.AuthAdminService.loadAllDocentes().subscribe(res => {
                    this.docentes = res;
                    this.docenteVisualizar = res;
                    for (let n = 0; n < this.docentes.length; n++) {
                        for (let i = 0; i < this.colegios.length; i++) {
                            if (this.docentes[n].id_colegio == this.colegios[i].id_colegio) {
                                this.docenteVisualizar[n].colegio = this.colegios[i].nombre_colegio;
                            }
                        }
                    }
                    //console.log("docentes visualizar:", this.docenteVisualizar);
                });
            });
        });
    }
    //Imprimir datos del docente en el Form 
    getDocenteinForm(docentehtml) {
        this.AuthAdminService.selectedDocente = docentehtml;
        //console.log('info docente', this.AuthAdminService.selectedDocente);
        this.profesorSelected = true;
    }
    //Imprimir datos del Estudiante en el Form 
    getEstudianteinForm(estudiantehtml) {
        this.AuthAdminService.selectedEstudiante = estudiantehtml;
        //console.log('info docente', this.AuthAdminService.selectedEstudiante);
        this.estudianteSelected = true;
    }
    //Actualizar datos del docente
    actualizarDocente(form) {
        this.error1 = true;
        if (this.profesorSelected) {
            this.error1 = false;
            const infoDocente = {
                id_docente: this.AuthAdminService.selectedDocente.id_docente,
                nombre_docente: form.value.nombre_docente,
                apellido_docente: form.value.apellido_docente,
                nombre_usuario: form.value.nombre_usuario,
                correo_electronico: form.value.correo_electronico,
                contrasena: form.value.contrasena
            };
            this.AuthAdminService.uploadDocente(infoDocente).subscribe(res => {
                //console.log(res);
                this.getOptions();
                this.resetForm(form);
            });
        }
    }
    //Actualizar datos del Estudiante
    actualizarEstudiante(form) {
        this.error2 = true;
        if (this.estudianteSelected) {
            this.error2 = false;
            const infoEstudiante = {
                id_estudiante: this.AuthAdminService.selectedEstudiante.id_estudiante,
                nombre_estudiante: form.value.nombre_estudiante,
                apellido_estudiante: form.value.apellido_estudiante,
                grado_estudiante: form.value.grado_estudiante,
                curso_estudiante: form.value.curso_estudiante,
                nombre_usuario: form.value.nombre_usuario,
                contrasena: form.value.contrasena,
                correo_electronico: form.value.correo_electronico
            };
            console.log();
            this.AuthAdminService.uploadEstudiante(infoEstudiante).subscribe(res => {
                //console.log(res);
                this.getOptions();
                this.resetForm(form);
            });
        }
    }
    //Eliminar Docente de Mongo
    deleteDocente() {
        //console.log("id para eliminar:", this.docenteToSave.id_docente);
        this.AuthAdminService.deleteDocente(this.docenteToSave).subscribe(res => {
            //console.log(res);
            this.AuthAdminService.loadAllSubjectActives().subscribe(res => {
                this.MateriaActiva = res;
                for (let a = 0; a < this.MateriaActiva.length; a++) {
                    if (this.MateriaActiva[a].id_docente == this.docenteToSave.id_docente) {
                        this.AuthAdminService.deleteSubjectActive(this.MateriaActiva[a]).subscribe(res => {
                            //console.log(res);
                        });
                    }
                }
                this.getOptions();
                this.docenteToSave = new _models_docente__WEBPACK_IMPORTED_MODULE_4__["DocenteI"]();
            });
        });
        //window.location.reload();
    }
    //Eliminar Estudiante de Mongo
    deleteEstudiante() {
        //console.log("id para eliminar:", this.competenciaToSave.id_competencia);
        this.AuthAdminService.deleteEstudiante(this.estudianteToSave).subscribe(res => {
            //console.log(res);
            this.getOptions();
            this.estudianteToSave = new _models_estudiante__WEBPACK_IMPORTED_MODULE_5__["EstuadianteI"]();
        });
        //window.location.reload();
    }
    //Almacenar info temporal de una Competencia
    saveDataDocente(docentehtml) {
        this.docenteToSave = docentehtml;
        //console.log('docente guardada:', this.docenteToSave);
    }
    //Almacenar info temporal de una AreaMAteria
    saveDataEstudiante(estudiantehtml) {
        this.estudianteToSave = estudiantehtml;
        //console.log('estudiante guardada:', this.estudianteToSave);
    }
    //Resetear pagina
    resetPage() {
        window.location.reload();
    }
    //resetear Formulario
    resetForm(form) {
        if (form) {
            form.reset();
            this.getOptions();
            this.AuthAdminService.selectedDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_4__["DocenteI"]();
            this.AuthAdminService.selectedEstudiante = new _models_estudiante__WEBPACK_IMPORTED_MODULE_5__["EstuadianteI"]();
            this.docenteToSave = new _models_docente__WEBPACK_IMPORTED_MODULE_4__["DocenteI"]();
            this.estudianteToSave = new _models_estudiante__WEBPACK_IMPORTED_MODULE_5__["EstuadianteI"]();
            this.profesorSelected = false;
            this.estudianteSelected = false;
        }
    }
    comprobacionLogin() {
        if (this.AuthAdminService.getIdAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
GestionarUsuariosAdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_3__["AuthAdminService"] }
];
GestionarUsuariosAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gestionar-usuarios-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestionar-usuarios-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestionar-usuarios-admin.component.css */ "./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.css")).default]
    })
], GestionarUsuariosAdminComponent);



/***/ }),

/***/ "./src/app/components/Admin/header-admin/header-admin.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/Admin/header-admin/header-admin.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWRtaW4vaGVhZGVyLWFkbWluL2hlYWRlci1hZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/Admin/header-admin/header-admin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/Admin/header-admin/header-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAdminComponent", function() { return HeaderAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderAdminComponent = class HeaderAdminComponent {
    constructor(router, AuthAdminService) {
        this.router = router;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        this.IPServer = this.AuthAdminService.loadIPServer();
        this.cambioCorrecto = false;
        this.cambiando = false;
    }
    logOut() {
        this.AuthAdminService.logout();
        this.router.navigateByUrl('/login');
    }
    //Abrir nueva ventana para ver el Manual
    verManual() {
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/manual.pdf';
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    actualizarContrasena(form) {
        this.cambioCorrecto = false;
        this.cambiando = true;
        const newC = {
            id_admin: this.AuthAdminService.getIdAdmin(),
            contrasena: form.value.contrasena
        };
        this.AuthAdminService.uploadInfoLoginAdmin(newC).subscribe(res => {
            //console.log(res);
            this.cambioCorrecto = true;
            this.cambiando = false;
        });
    }
};
HeaderAdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_1__["AuthAdminService"] }
];
HeaderAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/header-admin/header-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-admin.component.css */ "./src/app/components/Admin/header-admin/header-admin.component.css")).default]
    })
], HeaderAdminComponent);



/***/ }),

/***/ "./src/app/components/Admin/inicio-admin/inicio-admin.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/Admin/inicio-admin/inicio-admin.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWRtaW4vaW5pY2lvLWFkbWluL2luaWNpby1hZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/Admin/inicio-admin/inicio-admin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/Admin/inicio-admin/inicio-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: InicioAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioAdminComponent", function() { return InicioAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let InicioAdminComponent = class InicioAdminComponent {
    constructor(AuthAdminService, router) {
        this.AuthAdminService = AuthAdminService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
    }
    comprobacionLogin() {
        if (this.AuthAdminService.getIdAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
InicioAdminComponent.ctorParameters = () => [
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_1__["AuthAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Admin/inicio-admin/inicio-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio-admin.component.css */ "./src/app/components/Admin/inicio-admin/inicio-admin.component.css")).default]
    })
], InicioAdminComponent);



/***/ }),

/***/ "./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvVmlzaXRhbnRlL2J1c3F1ZWRhLXZpc2l0YW50ZS9idXNxdWVkYS12aXNpdGFudGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BusquedaVisitanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaVisitanteComponent", function() { return BusquedaVisitanteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");






let BusquedaVisitanteComponent = class BusquedaVisitanteComponent {
    constructor(ActividadService, ContentREAService, router, AuthAdminService) {
        this.ActividadService = ActividadService;
        this.ContentREAService = ContentREAService;
        this.router = router;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.ID_TipoContenido_Taller = 5;
        this.IPServer = this.AuthAdminService.loadIPServer();
        this.getOptions();
        this.getContenidos();
        this.getActividades();
        this.contenidoAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
        this.tallerAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
    }
    //Obtener los datos de los Options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenido = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
        });
        this.ActividadService.allDocente().subscribe(res => {
            this.docente = res;
        });
    }
    //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
    getContenidos() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            this.ContentREAService.allType().subscribe(res => {
                this.tipoContenido = res;
                this.ContentREAService.allContent().subscribe(res => {
                    //console.log(res);
                    this.ContentREAService.contenidosREA = res;
                    this.contenidoVisualizar = res;
                    this.contenidoVisualizar.reverse();
                    //console.log(this.ContentREAService.contenidosREA.length);
                    for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
                        for (let n = 0; n < this.tipoContenido.length; n++) {
                            if (this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido) {
                                this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
                            }
                        }
                        for (let m = 0; m < this.materia.length; m++) {
                            if (this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia) {
                                this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
                            }
                        }
                    }
                    //console.log("contenido visualizar final:", this.contenidoVisualizar)
                });
            });
        });
    }
    //consultar todos las Actividades y verificar el nombre de la materia, competencia y profesor con sus respectivos ID´s
    getActividades() {
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
            this.ActividadService.allDocente().subscribe(res => {
                this.docente = res;
                this.ActividadService.allActivities().subscribe(res => {
                    //console.log(res);
                    this.ActividadService.actividades = res;
                    this.actividadVisualizar = res;
                    this.actividadVisualizar.reverse();
                    //console.log(this.ActividadService.actividades.length);
                    for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                        this.actividadVisualizar[i].autor == this.ActividadService.actividades[i].autor;
                        for (let n = 0; n < this.competencia.length; n++) {
                            if (this.ActividadService.actividades[i].id_competencia == this.competencia[n].id_competencia) {
                                this.actividadVisualizar[i].competencia = this.competencia[n].nombre_competencia;
                            }
                        }
                        for (let m = 0; m < this.docente.length; m++) {
                            if (this.ActividadService.actividades[i].id_docente == this.docente[m].id_docente) {
                                this.actividadVisualizar[i].docente = (this.docente[m].nombre_docente + " " + this.docente[m].apellido_docente);
                            }
                        }
                        for (let p = 0; p < this.materia.length; p++) {
                            if (this.ActividadService.actividades[i].id_materia == this.materia[p].id_materia) {
                                this.actividadVisualizar[i].materia = this.materia[p].nombre_materia;
                            }
                        }
                    }
                    //console.log("actividades visualizar:", this.actividadVisualizar)
                });
            });
        });
    }
    //Imprimir datos de la Actividad seleccionanda en el Modal 
    getActividadinModal(actividad) {
        this.ActividadService.selectedActividad = actividad;
        this.saveDataActivity(actividad);
        //console.log(this.ContentREAService.contenidosREA);
        const TallerInfo = {
            id_contenidoREA: this.ActividadService.selectedActividad.id_taller,
        };
        //Obtener contenido original de la actividad
        this.ContentREAService.loadContentREA(this.ActividadService.selectedActividad).subscribe(res => {
            this.contenidoRes = res;
            this.contenidoAct.nombre_CREA = this.contenidoRes.content.nombre_CREA;
            this.contenidoAct.descripcion_CREA = this.contenidoRes.content.descripcion_CREA;
            this.contenidoAct.id_grado = this.contenidoRes.content.id_grado;
            for (let x = 0; x < this.materia.length; x++) {
                if (this.contenidoRes.content.id_materia == this.materia[x].id_materia) {
                    this.contenidoAct.materia = this.materia[x].nombre_materia;
                }
            }
            for (let y = 0; y < this.tipoContenido.length; y++) {
                if (this.contenidoRes.content.tipo_CREA == this.tipoContenido[y].id_tipoContenido) {
                    this.contenidoAct.nombre_tipo_CREA = this.tipoContenido[y].nombre_tipoContenido;
                }
            }
            //console.log('contenidoAct', this.contenidoAct);
        });
        //Obtener taller original de la actividad
        this.ContentREAService.loadContentREA(TallerInfo).subscribe(res => {
            this.tallerRes = res;
            this.tallerAct.nombre_CREA = this.tallerRes.content.nombre_CREA;
            this.tallerAct.descripcion_CREA = this.tallerRes.content.descripcion_CREA;
            this.tallerAct.id_grado = this.tallerRes.content.id_grado;
            for (let x = 0; x < this.materia.length; x++) {
                if (this.tallerRes.content.id_materia == this.materia[x].id_materia) {
                    this.tallerAct.materia = this.materia[x].nombre_materia;
                }
            }
            for (let y = 0; y < this.tipoContenido.length; y++) {
                if (this.tallerRes.content.tipo_CREA == this.tipoContenido[y].id_tipoContenido) {
                    this.tallerAct.nombre_tipo_CREA = this.tipoContenido[y].nombre_tipoContenido;
                }
            }
            //console.log('contenidoAct', this.contenidoAct);
        });
    }
    //Abrir nueva ventana con el contenido Buscado
    verContenido(contenidoREAhtml) {
        const urlcut = contenidoREAhtml.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Abrir nueva ventana con el Contenido de la actividad Buscada
    verContenidoActividad() {
        const urlcut = this.contenidoRes.content.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Abrir nueva ventana con el Taller de la actividad Buscada
    verTallerActividad() {
        const urlcut = this.tallerRes.content.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Almacenar info temporal de un ContenidoREA
    saveDataContent(contenidoREAhtml) {
        this.contenidoToSave = contenidoREAhtml;
        //console.log("contenido guardado:", this.contenidoToSave);
    }
    //Almacenar info temporal de una Actividad
    saveDataActivity(actividadhtml) {
        this.actividadToSave = actividadhtml;
        //console.log("actividad guardada:", this.actividadToSave);
    }
    //Almacenar info temporal de un Taller
    saveDataTaller(tallerhtml) {
        this.tallerToSave = tallerhtml;
        //console.log("taller guardado:", this.tallerToSave);
    }
};
BusquedaVisitanteComponent.ctorParameters = () => [
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ActividadService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_5__["AuthAdminService"] }
];
BusquedaVisitanteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-busqueda-visitante',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busqueda-visitante.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./busqueda-visitante.component.css */ "./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.css")).default]
    })
], BusquedaVisitanteComponent);



/***/ }),

/***/ "./src/app/components/Visitante/header-visitante/header-visitante.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/Visitante/header-visitante/header-visitante.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvVmlzaXRhbnRlL2hlYWRlci12aXNpdGFudGUvaGVhZGVyLXZpc2l0YW50ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/Visitante/header-visitante/header-visitante.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/Visitante/header-visitante/header-visitante.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HeaderVisitanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderVisitanteComponent", function() { return HeaderVisitanteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderVisitanteComponent = class HeaderVisitanteComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    salirBusquedaVisitante() {
        console.log('logout Visitante');
        this.router.navigateByUrl('/login');
    }
};
HeaderVisitanteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderVisitanteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-visitante',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-visitante.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Visitante/header-visitante/header-visitante.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-visitante.component.css */ "./src/app/components/Visitante/header-visitante/header-visitante.component.css")).default]
    })
], HeaderVisitanteComponent);



/***/ }),

/***/ "./src/app/components/administrar-docente/administrar-docente.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/administrar-docente/administrar-docente.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXItZG9jZW50ZS9hZG1pbmlzdHJhci1kb2NlbnRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/administrar-docente/administrar-docente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/administrar-docente/administrar-docente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdministrarDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrarDocenteComponent", function() { return AdministrarDocenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_docente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/docente */ "./src/app/models/docente.ts");
/* harmony import */ var _models_colegio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/colegio */ "./src/app/models/colegio.ts");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AdministrarDocenteComponent = class AdministrarDocenteComponent {
    constructor(ContentREAService, AuthDService, router) {
        this.ContentREAService = ContentREAService;
        this.AuthDService = AuthDService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.mensaje = false;
        this.correcto = false;
        this.error = false;
        this.correctoInfo = false;
        this.mensajeInfo = false;
        this.DocenteInfo = new _models_docente__WEBPACK_IMPORTED_MODULE_3__["DocenteI"];
        this.ColegioInfo = new _models_colegio__WEBPACK_IMPORTED_MODULE_4__["ColegioI"];
        this.getOptions();
        this.idDocente = this.AuthDService.getIdDocente();
        this.nombreApellidoDocente = this.AuthDService.getnombreApellidoDocente();
        this.idColegio = this.AuthDService.getIdColegioDocente();
        this.getDocenteinForm();
        this.getInformacionCompleta();
    }
    //Obtener los datos de los options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            //console.log("1:",this.materia.length);
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
    }
    //Obtener informacion y listado de todas las MateriasActivas
    getInformacionCompleta() {
        this.idDocente = this.AuthDService.getIdDocente();
        const infoDocente = {
            id_docente: this.idDocente
        };
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            //console.log('info materia',this.materia.length);
            this.AuthDService.loadDocente(infoDocente).subscribe(res => {
                this.resDocente = res;
                this.DocenteInfo = this.resDocente.teacher;
                //console.log('info docente', this.resDocente);
                this.AuthDService.loadColegio(this.resDocente.teacher).subscribe(res => {
                    this.resColegio = res;
                    this.ColegioInfo = this.resColegio.school;
                    //console.log('info colegio', this.resColegio);
                    this.AuthDService.loadAllSubjectActives().subscribe(res => {
                        this.AuthDService.MateriasActivas = res;
                        this.MateriaActivaInfo = res;
                        for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
                            for (let m = 0; m < this.materia.length; m++) {
                                if (this.AuthDService.MateriasActivas[i].id_materia == this.materia[m].id_materia) {
                                    this.MateriaActivaInfo[i].nombre_materia = this.materia[m].nombre_materia;
                                }
                            }
                        }
                    });
                });
            });
        });
    }
    //Crear una MateriaActiva
    CrearMateriaActiva(form) {
        this.mensaje = true;
        this.correcto = false;
        this.error = false;
        this.AuthDService.loadAllSubjectActives().subscribe(res => {
            this.AuthDService.MateriasActivas = res;
            this.ContentREAService.allSubject().subscribe(res => {
                this.materia = res;
                //console.log('info materia',this.materia.length);
                //Crear Cont MateriaACtiva
                if (this.AuthDService.MateriasActivas.length == 0) {
                    this.newContMA = 1;
                }
                else {
                    if (this.AuthDService.MateriasActivas.length) {
                        this.newContMA = 1;
                    }
                    for (let n = 0; n < this.AuthDService.MateriasActivas.length; n++) {
                        for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
                            if (this.AuthDService.MateriasActivas[i].id_docente == this.idDocente) {
                                if (this.AuthDService.MateriasActivas.length) {
                                    this.newContMA = 1;
                                }
                                if (n + 1 == this.AuthDService.MateriasActivas[i].cont) {
                                    this.newContMA = n + 2;
                                    this.temp = 0;
                                    i = this.AuthDService.MateriasActivas.length;
                                }
                                else {
                                    this.newContMA = n + 1;
                                    this.temp = 1;
                                }
                            }
                        }
                        if (this.temp == 1) {
                            n = this.AuthDService.MateriasActivas.length + 1;
                        }
                    }
                }
                // ID materiaActiva
                var idGlobalMA = "" + this.idDocente + this.newContMA;
                this.newIDMA = parseInt(idGlobalMA);
                for (let x = 0; x < this.materia.length; x++) {
                    if (this.materia[x].id_materia == form.value.id_materia) {
                        this.urlTemp = this.materia[x].url_imagen;
                    }
                }
                //console.log('form', form.value.nombre_materiaActiva);
                const newMateriaActiva = {
                    id_materiaActiva: this.newIDMA,
                    cont: this.newContMA,
                    nombre_materiaActiva: form.value.nombre_materiaActiva,
                    id_materia: form.value.id_materia,
                    id_grado: form.value.id_grado,
                    id_docente: this.idDocente,
                    id_colegio: this.idColegio,
                    url_imagen: this.urlTemp
                };
                //console.log('datosContenido', newMateriaActiva);
                this.AuthDService.createSubjectActive(newMateriaActiva).subscribe(res => {
                    //console.log(res);
                    this.temp2 = res;
                    if (this.temp2.Estado == "Error Crear Materia Activa") {
                        this.mensaje = false;
                        this.correcto = false;
                        this.error = true;
                    }
                    if (this.temp2.Estado == 'Materia Activa Creada') {
                        this.mensaje = false;
                        this.correcto = true;
                        this.error = false;
                        this.getInformacionCompleta();
                        this.resetForm(form);
                    }
                });
            });
        });
    }
    //Almacenar info temporal de una materiaActiva
    saveMateriaActivaData(materiaActivahtml) {
        this.materiaActivaToSave = materiaActivahtml;
        //console.log("contenido guardado:", this.materiaActivaToSave);
    }
    //Eliminar materiaActiva de Mongo
    deleteMateriaActiva() {
        //console.log("id para eliminar:", this.materiaActivaToSave.id_materiaActiva);
        this.correctoInfo = false;
        this.mensajeInfo = true;
        this.AuthDService.deleteSubjectActive(this.materiaActivaToSave).subscribe(res => {
            //console.log(res);
            this.correctoInfo = true;
            this.mensajeInfo = false;
            this.getInformacionCompleta();
            //window.location.reload();
        });
    }
    //Imprimir datos del docente en el Form 
    getDocenteinForm() {
        this.idDocente = this.AuthDService.getIdDocente();
        const infoDocente = {
            id_docente: this.idDocente
        };
        this.AuthDService.loadDocente(infoDocente).subscribe(res => {
            this.resDocente = res;
            this.AuthDService.selectedDocente = this.resDocente.teacher;
            //console.log('info docente', this.AuthDService.selectedDocente);
        });
    }
    //Actualizar datos Personales del docente
    actualizarInfoPersonalDocente(form) {
        const infoPersonalDocente = {
            id_docente: this.idDocente,
            nombre_docente: form.value.nombre_docente,
            apellido_docente: form.value.apellido_docente
        };
        this.correctoInfo = false;
        this.mensajeInfo = true;
        this.AuthDService.uploadInfoPersonalDocente(infoPersonalDocente).subscribe(res => {
            //console.log(res);
            this.correctoInfo = true;
            this.mensajeInfo = false;
            this.getDocenteinForm();
        });
    }
    //Actualizar datos de Login del docente
    actualizarInfoLoginDocente(form) {
        const infoLoginDocente = {
            id_docente: this.idDocente,
            nombre_usuario: form.value.nombre_usuario,
            correo_electronico: form.value.correo_electronico,
            contrasena: form.value.contrasena
        };
        this.correctoInfo = false;
        this.mensajeInfo = true;
        this.AuthDService.uploadInfoLoginDocente(infoLoginDocente).subscribe(res => {
            //console.log(res);
            this.correctoInfo = true;
            this.mensajeInfo = false;
            this.getDocenteinForm();
        });
    }
    resetPage() {
        window.location.reload();
    }
    resetForm(form) {
        if (form) {
            form.reset();
        }
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AdministrarDocenteComponent.ctorParameters = () => [
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_5__["ContentREAService"] },
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__["AuthDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AdministrarDocenteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-administrar-docente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./administrar-docente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrar-docente/administrar-docente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./administrar-docente.component.css */ "./src/app/components/administrar-docente/administrar-docente.component.css")).default]
    })
], AdministrarDocenteComponent);



/***/ }),

/***/ "./src/app/components/borrar-actividad/borrar-actividad.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/borrar-actividad/borrar-actividad.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9ycmFyLWFjdGl2aWRhZC9ib3JyYXItYWN0aXZpZGFkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/borrar-actividad/borrar-actividad.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/borrar-actividad/borrar-actividad.component.ts ***!
  \***************************************************************************/
/*! exports provided: BorrarActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrarActividadComponent", function() { return BorrarActividadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");






let BorrarActividadComponent = class BorrarActividadComponent {
    constructor(AuthDService, ActividadService, ContentREAService, router) {
        this.AuthDService = AuthDService;
        this.ActividadService = ActividadService;
        this.ContentREAService = ContentREAService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.correcto = false;
        this.mensaje = false;
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        this.getOptions();
        this.getActividades();
    }
    //Obtener los datos de los options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
        });
        this.ActividadService.allDocente().subscribe(res => {
            this.docente = res;
        });
    }
    //consultar todos las Actividades y verificar el nombre de la materia, competencia y profesor con sus respectivos ID´s
    getActividades() {
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
            this.ActividadService.allDocente().subscribe(res => {
                this.docente = res;
                this.ActividadService.allActivities().subscribe(res => {
                    //console.log(res);
                    this.ActividadService.actividades = res;
                    this.actividadVisualizar = res;
                    this.actividadVisualizar.reverse();
                    //console.log(this.ActividadService.actividades.length);
                    for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                        for (let n = 0; n < this.competencia.length; n++) {
                            if (this.ActividadService.actividades[i].id_competencia == this.competencia[n].id_competencia) {
                                this.actividadVisualizar[i].competencia = this.competencia[n].nombre_competencia;
                            }
                        }
                        for (let m = 0; m < this.docente.length; m++) {
                            if (this.ActividadService.actividades[i].id_docente == this.docente[m].id_docente) {
                                this.actividadVisualizar[i].docente = (this.docente[m].nombre_docente + " " + this.docente[m].apellido_docente);
                            }
                        }
                        for (let p = 0; p < this.materia.length; p++) {
                            if (this.ActividadService.actividades[i].id_materia == this.materia[p].id_materia) {
                                this.actividadVisualizar[i].materia = this.materia[p].nombre_materia;
                            }
                        }
                    }
                    //console.log("actividades visualizar:", this.actividadVisualizar)
                });
            });
        });
    }
    //Almacenar info temporal de una Actividad
    saveDataActivity(actividadhtml) {
        this.actividadToSave = actividadhtml;
        //console.log('actividad guardada:', this.actividadToSave);
    }
    //Buscar y guardar info de 
    BusquedaYCambioEstadoContent(id_contenido) {
        const id_contenidoBusqueda = {
            id_contenidoREA: id_contenido
        };
        this.ContentREAService.loadContentREA(id_contenidoBusqueda).subscribe(res => {
            this.contenidoToSave = res;
            //console.log('contenido encontrado', this.contenidoToSave);
            const infoContenidoREA = {
                id_CREA: id_contenido,
                en_uso: (this.contenidoToSave.content.en_uso - 1)
            };
            this.ContentREAService.uploadEstadoContentREA(infoContenidoREA).subscribe(res => {
                //console.log(res);
            });
        });
    }
    //Eliminar Actividad de Mongo
    deleteActividad() {
        this.correcto = false;
        this.mensaje = true;
        //console.log("id para eliminar:", this.actividadToSave.id_actividad);
        this.BusquedaYCambioEstadoContent(this.actividadToSave.id_contenidoREA);
        this.BusquedaYCambioEstadoContent(this.actividadToSave.id_taller);
        this.ActividadService.deleteActivity(this.actividadToSave).subscribe(res => {
            //console.log(res);
            this.correcto = true;
            this.mensaje = false;
            this.getActividades();
        });
        //window.location.reload();
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
BorrarActividadComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__["AuthDService"] },
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ActividadService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BorrarActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-borrar-actividad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./borrar-actividad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/borrar-actividad/borrar-actividad.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./borrar-actividad.component.css */ "./src/app/components/borrar-actividad/borrar-actividad.component.css")).default]
    })
], BorrarActividadComponent);



/***/ }),

/***/ "./src/app/components/borrar-contenido/borrar-contenido.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/borrar-contenido/borrar-contenido.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9ycmFyLWNvbnRlbmlkby9ib3JyYXItY29udGVuaWRvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/borrar-contenido/borrar-contenido.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/borrar-contenido/borrar-contenido.component.ts ***!
  \***************************************************************************/
/*! exports provided: BorrarContenidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrarContenidoComponent", function() { return BorrarContenidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");





let BorrarContenidoComponent = class BorrarContenidoComponent {
    constructor(AuthDService, ContentREAService, router) {
        this.AuthDService = AuthDService;
        this.ContentREAService = ContentREAService;
        this.router = router;
        //this.getOptions();
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.correcto = false;
        this.mensaje = false;
        this.getOptions();
        this.getContenidos();
    }
    //Obtener los datos de los options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            //console.log("1:",this.materia.length);
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenido = res;
            //console.log("2:",this.tipoContenido.length);
        });
    }
    //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
    getContenidos() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            //console.log("1:",this.materia.length);
            this.ContentREAService.allType().subscribe(res => {
                this.tipoContenido = res;
                //console.log("2:",this.tipoContenido.length);
                this.ContentREAService.allContent().subscribe(res => {
                    //console.log(res);
                    this.ContentREAService.contenidosREA = res;
                    this.contenidoVisualizar = res;
                    this.contenidoVisualizar.reverse();
                    //console.log(this.ContentREAService.contenidosREA.length);
                    //console.log("contenido visualizar:", this.contenidoVisualizar);
                    for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
                        for (let n = 0; n < this.tipoContenido.length; n++) {
                            if (this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido) {
                                this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
                            }
                        }
                        for (let m = 0; m < this.materia.length; m++) {
                            if (this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia) {
                                this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
                            }
                        }
                    }
                    //console.log("contenido visualizar final:", this.contenidoVisualizar)
                });
            });
        });
    }
    //Almacenar info temporal de un ContenidoREA
    saveData(contenidoREAhtml) {
        this.contenidoToSave = contenidoREAhtml;
        //console.log("contenido guardado:", this.contenidoToSave);
    }
    //Eliminar contenidoREA de Mongo
    deleteContenido() {
        this.correcto = false;
        this.mensaje = true;
        //console.log("id para eliminar:", this.contenidoToSave.id_CREA);
        this.ContentREAService.deleteContentREA(this.contenidoToSave).subscribe(res => {
            //console.log(res);
            this.correcto = true;
            this.mensaje = false;
            this.getContenidos();
        });
        //window.location.reload();
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
BorrarContenidoComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_4__["AuthDService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BorrarContenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-borrar-contenido',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./borrar-contenido.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/borrar-contenido/borrar-contenido.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./borrar-contenido.component.css */ "./src/app/components/borrar-contenido/borrar-contenido.component.css")).default]
    })
], BorrarContenidoComponent);



/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/busqueda/busqueda.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzcXVlZGEvYnVzcXVlZGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/busqueda/busqueda.component.ts ***!
  \***********************************************************/
/*! exports provided: BusquedaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function() { return BusquedaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");






let BusquedaComponent = class BusquedaComponent {
    constructor(AuthDService, ActividadService, ContentREAService, router) {
        this.AuthDService = AuthDService;
        this.ActividadService = ActividadService;
        this.ContentREAService = ContentREAService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.ID_TipoContenido_Taller = 5;
        this.IPServer = this.ContentREAService.loadIPServer();
        this.getOptions();
        this.getContenidos();
        this.getActividades();
        this.contenidoAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
        this.tallerAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
    }
    //Obtener los datos de los Options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenido = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
        });
        this.ActividadService.allDocente().subscribe(res => {
            this.docente = res;
        });
    }
    //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
    getContenidos() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            this.ContentREAService.allType().subscribe(res => {
                this.tipoContenido = res;
                this.ContentREAService.allContent().subscribe(res => {
                    //console.log(res);
                    this.ContentREAService.contenidosREA = res;
                    this.contenidoVisualizar = res;
                    this.contenidoVisualizar.reverse();
                    //console.log(this.ContentREAService.contenidosREA.length);
                    for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
                        for (let n = 0; n < this.tipoContenido.length; n++) {
                            if (this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido) {
                                this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
                            }
                        }
                        for (let m = 0; m < this.materia.length; m++) {
                            if (this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia) {
                                this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
                            }
                        }
                    }
                    //console.log("contenido visualizar final:", this.contenidoVisualizar)
                });
            });
        });
    }
    //consultar todos las Actividades y verificar el nombre de la materia, competencia y profesor con sus respectivos ID´s
    getActividades() {
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
            this.ActividadService.allDocente().subscribe(res => {
                this.docente = res;
                this.ActividadService.allActivities().subscribe(res => {
                    //console.log(res);
                    this.ActividadService.actividades = res;
                    this.actividadVisualizar = res;
                    this.actividadVisualizar.reverse();
                    //console.log(this.ActividadService.actividades.length);
                    for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                        this.actividadVisualizar[i].autor == this.ActividadService.actividades[i].autor;
                        for (let n = 0; n < this.competencia.length; n++) {
                            if (this.ActividadService.actividades[i].id_competencia == this.competencia[n].id_competencia) {
                                this.actividadVisualizar[i].competencia = this.competencia[n].nombre_competencia;
                            }
                        }
                        for (let m = 0; m < this.docente.length; m++) {
                            if (this.ActividadService.actividades[i].id_docente == this.docente[m].id_docente) {
                                this.actividadVisualizar[i].docente = (this.docente[m].nombre_docente + " " + this.docente[m].apellido_docente);
                            }
                        }
                        for (let p = 0; p < this.materia.length; p++) {
                            if (this.ActividadService.actividades[i].id_materia == this.materia[p].id_materia) {
                                this.actividadVisualizar[i].materia = this.materia[p].nombre_materia;
                            }
                        }
                    }
                    //console.log("actividades visualizar:", this.actividadVisualizar)
                });
            });
        });
    }
    //Imprimir datos de la Actividad seleccionanda en el Modal 
    getActividadinModal(actividad) {
        this.ActividadService.selectedActividad = actividad;
        this.saveDataActivity(actividad);
        //console.log(this.ContentREAService.contenidosREA);
        const TallerInfo = {
            id_contenidoREA: this.ActividadService.selectedActividad.id_taller,
        };
        //Obtener contenido original de la actividad
        this.ContentREAService.loadContentREA(this.ActividadService.selectedActividad).subscribe(res => {
            this.contenidoRes = res;
            this.contenidoAct.nombre_CREA = this.contenidoRes.content.nombre_CREA;
            this.contenidoAct.descripcion_CREA = this.contenidoRes.content.descripcion_CREA;
            this.contenidoAct.id_grado = this.contenidoRes.content.id_grado;
            for (let x = 0; x < this.materia.length; x++) {
                if (this.contenidoRes.content.id_materia == this.materia[x].id_materia) {
                    this.contenidoAct.materia = this.materia[x].nombre_materia;
                }
            }
            for (let y = 0; y < this.tipoContenido.length; y++) {
                if (this.contenidoRes.content.tipo_CREA == this.tipoContenido[y].id_tipoContenido) {
                    this.contenidoAct.nombre_tipo_CREA = this.tipoContenido[y].nombre_tipoContenido;
                }
            }
            //console.log('contenidoAct', this.contenidoAct);
        });
        //Obtener taller original de la actividad
        this.ContentREAService.loadContentREA(TallerInfo).subscribe(res => {
            this.tallerRes = res;
            this.tallerAct.nombre_CREA = this.tallerRes.content.nombre_CREA;
            this.tallerAct.descripcion_CREA = this.tallerRes.content.descripcion_CREA;
            this.tallerAct.id_grado = this.tallerRes.content.id_grado;
            for (let x = 0; x < this.materia.length; x++) {
                if (this.tallerRes.content.id_materia == this.materia[x].id_materia) {
                    this.tallerAct.materia = this.materia[x].nombre_materia;
                }
            }
            for (let y = 0; y < this.tipoContenido.length; y++) {
                if (this.tallerRes.content.tipo_CREA == this.tipoContenido[y].id_tipoContenido) {
                    this.tallerAct.nombre_tipo_CREA = this.tipoContenido[y].nombre_tipoContenido;
                }
            }
            //console.log('contenidoAct', this.contenidoAct);
        });
    }
    //Abrir nueva ventana con el contenido Buscado
    verContenido(contenidoREAhtml) {
        const urlcut = contenidoREAhtml.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Abrir nueva ventana con el Contenido de la actividad Buscada
    verContenidoActividad() {
        const urlcut = this.contenidoRes.content.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad, 'urlcut', urlcut, 'urlrepositorio', this.contenidoRes.content.urlrepositorio);
        window.open(urlLoad, "_blank");
    }
    //Abrir nueva ventana con el Taller de la actividad Buscada
    verTallerActividad() {
        const urlcut = this.tallerRes.content.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Almacenar info temporal de un ContenidoREA
    saveDataContent(contenidoREAhtml) {
        this.contenidoToSave = contenidoREAhtml;
        //console.log("contenido guardado:", this.contenidoToSave);
    }
    //Almacenar info temporal de una Actividad
    saveDataActivity(actividadhtml) {
        this.actividadToSave = actividadhtml;
        //console.log("actividad guardada:", this.actividadToSave);
    }
    //Almacenar info temporal de un Taller
    saveDataTaller(tallerhtml) {
        this.tallerToSave = tallerhtml;
        //console.log("taller guardado:", this.tallerToSave);
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
BusquedaComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__["AuthDService"] },
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ActividadService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BusquedaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-busqueda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busqueda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/busqueda/busqueda.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./busqueda.component.css */ "./src/app/components/busqueda/busqueda.component.css")).default]
    })
], BusquedaComponent);



/***/ }),

/***/ "./src/app/components/crear-actividad/crear-actividad.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/crear-actividad/crear-actividad.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXItYWN0aXZpZGFkL2NyZWFyLWFjdGl2aWRhZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/crear-actividad/crear-actividad.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/crear-actividad/crear-actividad.component.ts ***!
  \*************************************************************************/
/*! exports provided: CrearActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearActividadComponent", function() { return CrearActividadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");






let CrearActividadComponent = class CrearActividadComponent {
    constructor(AuthDService, ActividadService, ContentREAService, router) {
        this.AuthDService = AuthDService;
        this.ActividadService = ActividadService;
        this.ContentREAService = ContentREAService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.ID_TipoContenido_Taller = 5;
        this.correcto = false;
        this.error = false;
        this.error2 = false;
        this.subiendo = false;
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        this.id_colegioAuth = this.AuthDService.getIdColegioDocente();
        //console.log('prueba', this.id_docenteAuth, this.id_colegioAuth);
        this.getOptions();
        this.getContenidos();
    }
    //Obtener los datos de los Options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenido = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
        });
        this.ActividadService.allDocente().subscribe(res => {
            this.docente = res;
        });
        this.AuthDService.loadAllSubjectActives().subscribe(res => {
            this.materiaActiva = res;
        });
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        const infoDocente = {
            id_docente: this.id_docenteAuth
        };
        this.AuthDService.loadDocente(infoDocente).subscribe(res => {
            this.docenteAuth = res;
            //console.log('prueba2', infoDocente)
        });
    }
    //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
    getContenidos() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            this.ContentREAService.allType().subscribe(res => {
                this.tipoContenido = res;
                this.ContentREAService.allContent().subscribe(res => {
                    //console.log(res);
                    this.ContentREAService.contenidosREA = res;
                    this.contenidoVisualizar = res;
                    this.contenidoVisualizar.reverse();
                    //console.log(this.ContentREAService.contenidosREA.length);
                    for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
                        for (let n = 0; n < this.tipoContenido.length; n++) {
                            if (this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido) {
                                this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
                            }
                        }
                        for (let m = 0; m < this.materia.length; m++) {
                            if (this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia) {
                                this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
                            }
                        }
                    }
                    //console.log("contenido visualizar final:", this.contenidoVisualizar)
                });
            });
        });
    }
    //Consultar todas las actividades en Mongo
    getActividades() {
        this.ActividadService.allActivities().subscribe(res => {
            //console.log(res);
            this.ActividadService.actividades = res;
        });
    }
    //Crear Actividad en Mongo
    onCrearActividad(form) {
        this.correcto = false;
        this.error = false;
        this.error2 = true;
        this.subiendo = false;
        if (this.tallerVerificacion == true && this.contenidoVerificacion == true) {
            this.correcto = false;
            this.error = false;
            this.error2 = false;
            this.subiendo = true;
            this.ActividadService.allActivities().subscribe(res => {
                //console.log(res);
                this.ActividadService.actividades = res;
                //console.log('Actividades', this.ActividadService.actividades);
                //Crear Cont
                if (this.ActividadService.actividades.length == 0) {
                    this.newCont = 1;
                }
                else {
                    if (this.ActividadService.actividades.length) {
                        this.newCont = 1;
                    }
                    for (let n = 0; n < this.ActividadService.actividades.length; n++) {
                        for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                            if (this.ActividadService.actividades[i].id_colegio == this.id_colegioAuth) {
                                if (n + 1 == this.ActividadService.actividades[i].cont) {
                                    this.newCont = n + 2;
                                    this.temp = 0;
                                    i = this.ActividadService.actividades.length;
                                }
                                else {
                                    this.newCont = n + 1;
                                    this.temp = 1;
                                }
                            }
                        }
                        if (this.temp == 1) {
                            n = this.ActividadService.actividades.length + 1;
                        }
                    }
                }
                // ID Actividad
                var idGlobal = "" + this.id_colegioAuth + this.newCont;
                this.newID = parseInt(idGlobal);
                if (this.contenidoToSave.tipo_CREA == 1) {
                    this.videoOpt = 1;
                    this.urlvideoOpt = this.contenidoToSave.urlrepositorio;
                    this.documentoOpt = 0;
                    this.urldocumentoOpt = "no";
                    this.audioOpt = 0;
                    this.urlaudioOpt = "no";
                    this.htmlOpt = 0;
                    this.urlhtmlOpt = "no";
                }
                if (this.contenidoToSave.tipo_CREA == 2) {
                    this.videoOpt = 0;
                    this.urlvideoOpt = "no";
                    this.documentoOpt = 1;
                    this.urldocumentoOpt = this.contenidoToSave.urlrepositorio;
                    this.audioOpt = 0;
                    this.urlaudioOpt = "no";
                    this.htmlOpt = 0;
                    this.urlhtmlOpt = "no";
                }
                if (this.contenidoToSave.tipo_CREA == 3) {
                    this.videoOpt = 0;
                    this.urlvideoOpt = "no";
                    this.documentoOpt = 0;
                    this.urldocumentoOpt = "no";
                    this.audioOpt = 1;
                    this.urlaudioOpt = this.contenidoToSave.urlrepositorio;
                    this.htmlOpt = 0;
                    this.urlhtmlOpt = "no";
                }
                if (this.contenidoToSave.tipo_CREA == 4) {
                    this.videoOpt = 0;
                    this.urlvideoOpt = "no";
                    this.documentoOpt = 0;
                    this.urldocumentoOpt = "no";
                    this.audioOpt = 0;
                    this.urlaudioOpt = "no";
                    this.htmlOpt = 1;
                    this.urlhtmlOpt = this.contenidoToSave.urlrepositorio;
                }
                //console.log("prueba:", form.value.nombre_actividad);
                const newActividad = {
                    //id_CREA: Math.floor((Math.random() * 100) + 1),
                    id_actividad: this.newID,
                    cont: this.newCont,
                    id_colegio: this.id_colegioAuth,
                    id_docente: this.id_docenteAuth,
                    id_materia: this.materiaSelectedA,
                    id_grado: this.gradoSelectedA,
                    id_materiaActiva: this.miMateriaSelectedA,
                    id_competencia: this.competenciaSelectedA,
                    titulo_actividad: form.value.nombre_actividad,
                    descripcion_actividad: form.value.descripcion_actividad,
                    id_contenidoREA: this.contenidoToSave.id_CREA,
                    video: this.videoOpt,
                    urlvideo: this.urlvideoOpt,
                    documento: this.documentoOpt,
                    urldocumento: this.urldocumentoOpt,
                    audio: this.audioOpt,
                    urlaudio: this.urlaudioOpt,
                    html: this.htmlOpt,
                    urlhtml: this.urlhtmlOpt,
                    id_taller: this.tallerToSave.id_CREA,
                    taller: 0,
                    urltaller: this.tallerToSave.urlrepositorio,
                    descripcion_test: form.value.descripcion_quiz,
                    Q1: form.value.preguntaQ1,
                    A11: form.value.respuesta11,
                    A12: form.value.respuesta12,
                    A13: form.value.respuesta13,
                    A14: form.value.respuesta14,
                    CA1: this.respuestaCorrectaTSelected1,
                    Q2: form.value.preguntaQ2,
                    A21: form.value.respuesta21,
                    A22: form.value.respuesta22,
                    A23: form.value.respuesta23,
                    A24: form.value.respuesta24,
                    CA2: this.respuestaCorrectaTSelected2,
                    Q3: form.value.preguntaQ3,
                    A31: form.value.respuesta31,
                    A32: form.value.respuesta32,
                    A33: form.value.respuesta33,
                    A34: form.value.respuesta34,
                    CA3: this.respuestaCorrectaTSelected3,
                    evaluacion: 0,
                    descripcion_evaluacion: form.value.descripcion_evaluacion,
                    EQ1: form.value.preguntaQ1E,
                    EA11: form.value.respuesta11E,
                    EA12: form.value.respuesta12E,
                    EA13: form.value.respuesta13E,
                    EA14: form.value.respuesta14E,
                    ECA1: form.value.respuestaCorrectaESelected1,
                    EQ2: form.value.preguntaQ2E,
                    EA21: form.value.respuesta21E,
                    EA22: form.value.respuesta22E,
                    EA23: form.value.respuesta23E,
                    EA24: form.value.respuesta24E,
                    ECA2: form.value.respuestaCorrectaESelected2,
                    EQ3: form.value.preguntaQ3E,
                    EA31: form.value.respuesta31E,
                    EA32: form.value.respuesta32E,
                    EA33: form.value.respuesta33E,
                    EA34: form.value.respuesta34E,
                    ECA3: form.value.respuestaCorrectaESelected3,
                    autor: this.AuthDService.getnombreApellidoDocente(),
                    id_autor: this.id_docenteAuth
                };
                //console.log('datosActividad', newActividad);
                this.ActividadService.createActivity(newActividad).subscribe(res => {
                    //console.log('res',res);
                    this.temp2 = res;
                    if (this.temp2.Estado == "Error Crear Actividad") {
                        this.correcto = false;
                        this.error = true;
                        this.subiendo = false;
                    }
                    else {
                        const contenidoREAInfo = {
                            id_CREA: this.contenidoToSave.id_CREA,
                            en_uso: (this.contenidoToSave.en_uso + 1)
                        };
                        const tallerInfo = {
                            id_CREA: this.tallerToSave.id_CREA,
                            en_uso: (this.tallerToSave.en_uso + 1)
                        };
                        this.ContentREAService.uploadEstadoContentREA(contenidoREAInfo).subscribe(res => {
                            //console.log(res);
                            this.ContentREAService.uploadEstadoContentREA(tallerInfo).subscribe(res => {
                                //console.log(res);
                                this.correcto = true;
                                this.error = false;
                                this.subiendo = false;
                                this.resetForm(form);
                            });
                        });
                    }
                });
            });
        }
    }
    //Almacenar info temporal de un Taller
    saveDataTaller(tallerhtml) {
        this.tallerToSave = tallerhtml;
        this.tallerVerificacion = true;
        //console.log("taller guardado:", this.tallerToSave);
    }
    //Almacenar info temporal de un ContenidoREA
    saveDataContent(contenidoREAhtml) {
        this.contenidoToSave = contenidoREAhtml;
        this.contenidoVerificacion = true;
        //console.log("contenido guardado:", this.contenidoToSave);
    }
    //Resetear pagina
    resetPage() {
        window.location.reload();
    }
    //resetear Formulario
    resetForm(form) {
        if (form) {
            form.reset();
            window.scrollTo(0, 0);
            this.temp = 0;
        }
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
CrearActividadComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__["AuthDService"] },
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ActividadService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CrearActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-actividad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crear-actividad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-actividad/crear-actividad.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crear-actividad.component.css */ "./src/app/components/crear-actividad/crear-actividad.component.css")).default]
    })
], CrearActividadComponent);



/***/ }),

/***/ "./src/app/components/dudas/dudas.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/dudas/dudas.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHVkYXMvZHVkYXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dudas/dudas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/dudas/dudas.component.ts ***!
  \*****************************************************/
/*! exports provided: DudasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DudasComponent", function() { return DudasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let DudasComponent = class DudasComponent {
    constructor(router, AuthDService, ActividadService, ContentREAService, AuthAdminService) {
        this.router = router;
        this.AuthDService = AuthDService;
        this.ActividadService = ActividadService;
        this.ContentREAService = ContentREAService;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.correcto1 = false;
        this.correcto2 = false;
        this.error1 = false;
        this.error2 = false;
        this.SinROption = 0;
        this.ROption = 1;
        this.nombre_docenteAuth = this.AuthDService.getnombreApellidoDocente();
        this.IPServer = this.AuthAdminService.loadIPServer();
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        this.getOptions();
        this.actividadVisualizar = { id_actividad: 0, cont: 0, titulo_actividad: "", descripcion_actividad: "", materia: "", id_grado: 0, competencia: "", docente: "", autor: "" };
        this.dudaToSave = { id_duda: 0, id_actividad: 0, id_estudiante: 0, pregunta: "", respuesta: "", estado_duda: 0 };
        this.contenidoAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
        this.tallerAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
    }
    getOptions() {
        this.AuthDService.allGrade().subscribe(res => {
            this.grados = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenidos = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencias = res;
        });
        this.AuthDService.loadAllEstudiantes().subscribe(res => {
            this.estudiantes = res;
            this.AuthDService.allSubject().subscribe(res => {
                this.materias = res;
                this.AuthDService.allActivities().subscribe(res => {
                    this.actividades = res;
                    this.AuthDService.loadAllDudas().subscribe(res => {
                        this.AuthDService.Dudas = res;
                        this.dudasVisualizar = res;
                        this.dudasVisualizar.reverse();
                        for (let i = 0; i < this.AuthDService.Dudas.length; i++) {
                            for (let n = 0; n < this.estudiantes.length; n++) {
                                if (this.AuthDService.Dudas[i].id_estudiante == this.estudiantes[n].id_estudiante) {
                                    this.dudasVisualizar[i].estudiante = this.estudiantes[n].nombre_estudiante + " " + this.estudiantes[n].apellido_estudiante;
                                    n = this.estudiantes.length;
                                }
                            }
                            for (let s = 0; s < this.actividades.length; s++) {
                                if (this.AuthDService.Dudas[i].id_actividad == this.actividades[s].id_actividad) {
                                    for (let o = 0; o < this.materias.length; o++) {
                                        if (this.actividades[s].id_materia == this.materias[o].id_materia) {
                                            this.dudasVisualizar[i].materia = this.materias[o].nombre_materia;
                                            this.dudasVisualizar[i].id_materia = this.materias[o].id_materia;
                                        }
                                    }
                                    this.dudasVisualizar[i].nombre_actividad = this.actividades[s].titulo_actividad;
                                    this.dudasVisualizar[i].id_grado = this.actividades[s].id_grado;
                                    this.dudasVisualizar[i].id_docente = this.actividades[s].id_docente;
                                    s = this.actividades.length;
                                }
                            }
                        }
                        //console.log('prueba',this.dudasVisualizar);
                    });
                });
            });
        });
    }
    // Ocultar Dudas Resueltas
    ocultarDuda() {
        const estadoDuda = {
            id_duda: this.dudaToSave.id_duda,
            estado_duda: 2
        };
        this.AuthDService.uploadEstadoDuda(estadoDuda).subscribe(res => {
            //console.log(res);
            this.getOptions();
        });
    }
    // Actualizar la Duda con la respuesta y estado de la duda
    responderPregunta(form) {
        const respuestaDuda = {
            id_duda: this.dudaToSave.id_duda,
            respuesta: form.value.respuesta,
            estado_duda: 1
        };
        this.AuthDService.uploadRespuestaDuda(respuestaDuda).subscribe(res => {
            //console.log(res);
            this.getOptions();
        });
    }
    //Imprimir datos de la Actividad seleccionanda en el Modal 
    getActividadinModal() {
        const IdActividad = {
            id_actividad: this.dudaToSave.id_actividad
        };
        this.ActividadService.loadActivity(IdActividad).subscribe(res => {
            //console.log('res', res);
            this.activityRes = res;
            this.ActividadService.selectedActividad = this.activityRes.activity;
            this.actividadVisualizar = this.activityRes.activity;
            //console.log('prueba', this.ActividadService.selectedActividad);
            for (let n = 0; n < this.competencias.length; n++) {
                if (this.ActividadService.selectedActividad.id_competencia == this.competencias[n].id_competencia) {
                    this.actividadVisualizar.competencia = this.competencias[n].nombre_competencia;
                }
            }
            for (let m = 0; m < this.materias.length; m++) {
                if (this.ActividadService.selectedActividad.id_materia == this.materias[m].id_materia) {
                    this.actividadVisualizar.materia = this.materias[m].nombre_materia;
                }
            }
            this.actividadVisualizar.docente = this.nombre_docenteAuth;
            const TallerInfo = {
                id_contenidoREA: this.ActividadService.selectedActividad.id_taller,
            };
            //Obtener contenido original de la actividad
            this.ContentREAService.loadContentREA(this.ActividadService.selectedActividad).subscribe(res => {
                this.contenidoRes = res;
                this.contenidoAct.nombre_CREA = this.contenidoRes.content.nombre_CREA;
                this.contenidoAct.descripcion_CREA = this.contenidoRes.content.descripcion_CREA;
                this.contenidoAct.id_grado = this.contenidoRes.content.id_grado;
                for (let x = 0; x < this.materias.length; x++) {
                    if (this.contenidoRes.content.id_materia == this.materias[x].id_materia) {
                        this.contenidoAct.materia = this.materias[x].nombre_materia;
                    }
                }
                for (let y = 0; y < this.tipoContenidos.length; y++) {
                    if (this.contenidoRes.content.tipo_CREA == this.tipoContenidos[y].id_tipoContenido) {
                        this.contenidoAct.nombre_tipo_CREA = this.tipoContenidos[y].nombre_tipoContenido;
                    }
                }
                //console.log('contenidoAct', this.contenidoAct);
            });
            //Obtener taller original de la actividad
            this.ContentREAService.loadContentREA(TallerInfo).subscribe(res => {
                this.tallerRes = res;
                this.tallerAct.nombre_CREA = this.tallerRes.content.nombre_CREA;
                this.tallerAct.descripcion_CREA = this.tallerRes.content.descripcion_CREA;
                this.tallerAct.id_grado = this.tallerRes.content.id_grado;
                for (let x = 0; x < this.materias.length; x++) {
                    if (this.tallerRes.content.id_materia == this.materias[x].id_materia) {
                        this.tallerAct.materia = this.materias[x].nombre_materia;
                    }
                }
                for (let y = 0; y < this.tipoContenidos.length; y++) {
                    if (this.tallerRes.content.tipo_CREA == this.tipoContenidos[y].id_tipoContenido) {
                        this.tallerAct.nombre_tipo_CREA = this.tipoContenidos[y].nombre_tipoContenido;
                    }
                }
                //console.log('contenidoAct', this.contenidoAct);
            });
        });
    }
    //Abrir nueva ventana con el contenido Buscado
    verContenido(contenidoREAhtml) {
        const urlcut = contenidoREAhtml.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Abrir nueva ventana con el Contenido de la actividad Buscada
    verContenidoActividad() {
        const urlcut = this.contenidoRes.content.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Abrir nueva ventana con el Taller de la actividad Buscada
    verTallerActividad() {
        const urlcut = this.tallerRes.content.urlrepositorio.substring(41);
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/' + urlcut;
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
    //Almacenar info temporal de una Actividad
    saveDataActivity(actividadhtml) {
        this.actividadToSave = actividadhtml;
        //console.log("actividad guardada:", this.actividadToSave);
    }
    //Almacenar info temporal de una Duda
    saveDataDuda(dudahtml) {
        this.dudaToSave = dudahtml;
        //console.log('duda guardada:', this.dudaToSave);
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
DudasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__["AuthDService"] },
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__["ActividadService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_4__["AuthAdminService"] }
];
DudasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-dudas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dudas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dudas/dudas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dudas.component.css */ "./src/app/components/dudas/dudas.component.css")).default]
    })
], DudasComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(AuthDService, router, AuthAdminService) {
        this.AuthDService = AuthDService;
        this.router = router;
        this.AuthAdminService = AuthAdminService;
    }
    ngOnInit() {
        this.IPServer = this.AuthAdminService.loadIPServer();
    }
    logOut() {
        this.AuthDService.logout();
        this.router.navigateByUrl('/login');
    }
    //Abrir nueva ventana para ver el Manual
    verManual() {
        const urlLoad = 'http://' + this.IPServer + ':3000/repositorio/manual.pdf';
        //console.log('urlload', urlLoad);
        window.open(urlLoad, "_blank");
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__["AuthDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_2__["AuthAdminService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/index.paginas.ts":
/*!*********************************************!*\
  !*** ./src/app/components/index.paginas.ts ***!
  \*********************************************/
/*! exports provided: InicioAdminComponent, SubirContenidoComponent, BorrarContenidoComponent, CrearActividadComponent, ModificarActividadComponent, BorrarActividadComponent, InicioProfesoresComponent, BusquedaComponent, LoginComponent, RegistroUsuarioComponent, InfromacionDocenteComponent, AdministrarDocenteComponent, GestionarCompetenciasAdminComponent, GestionarUsuariosAdminComponent, GestionarColegioAdminComponent, BusquedaVisitanteComponent, DudasComponent, MetricasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin/inicio-admin/inicio-admin.component */ "./src/app/components/Admin/inicio-admin/inicio-admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InicioAdminComponent", function() { return _Admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_1__["InicioAdminComponent"]; });

/* harmony import */ var _subir_contenido_subir_contenido_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subir-contenido/subir-contenido.component */ "./src/app/components/subir-contenido/subir-contenido.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubirContenidoComponent", function() { return _subir_contenido_subir_contenido_component__WEBPACK_IMPORTED_MODULE_2__["SubirContenidoComponent"]; });

/* harmony import */ var _borrar_contenido_borrar_contenido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borrar-contenido/borrar-contenido.component */ "./src/app/components/borrar-contenido/borrar-contenido.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BorrarContenidoComponent", function() { return _borrar_contenido_borrar_contenido_component__WEBPACK_IMPORTED_MODULE_3__["BorrarContenidoComponent"]; });

/* harmony import */ var _crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crear-actividad/crear-actividad.component */ "./src/app/components/crear-actividad/crear-actividad.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrearActividadComponent", function() { return _crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_4__["CrearActividadComponent"]; });

/* harmony import */ var _modificar_actividad_modificar_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modificar-actividad/modificar-actividad.component */ "./src/app/components/modificar-actividad/modificar-actividad.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModificarActividadComponent", function() { return _modificar_actividad_modificar_actividad_component__WEBPACK_IMPORTED_MODULE_5__["ModificarActividadComponent"]; });

/* harmony import */ var _borrar_actividad_borrar_actividad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./borrar-actividad/borrar-actividad.component */ "./src/app/components/borrar-actividad/borrar-actividad.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BorrarActividadComponent", function() { return _borrar_actividad_borrar_actividad_component__WEBPACK_IMPORTED_MODULE_6__["BorrarActividadComponent"]; });

/* harmony import */ var _inicio_profesores_inicio_profesores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inicio-profesores/inicio-profesores.component */ "./src/app/components/inicio-profesores/inicio-profesores.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InicioProfesoresComponent", function() { return _inicio_profesores_inicio_profesores_component__WEBPACK_IMPORTED_MODULE_7__["InicioProfesoresComponent"]; });

/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./busqueda/busqueda.component */ "./src/app/components/busqueda/busqueda.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function() { return _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_8__["BusquedaComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]; });

/* harmony import */ var _registro_usuario_registro_usuario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registro-usuario/registro-usuario.component */ "./src/app/components/registro-usuario/registro-usuario.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistroUsuarioComponent", function() { return _registro_usuario_registro_usuario_component__WEBPACK_IMPORTED_MODULE_10__["RegistroUsuarioComponent"]; });

/* harmony import */ var _infromacion_docente_infromacion_docente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infromacion-docente/infromacion-docente.component */ "./src/app/components/infromacion-docente/infromacion-docente.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfromacionDocenteComponent", function() { return _infromacion_docente_infromacion_docente_component__WEBPACK_IMPORTED_MODULE_11__["InfromacionDocenteComponent"]; });

/* harmony import */ var _administrar_docente_administrar_docente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./administrar-docente/administrar-docente.component */ "./src/app/components/administrar-docente/administrar-docente.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdministrarDocenteComponent", function() { return _administrar_docente_administrar_docente_component__WEBPACK_IMPORTED_MODULE_12__["AdministrarDocenteComponent"]; });

/* harmony import */ var _Admin_gestionar_competencias_admin_gestionar_competencias_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Admin/gestionar-competencias-admin/gestionar-competencias-admin.component */ "./src/app/components/Admin/gestionar-competencias-admin/gestionar-competencias-admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestionarCompetenciasAdminComponent", function() { return _Admin_gestionar_competencias_admin_gestionar_competencias_admin_component__WEBPACK_IMPORTED_MODULE_13__["GestionarCompetenciasAdminComponent"]; });

/* harmony import */ var _Admin_gestionar_usuarios_admin_gestionar_usuarios_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component */ "./src/app/components/Admin/gestionar-usuarios-admin/gestionar-usuarios-admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestionarUsuariosAdminComponent", function() { return _Admin_gestionar_usuarios_admin_gestionar_usuarios_admin_component__WEBPACK_IMPORTED_MODULE_14__["GestionarUsuariosAdminComponent"]; });

/* harmony import */ var _Admin_gestionar_colegio_admin_gestionar_colegio_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Admin/gestionar-colegio-admin/gestionar-colegio-admin.component */ "./src/app/components/Admin/gestionar-colegio-admin/gestionar-colegio-admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestionarColegioAdminComponent", function() { return _Admin_gestionar_colegio_admin_gestionar_colegio_admin_component__WEBPACK_IMPORTED_MODULE_15__["GestionarColegioAdminComponent"]; });

/* harmony import */ var _Visitante_busqueda_visitante_busqueda_visitante_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Visitante/busqueda-visitante/busqueda-visitante.component */ "./src/app/components/Visitante/busqueda-visitante/busqueda-visitante.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusquedaVisitanteComponent", function() { return _Visitante_busqueda_visitante_busqueda_visitante_component__WEBPACK_IMPORTED_MODULE_16__["BusquedaVisitanteComponent"]; });

/* harmony import */ var _dudas_dudas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dudas/dudas.component */ "./src/app/components/dudas/dudas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DudasComponent", function() { return _dudas_dudas_component__WEBPACK_IMPORTED_MODULE_17__["DudasComponent"]; });

/* harmony import */ var _metricas_metricas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./metricas/metricas.component */ "./src/app/components/metricas/metricas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetricasComponent", function() { return _metricas_metricas_component__WEBPACK_IMPORTED_MODULE_18__["MetricasComponent"]; });






















/***/ }),

/***/ "./src/app/components/infromacion-docente/infromacion-docente.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/infromacion-docente/infromacion-docente.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mcm9tYWNpb24tZG9jZW50ZS9pbmZyb21hY2lvbi1kb2NlbnRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/infromacion-docente/infromacion-docente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/infromacion-docente/infromacion-docente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InfromacionDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfromacionDocenteComponent", function() { return InfromacionDocenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _models_docente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/docente */ "./src/app/models/docente.ts");
/* harmony import */ var _models_colegio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/colegio */ "./src/app/models/colegio.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let InfromacionDocenteComponent = class InfromacionDocenteComponent {
    constructor(ContentREAService, AuthDService, router) {
        this.ContentREAService = ContentREAService;
        this.AuthDService = AuthDService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.DocenteInfo = new _models_docente__WEBPACK_IMPORTED_MODULE_3__["DocenteI"];
        this.ColegioInfo = new _models_colegio__WEBPACK_IMPORTED_MODULE_4__["ColegioI"];
        this.idDocente = this.AuthDService.getIdDocente();
        this.nombreApellidoDocente = this.AuthDService.getnombreApellidoDocente();
        this.getInformacionCompleta();
    }
    getInformacionCompleta() {
        this.idDocente = this.AuthDService.getIdDocente();
        const infoDocente = {
            id_docente: this.idDocente
        };
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            //console.log("1:",this.materia.length);
            this.AuthDService.loadDocente(infoDocente).subscribe(res => {
                this.resDocente = res;
                this.DocenteInfo = this.resDocente.teacher;
                //console.log('info docente', this.resDocente);
                this.AuthDService.loadColegio(this.resDocente.teacher).subscribe(res => {
                    this.resColegio = res;
                    this.ColegioInfo = this.resColegio.school;
                    //console.log('info colegio', this.resColegio);
                    this.AuthDService.loadAllSubjectActives().subscribe(res => {
                        this.AuthDService.MateriasActivas = res;
                        this.MateriaActivaInfo = res;
                        for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
                            for (let m = 0; m < this.materia.length; m++) {
                                if (this.AuthDService.MateriasActivas[i].id_materia == this.materia[m].id_materia) {
                                    this.MateriaActivaInfo[i].nombre_materia = this.materia[m].nombre_materia;
                                }
                            }
                        }
                    });
                });
            });
        });
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
InfromacionDocenteComponent.ctorParameters = () => [
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_2__["ContentREAService"] },
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__["AuthDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
InfromacionDocenteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-infromacion-docente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./infromacion-docente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/infromacion-docente/infromacion-docente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./infromacion-docente.component.css */ "./src/app/components/infromacion-docente/infromacion-docente.component.css")).default]
    })
], InfromacionDocenteComponent);



/***/ }),

/***/ "./src/app/components/inicio-profesores/inicio-profesores.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/inicio-profesores/inicio-profesores.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InicioProfesoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioProfesoresComponent", function() { return InicioProfesoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let InicioProfesoresComponent = class InicioProfesoresComponent {
    constructor(AuthDService, router) {
        this.AuthDService = AuthDService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.nombreApellidoDocente = this.AuthDService.getnombreApellidoDocente();
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
InicioProfesoresComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__["AuthDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioProfesoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-profesores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio-profesores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio-profesores/inicio-profesores.component.html")).default,
    })
], InicioProfesoresComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-admin.service */ "./src/app/services/auth-admin.service.ts");





let LoginComponent = class LoginComponent {
    constructor(AuthAdminService, AuthDService, router) {
        this.AuthAdminService = AuthAdminService;
        this.AuthDService = AuthDService;
        this.router = router;
    }
    ngOnInit() {
        this.error1 = false;
        this.error2 = false;
        this.correctoIP = false;
        this.errorIP = false;
        this.IPServer = this.AuthAdminService.loadIPServer();
        this.temp = this.AuthAdminService.loadIPServer();
        console.log('IPServer Actual', this.temp);
        this.comprobarConeccion();
    }
    onLoginDocente(form) {
        //console.log('login Docente', form.value);
        this.error1 = false;
        this.error2 = false;
        this.error3 = false;
        this.AuthDService.loginDocente(form.value).subscribe(res => {
            //console.log('login Docente', res);
            this.temp2 = res;
            if (this.temp2.Estado == "Error Servidor") {
                this.error1 = false;
                this.error2 = false;
                this.error3 = true;
            }
            if (this.temp2.Estado == "Error Login") {
                this.error1 = true;
                this.error2 = false;
                this.error3 = false;
            }
            if (this.temp2.Estado != "Error Servidor" && this.temp2.Estado != "Error Login") {
                this.error1 = false;
                this.error2 = false;
                this.error3 = false;
                this.router.navigate(['/inicioProfesores']);
            }
        });
    }
    onLoginAdmin(form) {
        //console.log('Login Admin', form.value);
        const LoginAdmin = {
            nombre_usuario: form.value.correo_electronico,
            contrasena: form.value.contrasena
        };
        this.error1 = false;
        this.error2 = false;
        this.error3 = false;
        this.AuthAdminService.loginAdmin(LoginAdmin).subscribe(res => {
            //console.log('login Docente', res);
            this.temp2 = res;
            if (this.temp2.Estado == "Error Servidor") {
                this.error1 = false;
                this.error2 = false;
                this.error3 = true;
            }
            if (this.temp2.Estado == "Error Login") {
                this.error1 = false;
                this.error2 = true;
                this.error3 = false;
            }
            if (this.temp2.Estado != "Error Servidor" && this.temp2.Estado != "Error Login") {
                this.error1 = false;
                this.error2 = false;
                this.error3 = false;
                this.router.navigate(['/inicioAdmin']);
            }
        });
    }
    onLoginVisitante() {
        //console.log('login Visitante');
        this.router.navigate(['/busquedaVisitante']);
    }
    actualizarIPServer(form) {
        this.AuthAdminService.saveIPServer(form.value.IPServer);
        this.temp = this.AuthAdminService.loadIPServer();
        //console.log('localStorage test',this.temp);
        this.comprobarConeccion();
        this.resetForm(form);
    }
    comprobarConeccion() {
        this.correctoIP = false;
        this.errorIP = true;
        const Info = {
            id_colegio: 0
        };
        this.AuthAdminService.pruebaIP().subscribe(res => {
            //console.log('Verificacion Conexion', res);
            this.correctoIP = true;
            this.errorIP = false;
        });
    }
    downloadApp() {
        console.log('Descargando');
        const urlLoad = 'assets/SmartFC-App.apk';
        window.open(urlLoad, "_blank");
    }
    resetForm(form) {
        if (form) {
            form.reset();
            window.scrollTo(0, 0);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_admin_service__WEBPACK_IMPORTED_MODULE_4__["AuthAdminService"] },
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_3__["AuthDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/metricas/metricas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/metricas/metricas.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0cmljYXMvbWV0cmljYXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/metricas/metricas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/metricas/metricas.component.ts ***!
  \***********************************************************/
/*! exports provided: MetricasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricasComponent", function() { return MetricasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _models_metricaVisualizar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/metricaVisualizar */ "./src/app/models/metricaVisualizar.ts");
/* harmony import */ var _models_metricaActividad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/metricaActividad */ "./src/app/models/metricaActividad.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let MetricasComponent = class MetricasComponent {
    constructor(AuthDService, ActividadService, router) {
        this.AuthDService = AuthDService;
        this.ActividadService = ActividadService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        this.nombre_docenteAuth = this.AuthDService.getnombreApellidoDocente();
        this.bar20 = false;
        this.bar40 = false;
        this.bar60 = false;
        this.bar80 = false;
        this.bar100 = false;
        this.contInicio = 0;
        this.contContenido = 0;
        this.contQuiz = 0;
        this.contTaller = 0;
        this.contEvaluacion = 0;
        this.contNotaQuiz = 0;
        this.contNotaEvaluacion = 0;
        this.contNotaFinal = 0;
        this.metricasActividad = { id_metrica: 0, id_actividad: 0, nota_quiz: 0, nota_evaluacion: 0,
            nota_final: 0, inicio: 0, contenido: 0, quiz: 0, taller: 0, evaluacion: 0 };
        this.options = [
            { valor: 1, opcion: "SI vieron el Contenido" }, { valor: 5, opcion: "NO vieron el Contenido" },
            { valor: 2, opcion: "SI hicieron el Quiz" }, { valor: 6, opcion: "NO hicieron el Quiz" },
            { valor: 3, opcion: "SI hicieron el Taller" }, { valor: 7, opcion: "NO hicieron el Taller" },
            { valor: 4, opcion: "SI hicieron la Evaluacion" }, { valor: 8, opcion: "NO hicieron la Evaluacion" }
        ];
        this.metricaVisualizarToSave = new _models_metricaVisualizar__WEBPACK_IMPORTED_MODULE_3__["MetricaVisualizarI"];
        this.getOptions();
        this.getActividades();
    }
    getOptions() {
        this.AuthDService.allSubject().subscribe(res => {
            this.materias = res;
        });
        this.AuthDService.allGrade().subscribe(res => {
            this.grados = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencias = res;
        });
    }
    //consultar todos las Actividades y verificar el nombre de la materia, competencia y profesor con sus respectivos ID´s
    getActividades() {
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencias = res;
            this.ActividadService.allActivities().subscribe(res => {
                //console.log(res);
                this.ActividadService.actividades = res;
                this.actividadVisualizar = res;
                //console.log(this.ActividadService.actividades.length);
                for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                    if (this.ActividadService.actividades[i].id_docente == this.id_docenteAuth) {
                        for (let n = 0; n < this.competencias.length; n++) {
                            if (this.ActividadService.actividades[i].id_competencia == this.competencias[n].id_competencia) {
                                this.actividadVisualizar[i].competencia = this.competencias[n].nombre_competencia;
                            }
                        }
                        for (let p = 0; p < this.materias.length; p++) {
                            if (this.ActividadService.actividades[i].id_materia == this.materias[p].id_materia) {
                                this.actividadVisualizar[i].materia = this.materias[p].nombre_materia;
                            }
                        }
                        this.actividadVisualizar[i].docente = this.nombre_docenteAuth;
                    }
                }
                //console.log("actividades visualizar:", this.actividadVisualizar)
            });
        });
    }
    getAvanceEstudianteModal(metricaEstudiante) {
        this.saveDataMetricaVisualizar(metricaEstudiante);
        this.bar20 = false;
        this.bar40 = false;
        this.bar60 = false;
        this.bar80 = false;
        this.bar100 = false;
        if (metricaEstudiante.check_inicio == 1) {
            if (metricaEstudiante.check_contenido == 1) {
                if (metricaEstudiante.check_quiz == 1) {
                    if (metricaEstudiante.check_taller == 1) {
                        if (metricaEstudiante.check_evaluacion == 1) {
                            this.bar100 = true;
                        }
                        else {
                            this.bar80 = true;
                        }
                    }
                    else {
                        this.bar60 = true;
                    }
                }
                else {
                    this.bar40 = true;
                }
            }
            else {
                this.bar20 = true;
            }
        }
    }
    //Imprimir Metricas de la Actividad seleccionanda en el Modal 
    getActividadinModal(actividad) {
        this.ActividadService.selectedActividad = actividad;
        this.saveDataActivity(actividad);
        this.metricasActividad = new _models_metricaActividad__WEBPACK_IMPORTED_MODULE_4__["MetricaActividadI"];
        this.metricas = new Array;
        this.metricasVisualizar = new Array;
        this.contInicio = 0;
        this.contContenido = 0;
        this.contQuiz = 0;
        this.contTaller = 0;
        this.contEvaluacion = 0;
        this.contNotaQuiz = 0;
        this.contNotaEvaluacion = 0;
        this.contNotaFinal = 0;
        this.divisorCont = 0;
        this.metricasActividad.id_metrica = this.actividadToSave.id_actividad;
        this.metricasActividad.id_actividad = this.actividadToSave.id_actividad;
        this.AuthDService.loadAllEstudiantes().subscribe(res => {
            this.estudiantes = res;
            this.AuthDService.loadAllEvento().subscribe(res => {
                this.eventos = res;
                if (this.eventos.length) {
                    for (let n = 0; n < this.eventos.length; n++) {
                        if (this.eventos[n].oculto != 1) {
                            if (this.eventos[n].id_actividad == this.actividadToSave.id_actividad) {
                                this.divisorCont = this.divisorCont + 1;
                                var check_evaluacionTemp = 0;
                                //Consultar si el estudiante hizo la evaluacion
                                if (this.eventos[n].check_Ea1 && 0 < this.eventos[n].check_Ea1) {
                                    check_evaluacionTemp = 1;
                                }
                                else {
                                    check_evaluacionTemp = 0;
                                }
                                //contadores
                                this.contInicio = this.contInicio + this.eventos[n].check_inicio;
                                this.contContenido = this.contContenido + this.eventos[n].check_video;
                                this.contQuiz = this.contQuiz + this.eventos[n].check_answer;
                                this.contTaller = this.contTaller + this.eventos[n].check_download;
                                if (this.eventos[n].check_Ea1 && 0 < this.eventos[n].check_Ea1) {
                                    this.contEvaluacion = this.contEvaluacion + 1;
                                }
                                this.notaA1 = 0;
                                this.notaA2 = 0;
                                this.notaA3 = 0;
                                this.notaEA1 = 0;
                                this.notaEA2 = 0;
                                this.notaEA3 = 0;
                                //Evaluar respuestas del evento
                                if (this.eventos[n].check_a1 == this.actividadToSave.CA1) {
                                    this.notaA1 = 5;
                                }
                                if (this.eventos[n].check_a2 == this.actividadToSave.CA2) {
                                    this.notaA2 = 5;
                                }
                                if (this.eventos[n].check_a3 == this.actividadToSave.CA3) {
                                    this.notaA3 = 5;
                                }
                                if (this.eventos[n].check_Ea1 == this.actividadToSave.ECA1) {
                                    this.notaEA1 = 5;
                                }
                                if (this.eventos[n].check_Ea2 == this.actividadToSave.ECA2) {
                                    this.notaEA2 = 5;
                                }
                                if (this.eventos[n].check_Ea3 == this.actividadToSave.ECA3) {
                                    this.notaEA3 = 5;
                                }
                                var nota_quizTemp = parseFloat(((this.notaA1 + this.notaA2 + this.notaA3) / 3).toFixed(2));
                                var nota_evaluacionTemp = parseFloat(((this.notaEA1 + this.notaEA2 + this.notaEA3) / 3).toFixed(2));
                                var nota_finalTemp = parseFloat(((nota_quizTemp + nota_evaluacionTemp) / 2).toFixed(2));
                                this.contNotaQuiz = this.contNotaQuiz + nota_quizTemp;
                                this.contNotaEvaluacion = this.contNotaEvaluacion + nota_evaluacionTemp;
                                this.contNotaFinal = this.contNotaFinal + nota_finalTemp;
                                //pasar datos del evento a metricas
                                this.metricas.push({ id_metrica: this.eventos[n].id_evento, id_evento: this.eventos[n].id_evento,
                                    id_actividad: this.actividadToSave.id_actividad, id_estudiante: this.eventos[n].id_estudiante,
                                    check_inicio: this.eventos[n].check_inicio, check_contenido: this.eventos[n].check_video,
                                    check_quiz: this.eventos[n].check_answer, check_evaluacion: check_evaluacionTemp, check_taller: this.eventos[n].check_download,
                                    nota_quiz: nota_quizTemp, nota_evaluacion: nota_evaluacionTemp, nota_final: nota_finalTemp });
                            }
                        }
                    }
                    if (this.divisorCont == 0) {
                        this.divisorCont = 1;
                    }
                    //Ingresar datos de los contadores a la Metricas de la Actividade
                    this.metricasActividad.nota_quiz = parseFloat((this.contNotaQuiz / this.divisorCont).toFixed(2));
                    this.metricasActividad.nota_evaluacion = parseFloat((this.contNotaEvaluacion / this.divisorCont).toFixed(2));
                    this.metricasActividad.nota_final = parseFloat((this.contNotaFinal / this.divisorCont).toFixed(2));
                    this.metricasActividad.inicio = this.contInicio;
                    this.metricasActividad.contenido = this.contContenido;
                    this.metricasActividad.quiz = this.contQuiz;
                    this.metricasActividad.taller = this.contTaller;
                    this.metricasActividad.evaluacion = this.contEvaluacion;
                    //console.log('metricasActividad', this.metricasActividad);
                    //console.log('metricas', this.metricas);
                    //Creacion Metricas para Visualizar
                    for (let y = 0; y < this.metricas.length; y++) {
                        var nombre_estudianteTemp = "";
                        for (let m = 0; m < this.estudiantes.length; m++) {
                            if (this.metricas[y].id_estudiante == this.estudiantes[m].id_estudiante) {
                                nombre_estudianteTemp = this.estudiantes[m].nombre_estudiante + " " + this.estudiantes[m].apellido_estudiante;
                            }
                        }
                        var accionInicio = "No";
                        var accionContenido = "No";
                        var accionTaller = "No";
                        var accionQuiz = "No";
                        var accionEvaluacion = "No";
                        if (this.metricas[y].check_inicio == 1) {
                            accionInicio = "Si";
                        }
                        if (this.metricas[y].check_contenido == 1) {
                            accionContenido = "Si";
                        }
                        if (this.metricas[y].check_quiz == 1) {
                            accionQuiz = "Si";
                        }
                        if (this.metricas[y].check_taller == 1) {
                            accionTaller = "Si";
                        }
                        if (this.metricas[y].check_evaluacion == 1) {
                            accionEvaluacion = "Si";
                        }
                        this.metricasVisualizar.push({ id_metrica: this.metricas[y].id_evento, id_evento: this.metricas[y].id_evento,
                            id_actividad: this.metricas[y].id_actividad, id_estudiante: this.metricas[y].id_estudiante,
                            check_inicio: this.metricas[y].check_inicio, check_contenido: this.metricas[y].check_contenido,
                            check_quiz: this.metricas[y].check_quiz, check_evaluacion: this.metricas[y].check_evaluacion, check_taller: this.metricas[y].check_taller,
                            nota_quiz: this.metricas[y].nota_quiz, nota_evaluacion: this.metricas[y].nota_evaluacion, nota_final: this.metricas[y].nota_final, actividad: this.actividadToSave.titulo_actividad,
                            estudiante: nombre_estudianteTemp, inicio: accionInicio, contenido: accionContenido, quiz: accionQuiz, taller: accionTaller, evaluacion: accionEvaluacion });
                    }
                    //console.log('metricasVisualizar', this.metricasVisualizar);
                }
            });
        });
    }
    reiniciarActividad() {
        this.AuthDService.loadAllEvento().subscribe(res => {
            this.eventos = res;
            if (this.eventos.length) {
                for (let w = 0; w < this.eventos.length; w++) {
                    if (this.eventos[w].id_actividad == this.actividadToSave.id_actividad) {
                        const infoEvento = {
                            id_evento: this.eventos[w].id_evento,
                            oculto: 1
                        };
                        this.AuthDService.uploadEstadoEvento(infoEvento).subscribe(res => {
                            //console.log('respuesta',res);
                        });
                    }
                }
                //this.resetPage();
            }
        });
    }
    //Almacenar info temporal de una Actividad
    saveDataActivity(actividadhtml) {
        this.actividadToSave = actividadhtml;
        //console.log("actividad guardada:", this.actividadToSave);
    }
    //Almacenar info temporal de una Actividad
    saveDataMetrica(metricahtml) {
        this.metricaToSave = metricahtml;
        //console.log("actividad guardada:", this.actividadToSave);
    }
    //Almacenar info temporal de una Actividad
    saveDataMetricaVisualizar(metricavisualizarhtml) {
        this.metricaVisualizarToSave = metricavisualizarhtml;
        //console.log("actividad guardada:", this.actividadToSave);
    }
    resetPage() {
        window.location.reload();
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
MetricasComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_1__["AuthDService"] },
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__["ActividadService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MetricasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-metricas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./metricas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/metricas/metricas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./metricas.component.css */ "./src/app/components/metricas/metricas.component.css")).default]
    })
], MetricasComponent);



/***/ }),

/***/ "./src/app/components/modificar-actividad/modificar-actividad.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/modificar-actividad/modificar-actividad.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kaWZpY2FyLWFjdGl2aWRhZC9tb2RpZmljYXItYWN0aXZpZGFkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/modificar-actividad/modificar-actividad.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/modificar-actividad/modificar-actividad.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModificarActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarActividadComponent", function() { return ModificarActividadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _models_actividad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/actividad */ "./src/app/models/actividad.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");







let ModificarActividadComponent = class ModificarActividadComponent {
    constructor(AuthDService, ActividadService, ContentREAService, router) {
        this.AuthDService = AuthDService;
        this.ActividadService = ActividadService;
        this.ContentREAService = ContentREAService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.ID_TipoContenido_Taller = 5;
        this.correcto1 = false;
        this.correcto2 = false;
        this.error1 = false;
        this.error2 = false;
        this.tallerActivado = false;
        this.evaluacionActivado = false;
        this.tallerDesactivado = false;
        this.evaluacionDesactivado = false;
        this.getOptions();
        this.getContenidos();
        this.getActividades();
        this.ActividadService.selectedActividad = new _models_actividad__WEBPACK_IMPORTED_MODULE_4__["ActividadI"]();
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        this.id_colegioAuth = this.AuthDService.getIdColegioDocente();
        this.actividadToSave2 = new _models_actividad__WEBPACK_IMPORTED_MODULE_4__["ActividadI"]();
        this.contenidoAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
        this.tallerAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
        this.verificationSaveContent = false;
        this.verificationSaveTaller = false;
        this.verificationSaveActividad = false;
    }
    //Obtener los datos de los Options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenido = res;
        });
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
        });
        this.ActividadService.allDocente().subscribe(res => {
            this.docente = res;
        });
        this.AuthDService.loadAllSubjectActives().subscribe(res => {
            this.materiaActiva = res;
        });
    }
    //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
    getContenidos() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            this.ContentREAService.allType().subscribe(res => {
                this.tipoContenido = res;
                this.ContentREAService.allContent().subscribe(res => {
                    //console.log(res);
                    this.ContentREAService.contenidosREA = res;
                    this.contenidoVisualizar = res;
                    this.contenidoVisualizar.reverse();
                    //console.log(this.ContentREAService.contenidosREA.length);
                    for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
                        for (let n = 0; n < this.tipoContenido.length; n++) {
                            if (this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido) {
                                this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
                            }
                        }
                        for (let m = 0; m < this.materia.length; m++) {
                            if (this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia) {
                                this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
                            }
                        }
                    }
                    //console.log("contenido visualizar final:", this.contenidoVisualizar)
                });
            });
        });
    }
    //consultar todos las Actividades y verificar el nombre de la materia, competencia y profesor con sus respectivos ID´s
    getActividades() {
        this.ActividadService.allCompetencias().subscribe(res => {
            this.competencia = res;
            this.ActividadService.allDocente().subscribe(res => {
                this.docente = res;
                this.ActividadService.allActivities().subscribe(res => {
                    //console.log(res);
                    this.ActividadService.actividades = res;
                    this.actividadVisualizar = res;
                    this.actividadVisualizar.reverse();
                    //console.log(this.ActividadService.actividades.length);
                    for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                        this.actividadVisualizar[i].autor == this.ActividadService.actividades[i].autor;
                        for (let n = 0; n < this.competencia.length; n++) {
                            if (this.ActividadService.actividades[i].id_competencia == this.competencia[n].id_competencia) {
                                this.actividadVisualizar[i].competencia = this.competencia[n].nombre_competencia;
                            }
                        }
                        for (let m = 0; m < this.docente.length; m++) {
                            if (this.ActividadService.actividades[i].id_docente == this.docente[m].id_docente) {
                                this.actividadVisualizar[i].docente = (this.docente[m].nombre_docente + " " + this.docente[m].apellido_docente);
                            }
                        }
                        for (let p = 0; p < this.materia.length; p++) {
                            if (this.ActividadService.actividades[i].id_materia == this.materia[p].id_materia) {
                                this.actividadVisualizar[i].materia = this.materia[p].nombre_materia;
                            }
                        }
                        if (this.actividadToSave2.id_actividad == this.actividadVisualizar[i].id_actividad) {
                            this.seccionActivity(this.actividadVisualizar[i]);
                        }
                    }
                    //console.log("actividades visualizar final:", this.actividadVisualizar)
                });
            });
        });
    }
    //Modificar Actividad en Mongo
    onModificarActividad(form) {
        this.correcto1 = false;
        this.correcto2 = false;
        this.error1 = false;
        this.error2 = true;
        this.subiendo = false;
        //Verificar que han seleccionado una Actividad para modificar
        if (this.verificationSaveActividad == true) {
            this.error2 = false;
            this.subiendo = true;
            //cambiar informacion de contenido en la Actividad al identificar que se a seleccionado un nuevo contenido
            if (this.verificationSaveContent == true) {
                if (this.contenidoToSave.tipo_CREA == 1) {
                    this.actividadToSave.video = 1;
                    this.actividadToSave.urlvideo = this.contenidoToSave.urlrepositorio;
                    this.actividadToSave.documento = 0;
                    this.actividadToSave.urldocumento = "no";
                    this.actividadToSave.audio = 0;
                    this.actividadToSave.urlaudio = "no";
                    this.actividadToSave.html = 0;
                    this.actividadToSave.urlhtml = "no";
                }
                if (this.contenidoToSave.tipo_CREA == 2) {
                    this.actividadToSave.video = 0;
                    this.actividadToSave.urlvideo = "no";
                    this.actividadToSave.documento = 1;
                    this.actividadToSave.urldocumento = this.contenidoToSave.urlrepositorio;
                    this.actividadToSave.audio = 0;
                    this.actividadToSave.urlaudio = "no";
                    this.actividadToSave.html = 0;
                    this.actividadToSave.urlhtml = "no";
                }
                if (this.contenidoToSave.tipo_CREA == 3) {
                    this.actividadToSave.video = 0;
                    this.actividadToSave.urlvideo = "no";
                    this.actividadToSave.documento = 0;
                    this.actividadToSave.urldocumento = "no";
                    this.actividadToSave.audio = 1;
                    this.actividadToSave.urlaudio = this.contenidoToSave.urlrepositorio;
                    this.actividadToSave.html = 0;
                    this.actividadToSave.urlhtml = "no";
                }
                if (this.contenidoToSave.tipo_CREA == 4) {
                    this.actividadToSave.video = 0;
                    this.actividadToSave.urlvideo = "no";
                    this.actividadToSave.documento = 0;
                    this.actividadToSave.urldocumento = "no";
                    this.actividadToSave.audio = 0;
                    this.actividadToSave.urlaudio = "no";
                    this.actividadToSave.html = 1;
                    this.actividadToSave.urlhtml = this.contenidoToSave.urlrepositorio;
                }
                this.actividadToSave.id_contenidoREA = this.contenidoToSave.id_CREA;
            }
            //cambiar informacion de taller en la Actividad al identificar que se a seleccionado un nuevo taller
            if (this.verificationSaveTaller == true) {
                this.actividadToSave.id_taller = this.tallerToSave.id_CREA;
                this.actividadToSave.taller = 1;
                this.actividadToSave.urltaller = this.tallerToSave.urlrepositorio;
            }
            //Verificar si la Actividad es del docente que la esta modificando
            if (this.id_docenteAuth == this.id_docente_ActividadSelected) {
                this.actividadToSave.id_materia = form.value.id_materia;
                this.actividadToSave.id_grado = form.value.id_grado;
                this.actividadToSave.id_materiaActiva = form.value.id_materiaActiva;
                this.actividadToSave.id_competencia = form.value.id_competencia;
                this.actividadToSave.titulo_actividad = form.value.titulo_actividad;
                this.actividadToSave.descripcion_actividad = form.value.descripcion_actividad;
                this.actividadToSave.descripcion_test = form.value.descripcion_test;
                this.actividadToSave.Q1 = form.value.Q1;
                this.actividadToSave.A11 = form.value.A11;
                this.actividadToSave.A12 = form.value.A12;
                this.actividadToSave.A13 = form.value.A13;
                this.actividadToSave.A14 = form.value.A14;
                this.actividadToSave.CA1 = form.value.CA1;
                this.actividadToSave.Q2 = form.value.Q2;
                this.actividadToSave.A21 = form.value.A21;
                this.actividadToSave.A22 = form.value.A22;
                this.actividadToSave.A23 = form.value.A23;
                this.actividadToSave.A24 = form.value.A24;
                this.actividadToSave.CA2 = form.value.CA2;
                this.actividadToSave.Q3 = form.value.Q3;
                this.actividadToSave.A31 = form.value.A31;
                this.actividadToSave.A32 = form.value.A32;
                this.actividadToSave.A33 = form.value.A33;
                this.actividadToSave.A34 = form.value.A34;
                this.actividadToSave.CA3 = form.value.CA3;
                this.actividadToSave.descripcion_evaluacion = form.value.descripcion_evaluacion;
                this.actividadToSave.EQ1 = form.value.EQ1;
                this.actividadToSave.EA11 = form.value.EA11;
                this.actividadToSave.EA12 = form.value.EA12;
                this.actividadToSave.EA13 = form.value.EA13;
                this.actividadToSave.EA14 = form.value.EA14;
                this.actividadToSave.ECA1 = form.value.ECA1;
                this.actividadToSave.EQ2 = form.value.EQ2;
                this.actividadToSave.EA21 = form.value.EA21;
                this.actividadToSave.EA22 = form.value.EA22;
                this.actividadToSave.EA23 = form.value.EA23;
                this.actividadToSave.EA24 = form.value.EA24;
                this.actividadToSave.ECA2 = form.value.ECA2;
                this.actividadToSave.EQ3 = form.value.EQ3;
                this.actividadToSave.EA31 = form.value.EA31;
                this.actividadToSave.EA32 = form.value.EA32;
                this.actividadToSave.EA33 = form.value.EA33;
                this.actividadToSave.EA34 = form.value.EA34;
                this.actividadToSave.ECA3 = form.value.ECA3;
                //console.log('datosActividadModificada', this.actividadToSave);
                this.ActividadService.uploadActivity(this.actividadToSave).subscribe(res => {
                    //window.location.reload();
                    //console.log('prueba', this.actividadToSave);
                    //console.log(res);
                    if (this.verificationSaveContent == true) {
                        const contenidoREAViejoInfo = {
                            id_CREA: this.contenidoRes.content.id_CREA,
                            en_uso: (this.contenidoRes.content.en_uso - 1)
                        };
                        const contenidoREANuevoInfo = {
                            id_CREA: this.contenidoToSave.id_CREA,
                            en_uso: (this.contenidoToSave.en_uso + 1)
                        };
                        this.ContentREAService.uploadEstadoContentREA(contenidoREANuevoInfo).subscribe(res => {
                            //console.log('nuevo contenido', res);
                            this.ContentREAService.uploadEstadoContentREA(contenidoREAViejoInfo).subscribe(res => {
                                //console.log('viejo contenido', res);
                            });
                        });
                    }
                    if (this.verificationSaveTaller == true) {
                        const tallerViejoInfo = {
                            id_CREA: this.tallerRes.content.id_CREA,
                            en_uso: (this.tallerRes.content.en_uso - 1)
                        };
                        const tallerNuevoInfo = {
                            id_CREA: this.tallerToSave.id_CREA,
                            en_uso: (this.tallerToSave.en_uso + 1)
                        };
                        this.ContentREAService.uploadEstadoContentREA(tallerNuevoInfo).subscribe(res => {
                            //console.log('nuevo contenido', res);
                            this.ContentREAService.uploadEstadoContentREA(tallerViejoInfo).subscribe(res => {
                                //console.log('viejo contenido', res);
                            });
                        });
                    }
                    this.correcto1 = true;
                    this.correcto2 = false;
                    this.error1 = false;
                    this.error2 = false;
                    this.subiendo = false;
                    this.resetForm(form);
                });
            }
            else {
                this.ActividadService.allActivities().subscribe(res => {
                    //console.log(res);
                    this.ActividadService.actividades = res;
                    //console.log('Actividades', this.ActividadService.actividades);
                    //Crear Cont
                    if (this.ActividadService.actividades.length == 0) {
                        this.newCont = 1;
                    }
                    else {
                        if (this.ActividadService.actividades.length) {
                            this.newCont = 1;
                        }
                        for (let n = 0; n < this.ActividadService.actividades.length; n++) {
                            for (let i = 0; i < this.ActividadService.actividades.length; i++) {
                                if (this.ActividadService.actividades[i].id_colegio == this.id_colegioAuth) {
                                    if (n + 1 == this.ActividadService.actividades[i].cont) {
                                        this.newCont = n + 2;
                                        this.temp = 0;
                                        i = this.ActividadService.actividades.length;
                                    }
                                    else {
                                        this.newCont = n + 1;
                                        this.temp = 1;
                                    }
                                }
                            }
                            if (this.temp == 1) {
                                n = this.ActividadService.actividades.length + 1;
                            }
                        }
                    }
                    // ID Actividad
                    var idGlobal = "" + this.id_colegioAuth + this.newCont;
                    this.newID = parseInt(idGlobal);
                    this.actividadToSave.id_actividad = this.newID;
                    this.actividadToSave.cont = this.newCont;
                    this.actividadToSave.id_docente = this.id_docenteAuth;
                    this.actividadToSave.id_colegio = this.id_colegioAuth;
                    this.actividadToSave.id_materia = form.value.id_materia;
                    this.actividadToSave.id_grado = form.value.id_grado;
                    this.actividadToSave.id_materiaActiva = form.value.id_materiaActiva;
                    this.actividadToSave.id_competencia = form.value.id_competencia;
                    this.actividadToSave.titulo_actividad = form.value.titulo_actividad;
                    this.actividadToSave.descripcion_actividad = form.value.descripcion_actividad;
                    this.actividadToSave.descripcion_test = form.value.descripcion_test;
                    this.actividadToSave.taller = 0;
                    this.actividadToSave.Q1 = form.value.Q1;
                    this.actividadToSave.A11 = form.value.A11;
                    this.actividadToSave.A12 = form.value.A12;
                    this.actividadToSave.A13 = form.value.A13;
                    this.actividadToSave.A14 = form.value.A14;
                    this.actividadToSave.CA1 = form.value.CA1;
                    this.actividadToSave.Q2 = form.value.Q2;
                    this.actividadToSave.A21 = form.value.A21;
                    this.actividadToSave.A22 = form.value.A22;
                    this.actividadToSave.A23 = form.value.A23;
                    this.actividadToSave.A24 = form.value.A24;
                    this.actividadToSave.CA2 = form.value.CA2;
                    this.actividadToSave.Q3 = form.value.Q3;
                    this.actividadToSave.A31 = form.value.A31;
                    this.actividadToSave.A32 = form.value.A32;
                    this.actividadToSave.A33 = form.value.A33;
                    this.actividadToSave.A34 = form.value.A34;
                    this.actividadToSave.CA3 = form.value.CA3;
                    this.actividadToSave.evaluacion = 0;
                    this.actividadToSave.descripcion_evaluacion = form.value.descripcion_evaluacion;
                    this.actividadToSave.EQ1 = form.value.EQ1;
                    this.actividadToSave.EA11 = form.value.EA11;
                    this.actividadToSave.EA12 = form.value.EA12;
                    this.actividadToSave.EA13 = form.value.EA13;
                    this.actividadToSave.EA14 = form.value.EA14;
                    this.actividadToSave.ECA1 = form.value.ECA1;
                    this.actividadToSave.EQ2 = form.value.EQ2;
                    this.actividadToSave.EA21 = form.value.EA21;
                    this.actividadToSave.EA22 = form.value.EA22;
                    this.actividadToSave.EA23 = form.value.EA23;
                    this.actividadToSave.EA24 = form.value.EA24;
                    this.actividadToSave.ECA2 = form.value.ECA2;
                    this.actividadToSave.EQ3 = form.value.EQ3;
                    this.actividadToSave.EA31 = form.value.EA31;
                    this.actividadToSave.EA32 = form.value.EA32;
                    this.actividadToSave.EA33 = form.value.EA33;
                    this.actividadToSave.EA34 = form.value.EA34;
                    this.actividadToSave.ECA3 = form.value.ECA3;
                    //console.log('datosActividadModificada', this.actividadToSave);
                    this.ActividadService.createActivity(this.actividadToSave).subscribe(res => {
                        //window.location.reload();
                        //console.log("Creada nueva Actividad");
                        //console.log(res);
                        this.temp2 = res;
                        if (this.temp2.Estado == "Error Crear Actividad") {
                            this.correcto1 = false;
                            this.correcto2 = false;
                            this.error1 = true;
                            this.error2 = false;
                            this.subiendo = false;
                        }
                        else {
                            if (this.verificationSaveContent == true) {
                                const contenidoREANuevoInfo = {
                                    id_CREA: this.contenidoToSave.id_CREA,
                                    en_uso: (this.contenidoToSave.en_uso + 1)
                                };
                                this.ContentREAService.uploadEstadoContentREA(contenidoREANuevoInfo).subscribe(res => {
                                    //console.log('nuevo contenido', res);
                                });
                            }
                            else {
                                const contenidoREAViejoInfo = {
                                    id_CREA: this.contenidoRes.content.id_CREA,
                                    en_uso: (this.contenidoRes.content.en_uso + 1)
                                };
                                this.ContentREAService.uploadEstadoContentREA(contenidoREAViejoInfo).subscribe(res => {
                                    //console.log('viejo contenido', res);
                                });
                            }
                            if (this.verificationSaveTaller == true) {
                                const tallerNuevoInfo = {
                                    id_CREA: this.tallerToSave.id_CREA,
                                    en_uso: (this.tallerToSave.en_uso + 1)
                                };
                                this.ContentREAService.uploadEstadoContentREA(tallerNuevoInfo).subscribe(res => {
                                    //console.log('nuevo contenido', res);
                                });
                            }
                            else {
                                const tallerViejoInfo = {
                                    id_CREA: this.tallerRes.content.id_CREA,
                                    en_uso: (this.tallerRes.content.en_uso + 1)
                                };
                                this.ContentREAService.uploadEstadoContentREA(tallerViejoInfo).subscribe(res => {
                                    //console.log('viejo contenido', res);
                                });
                            }
                            this.correcto1 = false;
                            this.correcto2 = true;
                            this.error1 = false;
                            this.error2 = false;
                            this.subiendo = false;
                            this.resetForm(form);
                        }
                    });
                });
            }
        }
        else {
            this.resetForm(form);
        }
    }
    //Imprimir datos de la Actividad seleccionanda en el Form 
    getActividadinForm(actividad) {
        this.verificationSaveContent = false;
        this.verificationSaveTaller = false;
        this.ActividadService.selectedActividad = actividad;
        this.saveDataActivity(actividad);
        this.materiaSelectedAM = this.actividadToSave.id_materia;
        this.gradoSelecteAM = this.actividadToSave.id_grado;
        //console.log(this.materiaSelectedAM, this.gradoSelecteAM);
        //console.log(this.ContentREAService.contenidosREA);
        const TallerInfo = {
            id_contenidoREA: this.ActividadService.selectedActividad.id_taller,
        };
        //Obtener contenido original de la actividad
        this.ContentREAService.loadContentREA(this.ActividadService.selectedActividad).subscribe(res => {
            this.contenidoRes = res;
            this.contenidoAct.nombre_CREA = this.contenidoRes.content.nombre_CREA;
            this.contenidoAct.descripcion_CREA = this.contenidoRes.content.descripcion_CREA;
            this.contenidoAct.id_grado = this.contenidoRes.content.id_grado;
            for (let x = 0; x < this.materia.length; x++) {
                if (this.contenidoRes.content.id_materia == this.materia[x].id_materia) {
                    this.contenidoAct.materia = this.materia[x].nombre_materia;
                }
            }
            for (let y = 0; y < this.tipoContenido.length; y++) {
                if (this.contenidoRes.content.tipo_CREA == this.tipoContenido[y].id_tipoContenido) {
                    this.contenidoAct.nombre_tipo_CREA = this.tipoContenido[y].nombre_tipoContenido;
                }
            }
            //console.log('contenidoAct', this.contenidoAct);
        });
        //Obtener taller original de la actividad
        this.ContentREAService.loadContentREA(TallerInfo).subscribe(res => {
            this.tallerRes = res;
            this.tallerAct.nombre_CREA = this.tallerRes.content.nombre_CREA;
            this.tallerAct.descripcion_CREA = this.tallerRes.content.descripcion_CREA;
            this.tallerAct.id_grado = this.tallerRes.content.id_grado;
            for (let x = 0; x < this.materia.length; x++) {
                if (this.tallerRes.content.id_materia == this.materia[x].id_materia) {
                    this.tallerAct.materia = this.materia[x].nombre_materia;
                }
            }
            for (let y = 0; y < this.tipoContenido.length; y++) {
                if (this.tallerRes.content.tipo_CREA == this.tipoContenido[y].id_tipoContenido) {
                    this.tallerAct.nombre_tipo_CREA = this.tipoContenido[y].nombre_tipoContenido;
                }
            }
            //console.log('contenidoAct', this.contenidoAct);
        });
    }
    //Almacenar info temporal de un ContenidoREA
    saveDataContent(contenidoREAhtml) {
        this.contenidoToSave = contenidoREAhtml;
        //console.log("contenido guardado:", this.contenidoToSave);
        if (this.contenidoRes.content.id_CREA != this.contenidoToSave.id_CREA) {
            this.verificationSaveContent = true;
        }
        else {
            this.verificationSaveContent = false;
        }
    }
    //Almacenar info temporal de una Actividad
    saveDataActivity(actividad) {
        this.actividadToSave = actividad;
        //console.log("actividad guardada:", this.actividadToSave);
        this.id_docente_ActividadSelected = this.actividadToSave.id_docente;
        this.verificationSaveActividad = true;
    }
    //Almacenar info temporal de un Taller
    saveDataTaller(tallerhtml) {
        this.tallerToSave = tallerhtml;
        //console.log("taller guardado:", this.tallerToSave);
        if (this.tallerRes.content.id_CREA != this.tallerToSave.id_CREA) {
            this.verificationSaveTaller = true;
        }
        else {
            this.verificationSaveTaller = false;
        }
        //console.log('bandera',this.verificationSaveTaller)
    }
    //Almacenar info temporal de una Actividad
    seccionActivity(actividad) {
        this.actividadToSave2 = actividad;
        //console.log("actividad guardada:", this.actividadToSave2);
        if (this.actividadToSave2.taller == 1) {
            this.tallerActivado = true;
            this.tallerDesactivado = false;
        }
        else {
            this.tallerActivado = false;
            this.tallerDesactivado = true;
        }
        if (this.actividadToSave2.evaluacion == 1) {
            this.evaluacionActivado = true;
            this.evaluacionDesactivado = false;
        }
        else {
            this.evaluacionActivado = false;
            this.evaluacionDesactivado = true;
        }
        //console.log(this.tallerActivado,this.tallerDesactivado,this.evaluacionActivado,this.evaluacionDesactivado);
    }
    //Activar o Desactivar Secciones de la Actividad
    activarTaller() {
        const newSeccionActividad = {
            id_actividad: this.actividadToSave2.id_actividad,
            taller: 1,
            evaluacion: this.actividadToSave2.evaluacion
        };
        this.ActividadService.uploadSectionsActivity(newSeccionActividad).subscribe(res => {
            //console.log(res);
            this.getActividades();
        });
    }
    desactivarTaller() {
        const newSeccionActividad = {
            id_actividad: this.actividadToSave2.id_actividad,
            taller: 0,
            evaluacion: this.actividadToSave2.evaluacion
        };
        this.ActividadService.uploadSectionsActivity(newSeccionActividad).subscribe(res => {
            //console.log(res);
            this.getActividades();
        });
    }
    activarEvaluacion() {
        const newSeccionActividad = {
            id_actividad: this.actividadToSave2.id_actividad,
            taller: this.actividadToSave2.taller,
            evaluacion: 1
        };
        this.ActividadService.uploadSectionsActivity(newSeccionActividad).subscribe(res => {
            //console.log(res);
            this.getActividades();
        });
    }
    desactivarEvaluacion() {
        const newSeccionActividad = {
            id_actividad: this.actividadToSave2.id_actividad,
            taller: this.actividadToSave2.taller,
            evaluacion: 0
        };
        this.ActividadService.uploadSectionsActivity(newSeccionActividad).subscribe(res => {
            //console.log(res);
            this.getActividades();
        });
    }
    //Resetear pagina
    resetPage() {
        window.location.reload();
    }
    //Resetear formulario
    resetForm(form) {
        if (form) {
            form.reset();
            this.getActividades();
            this.getContenidos();
            window.scrollTo(0, 0);
            this.verificationSaveContent = false;
            this.verificationSaveTaller = false;
            this.verificationSaveActividad = false;
            //this.contenidoToSave = new contenidoREAI();
            this.actividadToSave = new _models_actividad__WEBPACK_IMPORTED_MODULE_4__["ActividadI"]();
            //this.tallerToSave = new contenidoREAI();
            this.ActividadService.selectedActividad = new _models_actividad__WEBPACK_IMPORTED_MODULE_4__["ActividadI"]();
            this.contenidoAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
            this.tallerAct = { nombre_CREA: "", cont: 0, id_CREA: 0, nombre_tipo_CREA: "", id_grado: 0, materia: "", descripcion_CREA: "" };
            //console.log('reseteo');
        }
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
ModificarActividadComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_6__["AuthDService"] },
    { type: _services_actividad_service__WEBPACK_IMPORTED_MODULE_5__["ActividadService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ModificarActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modificar-actividad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modificar-actividad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modificar-actividad/modificar-actividad.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modificar-actividad.component.css */ "./src/app/components/modificar-actividad/modificar-actividad.component.css")).default]
    })
], ModificarActividadComponent);



/***/ }),

/***/ "./src/app/components/registro-usuario/registro-usuario.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/registro-usuario/registro-usuario.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8tdXN1YXJpby9yZWdpc3Ryby11c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/registro-usuario/registro-usuario.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/registro-usuario/registro-usuario.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegistroUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroUsuarioComponent", function() { return RegistroUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _models_docente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/docente */ "./src/app/models/docente.ts");






let RegistroUsuarioComponent = class RegistroUsuarioComponent {
    constructor(ContentREAService, AuthDService, router) {
        this.ContentREAService = ContentREAService;
        this.AuthDService = AuthDService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.error1 = false;
        this.correcto = false;
        this.subiendo = false;
        this.AuthDService.selectedDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_5__["DocenteI"];
        this.getOptions();
    }
    //Obtener los datos de los options
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
            //console.log("1:",this.materia.length);
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.AuthDService.loadAllColegios().subscribe(res => {
            this.colegios = res;
        });
    }
    //Crear Docente y una MateriaActiva
    onCrearDocente(form) {
        this.error1 = false;
        this.correcto = false;
        this.subiendo = true;
        this.AuthDService.loadAllSubjectActives().subscribe(res => {
            this.AuthDService.MateriasActivas = res;
            this.AuthDService.loadAllDocentes().subscribe(res => {
                this.AuthDService.Docentes = res;
                this.ContentREAService.allSubject().subscribe(res => {
                    this.materia = res;
                    //console.log('info materia',this.materia.length);
                    //Crear Cont Docente
                    if (this.AuthDService.Docentes.length == 0) {
                        this.newContD = 1;
                    }
                    else {
                        if (this.AuthDService.Docentes.length) {
                            this.newContD = 1;
                        }
                        for (let n = 0; n < this.AuthDService.Docentes.length; n++) {
                            for (let i = 0; i < this.AuthDService.Docentes.length; i++) {
                                if (this.AuthDService.Docentes[i].id_colegio == form.value.id_colegio) {
                                    if (this.AuthDService.Docentes.length) {
                                        this.newContD = 1;
                                    }
                                    if (n + 1 == this.AuthDService.Docentes[i].cont) {
                                        this.newContD = n + 2;
                                        this.temp1 = 0;
                                        i = this.AuthDService.Docentes.length;
                                    }
                                    else {
                                        this.newContD = n + 1;
                                        this.temp1 = 1;
                                    }
                                }
                            }
                            if (this.temp1 == 1) {
                                n = this.AuthDService.Docentes.length + 1;
                            }
                        }
                    }
                    // ID Docente
                    var idGlobal = "" + form.value.id_colegio + this.newContD;
                    this.newIDD = parseInt(idGlobal);
                    //Crear Cont MateriaACtiva
                    if (this.AuthDService.MateriasActivas.length == 0) {
                        this.newContMA = 1;
                    }
                    else {
                        if (this.AuthDService.MateriasActivas.length) {
                            this.newContMA = 1;
                        }
                        for (let n = 0; n < this.AuthDService.MateriasActivas.length; n++) {
                            for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
                                if (this.AuthDService.MateriasActivas[i].id_docente == this.newIDD) {
                                    if (this.AuthDService.MateriasActivas.length) {
                                        this.newContMA = 1;
                                    }
                                    if (n + 1 == this.AuthDService.MateriasActivas[i].cont) {
                                        this.newContMA = n + 2;
                                        this.temp2 = 0;
                                        i = this.AuthDService.MateriasActivas.length;
                                    }
                                    else {
                                        this.newContMA = n + 1;
                                        this.temp2 = 1;
                                    }
                                }
                            }
                            if (this.temp2 == 1) {
                                n = this.AuthDService.MateriasActivas.length + 1;
                            }
                        }
                    }
                    // ID materiaActiva
                    var idGlobalMA = "" + this.newIDD + this.newContMA;
                    this.newIDMA = parseInt(idGlobalMA);
                    for (let x = 0; x < this.materia.length; x++) {
                        if (this.materia[x].id_materia == form.value.id_materia) {
                            this.urlTemp = this.materia[x].url_imagen;
                        }
                    }
                    //console.log('form', form.value.nombre_materiaActiva);
                    const newDocente = {
                        id_docente: this.newIDD,
                        cont: this.newContD,
                        tipo_usuario: 2,
                        nombre_docente: form.value.nombre_docente,
                        apellido_docente: form.value.apellido_docente,
                        id_colegio: form.value.id_colegio,
                        nombre_usuario: form.value.nombre_usuario,
                        contrasena: form.value.contrasena,
                        correo_electronico: form.value.correo_electronico,
                    };
                    const newMateriaActiva = {
                        id_materiaActiva: this.newIDMA,
                        cont: this.newContMA,
                        nombre_materiaActiva: form.value.nombre_materiaActiva,
                        id_materia: form.value.id_materia,
                        id_grado: form.value.id_grado,
                        id_docente: this.newIDD,
                        id_colegio: form.value.id_colegio,
                        url_imagen: this.urlTemp
                    };
                    //console.log('datosDocente', newDocente);
                    //console.log('datosMateriaActiva', newMateriaActiva);
                    this.AuthDService.createDocente(newDocente).subscribe(res => {
                        //console.log(res);
                        this.temp = res;
                        if (this.temp.Estado == "Error Crear Docente") {
                            this.error1 = true;
                            this.correcto = false;
                            this.subiendo = false;
                        }
                        this.AuthDService.createSubjectActive(newMateriaActiva).subscribe(res => {
                            //console.log(res);
                            if (this.temp.Estado == "Error Crear Docente") {
                                this.error1 = true;
                                this.correcto = false;
                                this.subiendo = false;
                            }
                            else {
                                this.resetForm(form);
                                this.error1 = false;
                                this.correcto = true;
                                this.subiendo = false;
                            }
                        });
                    });
                });
            });
        });
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    resetPage() {
        window.location.reload();
    }
    resetForm(form) {
        if (form) {
            form.reset();
            window.scrollTo(0, 0);
        }
    }
};
RegistroUsuarioComponent.ctorParameters = () => [
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_4__["ContentREAService"] },
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_3__["AuthDService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegistroUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registro-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-usuario/registro-usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registro-usuario.component.css */ "./src/app/components/registro-usuario/registro-usuario.component.css")).default]
    })
], RegistroUsuarioComponent);



/***/ }),

/***/ "./src/app/components/subir-contenido/subir-contenido.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/subir-contenido/subir-contenido.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViaXItY29udGVuaWRvL3N1YmlyLWNvbnRlbmlkby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/subir-contenido/subir-contenido.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/subir-contenido/subir-contenido.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubirContenidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirContenidoComponent", function() { return SubirContenidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-rea.service */ "./src/app/services/content-rea.service.ts");
/* harmony import */ var _models_contenidoREA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/contenidoREA */ "./src/app/models/contenidoREA.ts");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-d.service */ "./src/app/services/auth-d.service.ts");






let SubirContenidoComponent = class SubirContenidoComponent {
    constructor(AuthDService, ContentREAService, router) {
        this.AuthDService = AuthDService;
        this.ContentREAService = ContentREAService;
        this.router = router;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.comprobacionLogin();
        this.correcto = false;
        this.error = false;
        this.error2 = false;
        this.subiendo = false;
        this.contenidoSeleccionado = false;
        this.nombreContenido = '...';
        this.getOptions();
        this.getContenidos();
        this.id_docenteAuth = this.AuthDService.getIdDocente();
        this.id_colegioAuth = this.AuthDService.getIdColegioDocente();
        //console.log('prueba', this.id_colegioAuth, this.id_docenteAuth);
        this.ContentREAService.selectedContenidoREA = new _models_contenidoREA__WEBPACK_IMPORTED_MODULE_4__["contenidoREAI"]();
    }
    getOptions() {
        this.ContentREAService.allSubject().subscribe(res => {
            this.materia = res;
        });
        this.ContentREAService.allGrade().subscribe(res => {
            this.grado = res;
        });
        this.ContentREAService.allType().subscribe(res => {
            this.tipoContenido = res;
        });
    }
    getContenidos() {
        this.ContentREAService.allContent().subscribe(res => {
            //console.log(res);
            this.ContentREAService.contenidosREA = res;
        });
    }
    //Cargar archivo a subir
    onFileChange(e) {
        this.correcto = false;
        this.error = true;
        //console.log('archivo', e)
        this.uploadedFiles = e.target.files;
        this.nombreContenido = e.target.files[0].name;
        this.contenidoSeleccionado = true;
    }
    //Funcion leer y subir informacion y archivo del formulario a Mongo
    onSubirContenido(form) {
        this.correcto = false;
        this.error = false;
        this.error2 = true;
        this.subiendo = false;
        //console.log('urlFinal', this.urlSelected.url);
        if (this.contenidoSeleccionado == true) {
            this.ContentREAService.allContent().subscribe(res => {
                //console.log(res);
                this.ContentREAService.contenidosREA = res;
                //console.log('Contenidos',  this.ContentREAService.contenidosREA);
                //Generar Cont
                if (this.ContentREAService.contenidosREA.length == 0) {
                    this.newCont = 1;
                }
                else {
                    if (this.ContentREAService.contenidosREA.length) {
                        this.newCont = 1;
                    }
                    for (let n = 0; n < this.ContentREAService.contenidosREA.length; n++) {
                        for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
                            if (this.ContentREAService.contenidosREA[i].id_colegio == this.id_colegioAuth) {
                                if (this.ContentREAService.contenidosREA.length) {
                                    this.newCont = 1;
                                }
                                if (n + 1 == this.ContentREAService.contenidosREA[i].cont) {
                                    this.newCont = n + 2;
                                    this.temp = 0;
                                    i = this.ContentREAService.contenidosREA.length;
                                }
                                else {
                                    this.newCont = n + 1;
                                    this.temp = 1;
                                }
                            }
                        }
                        if (this.temp == 1) {
                            n = this.ContentREAService.contenidosREA.length + 1;
                        }
                    }
                }
                //Generar ID
                var idGlobal = "" + this.id_colegioAuth + this.newCont;
                this.newID = parseInt(idGlobal);
                //console.log('nuevaID y cont', this.newID, this.newCont);
                const newContenidoREA = {
                    //id_CREA: Math.floor((Math.random() * 100) + 1),
                    id_CREA: this.newID,
                    cont: this.newCont,
                    tipo_CREA: this.tipoContenidoSelected,
                    id_docente: this.id_docenteAuth,
                    id_materia: this.materiaSelected,
                    id_grado: this.gradoSelected,
                    id_colegio: this.id_colegioAuth,
                    nombre_CREA: form.value.nombre_CREA,
                    urlrepositorio: 'Temporal',
                    descripcion_CREA: form.value.descripcion_CREA,
                    en_uso: 0
                };
                //console.log('datosContenido', newContenidoREA);
                this.correcto = false;
                this.error = false;
                this.error2 = false;
                this.subiendo = true;
                this.ContentREAService.createContentREA(newContenidoREA).subscribe(res => {
                    //this.router.navigateByUrl('/inicioProfesores')
                    //console.log('res',res);
                    this.temp2 = res;
                    if (this.temp2.Estado == "Error Crear Contenido") {
                        this.correcto = false;
                        this.error = true;
                        this.subiendo = false;
                    }
                    else {
                        this.correcto = false;
                        this.error = false;
                        this.subiendo = true;
                        /*para subir multiples archivos*/
                        let formData = new FormData();
                        for (let i = 0; i < this.uploadedFiles.length; i++) {
                            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
                        }
                        this.ContentREAService.uploadFile(formData).subscribe((res) => {
                            //console.log('url-res', res);
                            this.urlSelected = res;
                            const newUrl = {
                                id_CREA: this.newID,
                                urlrepositorio: this.urlSelected.url
                            };
                            //console.log('newUrl', newUrl);
                            this.ContentREAService.uploadURLContentREA(newUrl).subscribe((res) => {
                                //console.log('res', res);
                                this.correcto = true;
                                this.error = false;
                                this.subiendo = false;
                                this.resetForm(form);
                            });
                        });
                    }
                });
            });
        }
    }
    resetPage() {
        window.location.reload();
    }
    resetForm(form) {
        if (form) {
            form.reset();
            this.contenidoSeleccionado = false;
            this.nombreContenido = "...";
            this.ContentREAService.selectedContenidoREA = new _models_contenidoREA__WEBPACK_IMPORTED_MODULE_4__["contenidoREAI"]();
            window.scrollTo(0, 0);
            //this.ContentREAService.selectedContenidoREA = new contenidoREAI();
        }
    }
    comprobacionLogin() {
        if (this.AuthDService.getIdDocente()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
SubirContenidoComponent.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_5__["AuthDService"] },
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_3__["ContentREAService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SubirContenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subir-contenido',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subir-contenido.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/subir-contenido/subir-contenido.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subir-contenido.component.css */ "./src/app/components/subir-contenido/subir-contenido.component.css")).default]
    })
], SubirContenidoComponent);



/***/ }),

/***/ "./src/app/models/actividad.ts":
/*!*************************************!*\
  !*** ./src/app/models/actividad.ts ***!
  \*************************************/
/*! exports provided: ActividadI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadI", function() { return ActividadI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ActividadI {
    constructor(id_actividad = 0, cont = 0, id_colegio = 0, id_docente = 0, id_materia = 0, id_grado = 0, id_materiaActiva = 0, id_competencia = 0, titulo_actividad = '', descripcion_actividad = '', id_contenidoREA = 0, video = 0, urlvideo = '', lectura = 0, urllectura = '', html = 0, urlhtml = '', Q1 = '', A11 = '', A12 = '', A13 = '', A14 = '', CA1 = 0, Q2 = '', A21 = '', A22 = '', A23 = '', A24 = '', CA2 = 0, Q3 = '', A31 = '', A32 = '', A33 = '', A34 = '', CA3 = 0, audio = 0, urlaudio = '', descripcion_test = '', id_taller = 0, taller = 0, urltaller = '', evaluacion = 0, descripcion_evaluacion = '', autor = '', id_autor = 0) {
        this.id_actividad = id_actividad;
        this.cont = cont;
        this.id_colegio = id_colegio;
        this.id_docente = id_docente;
        this.id_materia = id_materia;
        this.id_grado = id_grado;
        this.id_materiaActiva = id_materiaActiva;
        this.id_competencia = id_competencia;
        this.titulo_actividad = titulo_actividad;
        this.descripcion_actividad = descripcion_actividad;
        this.id_contenidoREA = id_contenidoREA;
        this.video = video;
        this.urlvideo = urlvideo;
        this.documento = lectura;
        this.urldocumento = urllectura;
        this.audio = audio;
        this.urlaudio = urlaudio;
        this.html = html;
        this.urlhtml = urlhtml;
        this.id_taller = id_taller;
        this.taller = taller;
        this.urltaller = urltaller;
        this.descripcion_test = descripcion_test;
        this.Q1 = Q1;
        this.A11 = A11;
        this.A12 = A12;
        this.A13 = A13;
        this.A14 = A14;
        this.CA1 = CA1;
        this.Q2 = Q2;
        this.A21 = A21;
        this.A22 = A22;
        this.A23 = A23;
        this.A24 = A24;
        this.CA2 = CA2;
        this.Q3 = Q3;
        this.A31 = A31;
        this.A32 = A32;
        this.A33 = A33;
        this.A34 = A34;
        this.CA3 = CA3;
        this.evaluacion = evaluacion;
        this.descripcion_evaluacion = descripcion_evaluacion;
        this.EQ1 = Q1;
        this.EA11 = A11;
        this.EA12 = A12;
        this.EA13 = A13;
        this.EA14 = A14;
        this.ECA1 = CA1;
        this.EQ2 = Q2;
        this.EA21 = A21;
        this.EA22 = A22;
        this.EA23 = A23;
        this.EA24 = A24;
        this.ECA2 = CA2;
        this.EQ3 = Q3;
        this.EA31 = A31;
        this.EA32 = A32;
        this.EA33 = A33;
        this.EA34 = A34;
        this.ECA3 = CA3;
        this.autor = autor;
        this.id_autor = id_autor;
    }
}


/***/ }),

/***/ "./src/app/models/areaMateria.ts":
/*!***************************************!*\
  !*** ./src/app/models/areaMateria.ts ***!
  \***************************************/
/*! exports provided: AreaMateriaI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaMateriaI", function() { return AreaMateriaI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AreaMateriaI {
    constructor(id_areaMateria = 0, cont = 0, id_colegio = 0, nombre_areaMateria = '') {
        this.id_areaMateria = id_areaMateria;
        this.cont = cont;
        this.id_colegio = id_colegio;
        this.nombre_areaMateria = nombre_areaMateria;
    }
}


/***/ }),

/***/ "./src/app/models/colegio.ts":
/*!***********************************!*\
  !*** ./src/app/models/colegio.ts ***!
  \***********************************/
/*! exports provided: ColegioI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColegioI", function() { return ColegioI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ColegioI {
    constructor(id_colegio = 0, nombre_colegio = "", ciudad = "", direccion = "", telefono = 0, tipo_colegio = '', calendario = '', colegioActivo = 0) {
        this.id_colegio = id_colegio;
        this.nombre_colegio = nombre_colegio;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipo_colegio = tipo_colegio;
        this.calendario = calendario;
        this.colegioActivo = colegioActivo;
    }
}


/***/ }),

/***/ "./src/app/models/competencia.ts":
/*!***************************************!*\
  !*** ./src/app/models/competencia.ts ***!
  \***************************************/
/*! exports provided: CompetenciaI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciaI", function() { return CompetenciaI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CompetenciaI {
    constructor(id_competencia = 0, cont = 0, id_colegio = 0, nombre_competencia = '', id_areaMateria = 0, gradoInicial = 0, gradoFinal = 0) {
        this.id_competencia = id_competencia;
        this.cont = cont;
        this.id_colegio = id_colegio;
        this.nombre_competencia = nombre_competencia;
        this.id_areaMateria = id_areaMateria;
        this.gradoInicial = gradoInicial;
        this.gradoFinal = gradoFinal;
    }
}


/***/ }),

/***/ "./src/app/models/contenidoREA.ts":
/*!****************************************!*\
  !*** ./src/app/models/contenidoREA.ts ***!
  \****************************************/
/*! exports provided: contenidoREAI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contenidoREAI", function() { return contenidoREAI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class contenidoREAI {
    constructor(id_CREA = 0, cont = 0, tipo_CREA = 0, id_materia = 0, id_grado = 0, en_uso = 0, id_docente = 0, nombre_CREA = '', urlrepositorio = '', descripcion_CREA = '', id_colegio = 0) {
        this.id_CREA = id_CREA;
        this.cont = cont;
        this.tipo_CREA = tipo_CREA;
        this.id_docente = id_docente;
        this.id_materia = id_materia;
        this.id_grado = id_grado;
        this.id_colegio = id_colegio;
        this.nombre_CREA = nombre_CREA;
        this.urlrepositorio = urlrepositorio;
        this.descripcion_CREA = descripcion_CREA;
        this.en_uso = en_uso;
    }
}


/***/ }),

/***/ "./src/app/models/docente.ts":
/*!***********************************!*\
  !*** ./src/app/models/docente.ts ***!
  \***********************************/
/*! exports provided: DocenteI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteI", function() { return DocenteI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DocenteI {
    constructor(id_docente = 0, cont = 0, tipo_usuario = 2, nombre_docente = '', apellido_docente = '', id_colegio = 0, nombre_usuario = '', contrasena = '', correo_electronico = '') {
        this.id_docente = id_docente;
        this.cont = cont;
        this.tipo_usuario = tipo_usuario;
        this.nombre_docente = nombre_docente;
        this.apellido_docente = apellido_docente;
        this.id_colegio = id_colegio;
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.correo_electronico = correo_electronico;
    }
}


/***/ }),

/***/ "./src/app/models/duda.ts":
/*!********************************!*\
  !*** ./src/app/models/duda.ts ***!
  \********************************/
/*! exports provided: DudaI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DudaI", function() { return DudaI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DudaI {
    constructor(id_duda = 0, id_actividad = 0, id_estudiante = 0, pregunta = '', respuesta = '', estado_duda = 0) {
        this.id_duda = id_duda;
        this.id_actividad = id_actividad;
        this.id_estudiante = id_estudiante;
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.estado_duda = estado_duda;
    }
}


/***/ }),

/***/ "./src/app/models/estudiante.ts":
/*!**************************************!*\
  !*** ./src/app/models/estudiante.ts ***!
  \**************************************/
/*! exports provided: EstuadianteI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstuadianteI", function() { return EstuadianteI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EstuadianteI {
    constructor(id_estudiante = 0, tipo_usuario = 1, nombre_estudiante = '', apellido_estudiante = '', id_colegio = 0, nombre_usuario = '', contrasena = '', correo_electronico = '', grado_estudiante = 0, curso_estudiante = 0) {
        this.id_estudiante = id_estudiante;
        this.tipo_usuario = tipo_usuario;
        this.nombre_estudiante = nombre_estudiante;
        this.apellido_estudiante = apellido_estudiante;
        this.grado_estudiante = grado_estudiante;
        this.curso_estudiante = curso_estudiante;
        this.id_colegio = id_colegio;
        this.nombre_usuario = nombre_usuario;
        this.contrasena = contrasena;
        this.correo_electronico = correo_electronico;
    }
}


/***/ }),

/***/ "./src/app/models/grado.ts":
/*!*********************************!*\
  !*** ./src/app/models/grado.ts ***!
  \*********************************/
/*! exports provided: GradoI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradoI", function() { return GradoI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GradoI {
    constructor(id_grado = 0, nombre_grado = '') {
        this.id_grado = id_grado;
        this.nombre_grado = nombre_grado;
    }
}


/***/ }),

/***/ "./src/app/models/materia.ts":
/*!***********************************!*\
  !*** ./src/app/models/materia.ts ***!
  \***********************************/
/*! exports provided: MateriaI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaI", function() { return MateriaI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MateriaI {
    constructor(id_materia = 0, cont = 0, nombre_materia = '', id_colegio = 0, id_areaMateria = 0, url_imagen = '') {
        this.id_materia = id_materia;
        this.cont = cont;
        this.nombre_materia = nombre_materia;
        this.id_colegio = id_colegio;
        this.id_areaMateria = id_areaMateria;
        this.url_imagen = url_imagen;
    }
}


/***/ }),

/***/ "./src/app/models/materiaActiva.ts":
/*!*****************************************!*\
  !*** ./src/app/models/materiaActiva.ts ***!
  \*****************************************/
/*! exports provided: MateriaActivaI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaActivaI", function() { return MateriaActivaI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MateriaActivaI {
    constructor(id_materiaActiva = 0, cont = 0, nombre_materiaActiva = '', id_materia = 0, id_grado = 0, id_docente = 0, id_colegio = 0, url_imagen = '') {
        this.id_materiaActiva = id_materiaActiva;
        this.cont = cont;
        this.nombre_materiaActiva = nombre_materiaActiva;
        this.id_materia = id_materia;
        this.id_grado = id_grado;
        this.id_docente = id_docente;
        this.id_colegio = id_colegio;
        this.url_imagen = url_imagen;
    }
}


/***/ }),

/***/ "./src/app/models/metricaActividad.ts":
/*!********************************************!*\
  !*** ./src/app/models/metricaActividad.ts ***!
  \********************************************/
/*! exports provided: MetricaActividadI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricaActividadI", function() { return MetricaActividadI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MetricaActividadI {
    constructor(id_metrica = 0, inicio = 0, id_actividad = 0, nota_quiz = 0, nota_evaluacion = 0, nota_final = 0, contenido = 0, quiz = 0, taller = 0, evaluacion = 0) {
        this.id_metrica = id_metrica;
        this.id_actividad = id_actividad;
        this.nota_quiz = nota_quiz;
        this.nota_evaluacion = nota_evaluacion;
        this.nota_final = nota_final;
        this.inicio = inicio;
        this.contenido = contenido;
        this.quiz = quiz;
        this.taller = taller;
        this.evaluacion = evaluacion;
    }
}


/***/ }),

/***/ "./src/app/models/metricaVisualizar.ts":
/*!*********************************************!*\
  !*** ./src/app/models/metricaVisualizar.ts ***!
  \*********************************************/
/*! exports provided: MetricaVisualizarI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricaVisualizarI", function() { return MetricaVisualizarI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MetricaVisualizarI {
    constructor(id_metrica = 0, id_evento = 0, id_actividad = 0, id_estudiante = 0, nota_quiz = 0, nota_evaluacion = 0, nota_final = 0, check_inicio = 0, check_contenido = 0, check_quiz = 0, check_taller = 0, check_evaluacion = 0, actividad = '', estudiante = '', inicio = '', contenido = '', quiz = '', taller = '', evaluacion = '') {
        this.id_metrica = id_metrica;
        this.id_evento = id_evento;
        this.id_actividad = id_actividad;
        this.id_estudiante = id_estudiante;
        this.actividad = actividad;
        this.estudiante = estudiante;
        this.nota_quiz = nota_quiz;
        this.nota_evaluacion = nota_evaluacion;
        this.nota_final = nota_final;
        this.check_inicio = check_inicio;
        this.check_contenido = check_contenido;
        this.check_quiz = check_quiz;
        this.check_taller = check_taller;
        this.check_evaluacion = check_evaluacion;
        this.inicio = inicio;
        this.contenido = contenido;
        this.quiz = quiz;
        this.taller = taller;
        this.evaluacion = evaluacion;
    }
}


/***/ }),

/***/ "./src/app/pipes/filter-actividad-delete.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/pipes/filter-actividad-delete.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FilterActividadDeletePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterActividadDeletePipe", function() { return FilterActividadDeletePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterActividadDeletePipe = class FilterActividadDeletePipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreSearch, materiaSearch, gradoSearch, docenteSearch, competenciaSearch) {
        //console.log("entradas:", nombreSearch,  materiaSearch, gradoSearch, docenteSearch, competenciaSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreSearch && item.titulo_actividad.toLowerCase().indexOf(nombreSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaSearch && item.id_materia != materiaSearch) {
                    return false;
                }
                if (gradoSearch && item.id_grado != gradoSearch) {
                    return false;
                }
                if (docenteSearch && item.id_docente != docenteSearch) {
                    return false;
                }
                if (competenciaSearch && item.id_competencia != competenciaSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterActividadDeletePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterActividadDelete'
    })
], FilterActividadDeletePipe);



/***/ }),

/***/ "./src/app/pipes/filter-actividad.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filter-actividad.pipe.ts ***!
  \************************************************/
/*! exports provided: FilterActividadPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterActividadPipe", function() { return FilterActividadPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterActividadPipe = class FilterActividadPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreSearch, materiaSearch, gradoSearch, docenteSearch, competenciaSearch) {
        //console.log("entradas:", nombreSearch,  materiaSearch, gradoSearch, docenteSearch, competenciaSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreSearch && item.titulo_actividad.toLowerCase().indexOf(nombreSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaSearch && item.id_materia != materiaSearch) {
                    return false;
                }
                if (gradoSearch && item.id_grado != gradoSearch) {
                    return false;
                }
                if (docenteSearch && item.id_docente != docenteSearch) {
                    return false;
                }
                if (competenciaSearch && item.id_competencia != competenciaSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterActividadPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterActividad'
    })
], FilterActividadPipe);



/***/ }),

/***/ "./src/app/pipes/filter-colegio-admin.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/filter-colegio-admin.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterColegioAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterColegioAdminPipe", function() { return FilterColegioAdminPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterColegioAdminPipe = class FilterColegioAdminPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreColegioSearch, NITSearch) {
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
            });
        }
        else {
            return items;
        }
    }
};
FilterColegioAdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterColegioAdmin'
    })
], FilterColegioAdminPipe);



/***/ }),

/***/ "./src/app/pipes/filter-competencia-admin.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/filter-competencia-admin.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterCompetenciaAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCompetenciaAdminPipe", function() { return FilterCompetenciaAdminPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterCompetenciaAdminPipe = class FilterCompetenciaAdminPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreCSearch, areaMateriaCSearch, gradoCSearch, gradoInicialCSearch, gradoFinalCSearch, colegioCSearch) {
        //console.log("entradas:", nombreCSearch,  areaMateriaCSearch, gradoCSearch,  gradoInicialCSearch, gradoFinalCSearch, colegioCSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreCSearch && item.nombre_competencia.toLowerCase().indexOf(nombreCSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (areaMateriaCSearch && item.id_areaMateria != areaMateriaCSearch) {
                    return false;
                }
                if ((gradoInicialCSearch && gradoFinalCSearch) && (item.gradoInicial != gradoInicialCSearch || item.gradoFinal != gradoFinalCSearch)) {
                    return false;
                }
                if (gradoCSearch && item.gradoInicial > gradoCSearch) {
                    return false;
                }
                if (gradoCSearch && item.gradoFinal < gradoCSearch) {
                    return false;
                }
                if (colegioCSearch && item.id_colegio != colegioCSearch) {
                    return false;
                }
                if (item.id_areaMateria == 0) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterCompetenciaAdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterCompetenciaAdmin'
    })
], FilterCompetenciaAdminPipe);



/***/ }),

/***/ "./src/app/pipes/filter-competencia.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filter-competencia.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterCompetenciaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCompetenciaPipe", function() { return FilterCompetenciaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_content_rea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/content-rea.service */ "./src/app/services/content-rea.service.ts");



let FilterCompetenciaPipe = class FilterCompetenciaPipe {
    constructor(ContentREAService) {
        this.ContentREAService = ContentREAService;
        this.ContentREAService.allSubject().subscribe(res => {
            this.Materia = res;
        });
    }
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreCSearch, materiaCSearch, gradoCSearch) {
        if (this.Materia) {
            for (let n = 0; n < this.Materia.length; n++) {
                if (materiaCSearch == this.Materia[n].id_materia) {
                    this.id_areaMateria = this.Materia[n].id_areaMateria;
                }
            }
        }
        //console.log("entradas:", nombreCSearch,  materiaCSearch, gradoCSearch);
        //console.log("id_area", this.id_areaMateria);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreCSearch && item.nombre_competencia.toLowerCase().indexOf(nombreCSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaCSearch && item.id_areaMateria != this.id_areaMateria) {
                    return false;
                }
                if (item.id_areaMateria == 0) {
                    return false;
                }
                if (gradoCSearch && item.gradoInicial > gradoCSearch) {
                    return false;
                }
                if (gradoCSearch && item.gradoFinal < gradoCSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterCompetenciaPipe.ctorParameters = () => [
    { type: _services_content_rea_service__WEBPACK_IMPORTED_MODULE_2__["ContentREAService"] }
];
FilterCompetenciaPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterCompetencia'
    })
], FilterCompetenciaPipe);



/***/ }),

/***/ "./src/app/pipes/filter-content-delete.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/filter-content-delete.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterContentDeletePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContentDeletePipe", function() { return FilterContentDeletePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_d_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-d.service */ "./src/app/services/auth-d.service.ts");



let FilterContentDeletePipe = class FilterContentDeletePipe {
    constructor(AuthDService) {
        this.AuthDService = AuthDService;
        this.id_docenteAuth = this.AuthDService.getIdDocente();
    }
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreSearch, materiaSearch, gradoSearch, tipoContenidoSearch) {
        //console.log("entradas:", nombreSearch,  materiaSearch, gradoSearch, tipoContenidoSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreSearch && item.nombre_CREA.toLowerCase().indexOf(nombreSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaSearch && item.materia != materiaSearch) {
                    return false;
                }
                if (gradoSearch && item.id_grado != gradoSearch) {
                    return false;
                }
                if (tipoContenidoSearch && item.tipo_CREA != tipoContenidoSearch) {
                    return false;
                }
                if (this.id_docenteAuth && item.id_docente != this.id_docenteAuth) {
                    return false;
                }
                if (item.en_uso != 0) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterContentDeletePipe.ctorParameters = () => [
    { type: _services_auth_d_service__WEBPACK_IMPORTED_MODULE_2__["AuthDService"] }
];
FilterContentDeletePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterContentDelete'
    })
], FilterContentDeletePipe);



/***/ }),

/***/ "./src/app/pipes/filter-content.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filter-content.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterContentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContentPipe", function() { return FilterContentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterContentPipe = class FilterContentPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreSearch, materiaSearch, gradoSearch, docenteSearch, tipoContenidoSearch, id_taller) {
        //console.log("entradas:", nombreSearch,  materiaSearch, gradoSearch, docenteSearch, tipoContenidoSearch, id_taller);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreSearch && item.nombre_CREA.toLowerCase().indexOf(nombreSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaSearch && item.materia != materiaSearch) {
                    return false;
                }
                if (gradoSearch && item.id_grado != gradoSearch) {
                    return false;
                }
                if (docenteSearch && item.id_docente != docenteSearch) {
                    return false;
                }
                if (tipoContenidoSearch && item.tipo_CREA != tipoContenidoSearch) {
                    return false;
                }
                if (id_taller && item.tipo_CREA == id_taller) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterContentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterContent'
    })
], FilterContentPipe);



/***/ }),

/***/ "./src/app/pipes/filter-docente-admin.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/filter-docente-admin.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterDocenteAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDocenteAdminPipe", function() { return FilterDocenteAdminPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterDocenteAdminPipe = class FilterDocenteAdminPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, palabraSearch, colegioSearch) {
        //console.log("entradas:", nombreSearch, colegioSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (palabraSearch && (item.nombre_docente.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) &&
                    (item.apellido_docente.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) &&
                    (item.nombre_usuario.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) &&
                    (item.correo_electronico.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1)) {
                    return false;
                }
                if (colegioSearch && item.id_colegio != colegioSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterDocenteAdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterDocenteAdmin'
    })
], FilterDocenteAdminPipe);



/***/ }),

/***/ "./src/app/pipes/filter-duda.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-duda.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterDudaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDudaPipe", function() { return FilterDudaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterDudaPipe = class FilterDudaPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreSearch, materiaSearch, gradoSearch, docenteSearch, estadoDuda, nombreEstudianteSearch) {
        //console.log("entradas:", nombreSearch, nombreEstudianteSearch,  materiaSearch, gradoSearch, docenteSearch, estadoDuda);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreSearch && item.nombre_actividad.toLowerCase().indexOf(nombreSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (nombreEstudianteSearch && item.estudiante.toLowerCase().indexOf(nombreEstudianteSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaSearch && item.id_materia != materiaSearch) {
                    return false;
                }
                if (gradoSearch && item.id_grado != gradoSearch) {
                    return false;
                }
                if (docenteSearch && item.id_docente != docenteSearch) {
                    return false;
                }
                if (item.estado_duda != estadoDuda) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterDudaPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterDuda'
    })
], FilterDudaPipe);



/***/ }),

/***/ "./src/app/pipes/filter-estudiante-metricas.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/pipes/filter-estudiante-metricas.pipe.ts ***!
  \**********************************************************/
/*! exports provided: FilterEstudianteMetricasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEstudianteMetricasPipe", function() { return FilterEstudianteMetricasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterEstudianteMetricasPipe = class FilterEstudianteMetricasPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, palabraSearch, optionSearch) {
        //console.log("entradas:", palabraSearch, optionSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (palabraSearch && (item.estudiante.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1)) {
                    return false;
                }
                if (optionSearch && optionSearch == 1 && item.check_contenido != 1) {
                    return false;
                }
                if (optionSearch && optionSearch == 2 && item.check_quiz != 1) {
                    return false;
                }
                if (optionSearch && optionSearch == 3 && item.check_taller != 1) {
                    return false;
                }
                if (optionSearch && optionSearch == 4 && item.check_evaluacion != 1) {
                    return false;
                }
                if (optionSearch && optionSearch == 5 && item.check_contenido != 0) {
                    return false;
                }
                if (optionSearch && optionSearch == 6 && item.check_quiz != 0) {
                    return false;
                }
                if (optionSearch && optionSearch == 7 && item.check_taller != 0) {
                    return false;
                }
                if (optionSearch && optionSearch == 8 && item.check_evaluacion != 0) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterEstudianteMetricasPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterEstudianteMetricas'
    })
], FilterEstudianteMetricasPipe);



/***/ }),

/***/ "./src/app/pipes/filter-estudiantes-admin.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/filter-estudiantes-admin.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterEstudiantesAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEstudiantesAdminPipe", function() { return FilterEstudiantesAdminPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterEstudiantesAdminPipe = class FilterEstudiantesAdminPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, palabraSearch, gradoSearch, cursoSearch, colegioSearch) {
        //console.log("entradas:", palabraSearch, gradoSearch, cursoSearch, colegioSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (palabraSearch && (item.nombre_estudiante.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) &&
                    (item.apellido_estudiante.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) &&
                    (item.nombre_usuario.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1) &&
                    (item.correo_electronico.toLowerCase().indexOf(palabraSearch.toLowerCase()) === -1)) {
                    return false;
                }
                if (gradoSearch && item.grado_estudiante != gradoSearch) {
                    return false;
                }
                if (cursoSearch && item.curso_estudiante != cursoSearch) {
                    return false;
                }
                if (colegioSearch && item.id_colegio != colegioSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterEstudiantesAdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterEstudiantesAdmin'
    })
], FilterEstudiantesAdminPipe);



/***/ }),

/***/ "./src/app/pipes/filter-materiaactiva-admin.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/pipes/filter-materiaactiva-admin.pipe.ts ***!
  \**********************************************************/
/*! exports provided: FilterMateriaactivaAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMateriaactivaAdminPipe", function() { return FilterMateriaactivaAdminPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterMateriaactivaAdminPipe = class FilterMateriaactivaAdminPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, materiaSearch, gradoSearch, docenteSearch, colegioSearch) {
        //console.log("entradas:", materiaSearch, gradoSearch, docenteSearch, colegioSearch);
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
                if (colegioSearch && item.id_colegio != colegioSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterMateriaactivaAdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterMateriaactivaAdmin'
    })
], FilterMateriaactivaAdminPipe);



/***/ }),

/***/ "./src/app/pipes/filter-mi-materias.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filter-mi-materias.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterMiMateriasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMiMateriasPipe", function() { return FilterMiMateriasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterMiMateriasPipe = class FilterMiMateriasPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, materiaSearch, gradoSearch, docenteSearch) {
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
            });
        }
        else {
            return items;
        }
    }
};
FilterMiMateriasPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterMiMaterias'
    })
], FilterMiMateriasPipe);



/***/ }),

/***/ "./src/app/pipes/filter-table-materia-docente.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/pipes/filter-table-materia-docente.pipe.ts ***!
  \************************************************************/
/*! exports provided: FilterTableMateriaDocentePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableMateriaDocentePipe", function() { return FilterTableMateriaDocentePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTableMateriaDocentePipe = class FilterTableMateriaDocentePipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, idDocenteSearch) {
        //console.log("entradas:", idDocenteSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (idDocenteSearch && item.id_docente != idDocenteSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterTableMateriaDocentePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterTableMateriaDocente'
    })
], FilterTableMateriaDocentePipe);



/***/ }),

/***/ "./src/app/pipes/filter-taller.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/filter-taller.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterTallerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTallerPipe", function() { return FilterTallerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTallerPipe = class FilterTallerPipe {
    //transform(value: any, ...args: any[]): any {
    transform(items, nombreSearch, materiaSearch, gradoSearch, docenteSearch, tipoContenidoSearch) {
        //console.log("entradas:", nombreSearch,  materiaSearch, gradoSearch, docenteSearch, tipoContenidoSearch);
        //console.log("item:", items);
        if (items && items.length) {
            return items.filter(item => {
                if (nombreSearch && item.nombre_CREA.toLowerCase().indexOf(nombreSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (materiaSearch && item.materia != materiaSearch) {
                    return false;
                }
                if (gradoSearch && item.id_grado != gradoSearch) {
                    return false;
                }
                if (docenteSearch && item.id_docente != docenteSearch) {
                    return false;
                }
                if (tipoContenidoSearch && item.tipo_CREA != tipoContenidoSearch) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterTallerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterTaller'
    })
], FilterTallerPipe);



/***/ }),

/***/ "./src/app/services/actividad.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/actividad.service.ts ***!
  \***********************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_actividad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/actividad */ "./src/app/models/actividad.ts");




let ActividadService = class ActividadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.AUTHD_SERVER = "http://localhost:3000";
        //this.localStorageService = sessionStorage;
        this.localStorageService = localStorage;
        this.selectedActividad = new _models_actividad__WEBPACK_IMPORTED_MODULE_3__["ActividadI"];
    }
    //Servicio para crear la Actividad en MongoDB
    createActivity(actividad) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createActivity`, actividad);
    }
    //Servicio llamar una Actividad en MongoDB
    loadActivity(id) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadActivity`, id);
    }
    //Servicio para llamar todas las ACtividades en MongoDB
    allActivities() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllActivities`);
    }
    //Servicio para modificar datos de la Actividad en MongoDB 
    uploadActivity(actividad) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadActivity`, actividad);
    }
    //Servicio para modificar Secciones de la Actividad en MongoDB 
    uploadSectionsActivity(infoSections) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadSectionsActivity`, infoSections);
    }
    //Servicio para borrar la Actividad de MongoDB
    deleteActivity(actividad) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteActivity`, actividad);
    }
    //Servicio para llamar todas las Competencias en Mongo
    allCompetencias() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllCompetencias`);
    }
    //Servicio para llamar todos los Docentes en Mongo
    allDocente() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllDocentes`);
    }
};
ActividadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ActividadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ActividadService);



/***/ }),

/***/ "./src/app/services/auth-admin.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-admin.service.ts ***!
  \************************************************/
/*! exports provided: AuthAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminService", function() { return AuthAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_colegio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/colegio */ "./src/app/models/colegio.ts");
/* harmony import */ var _models_docente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/docente */ "./src/app/models/docente.ts");
/* harmony import */ var _models_materiaActiva__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/materiaActiva */ "./src/app/models/materiaActiva.ts");
/* harmony import */ var _models_materia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/materia */ "./src/app/models/materia.ts");
/* harmony import */ var _models_competencia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/competencia */ "./src/app/models/competencia.ts");
/* harmony import */ var _models_areaMateria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/areaMateria */ "./src/app/models/areaMateria.ts");
/* harmony import */ var _models_grado__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/grado */ "./src/app/models/grado.ts");
/* harmony import */ var _models_actividad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/actividad */ "./src/app/models/actividad.ts");
/* harmony import */ var _models_contenidoREA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/contenidoREA */ "./src/app/models/contenidoREA.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_15__);
















let AuthAdminService = class AuthAdminService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.AUTHD_SERVER = "http://localhost:3000";
        this.authAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        //this.localStorageService = sessionStorage;
        this.localStorageService = localStorage;
        //this.currentSession = this.loadSessionData();
        //this.IPServer = '192.168.31.186';
        //this.IPServer = '192.168.1.53';
        this.IPGlobal = '192.168.1.53';
        this.selectedMateriaActiva = new _models_materiaActiva__WEBPACK_IMPORTED_MODULE_6__["MateriaActivaI"];
        this.selectedContenidoREA = new _models_contenidoREA__WEBPACK_IMPORTED_MODULE_12__["contenidoREAI"];
        this.selectedCompetencia = new _models_competencia__WEBPACK_IMPORTED_MODULE_8__["CompetenciaI"];
        this.selectedAreaMateria = new _models_areaMateria__WEBPACK_IMPORTED_MODULE_9__["AreaMateriaI"];
        this.selectedActividad = new _models_actividad__WEBPACK_IMPORTED_MODULE_11__["ActividadI"];
        this.selectedDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_5__["DocenteI"];
        this.selectedColegio = new _models_colegio__WEBPACK_IMPORTED_MODULE_4__["ColegioI"];
        this.selectedMateria = new _models_materia__WEBPACK_IMPORTED_MODULE_7__["MateriaI"];
        this.selectedGrado = new _models_grado__WEBPACK_IMPORTED_MODULE_10__["GradoI"];
    }
    //====================================================================================  IPSERVER
    saveIPServer(ipServer) {
        this.localStorageService.setItem("IPSERVER", ipServer);
    }
    loadIPServer() {
        var IPServer = this.localStorageService.getItem("IPSERVER");
        return IPServer;
    }
    pruebaIP() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/prueba`);
    }
    //====================================================================================  LOGIN
    //Servicio Verificacion de Login
    loginAdmin(login) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loginAdmin`, login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])((res) => {
            if (res) {
                //this.saveData(res.dataDocente.id_docente, res.dataDocente)
                //console.log('login res:', res);
                this.temp = res;
                if (this.temp.Estado != "Error Servidor" && this.temp.Estado != "Error Login") {
                    this.saveSession(res.dataAdmin.id_admin, res.dataAdmin.accessToken, res.dataAdmin.expiresIn, res.dataAdmin.nombre_usuario);
                }
            }
        }));
    }
    //Servicio de Logout
    logout() {
        this.token = '';
        this.id_adminAuth = 0;
        this.nombre_usuarioAuth = '';
        localStorage.removeItem("ID_ADMIN");
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
        localStorage.removeItem("NOMBRE_USUARIO");
        //localStorage.clear();
    }
    //Guardar Informacion de inicio de Sesion
    saveSession(id_admin, token, expiresIn, nombre_usuario) {
        this.localStorageService.setItem("ID_ADMIN", id_admin);
        this.localStorageService.setItem("ACCESS_TOKEN", token);
        this.localStorageService.setItem("EXPIRES_IN", expiresIn);
        this.localStorageService.setItem("NOMBRE_USUARIO", nombre_usuario);
        this.token = token;
        this.id_adminAuth = id_admin;
        this.nombre_usuarioAuth = nombre_usuario;
    }
    getToken() {
        this.token = localStorage.getItem("ACCESS_TOKEN");
        return this.token;
    }
    getIdAdmin() {
        var id_adminAuthString = this.localStorageService.getItem("ID_ADMIN");
        if (!Object(util__WEBPACK_IMPORTED_MODULE_15__["isNullOrUndefined"])(id_adminAuthString)) {
            //console.log('prueba',id_adminAuthString);
            return parseInt(id_adminAuthString);
        }
        else {
            return null;
        }
    }
    getNombreUsuario() {
        this.nombre_usuarioAuth = this.localStorageService.getItem("NOMBRE_USUARIO");
        return this.nombre_usuarioAuth;
    }
    isAuthenticated() {
        return (this.getToken() != null) ? true : false;
    }
    ;
    //====================================================================================  MATERIAACTIVA
    //Crear Materia Activa del profesor
    createSubjectActive(materiaActiva) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createSubjectActive`, materiaActiva);
    }
    //Cragar Todas las Materias Activas
    loadAllSubjectActives() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSubjectActives`);
    }
    //Eliminar una Actividad Activa
    deleteSubjectActive(materiaActiva) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteSubjectActive`, materiaActiva);
    }
    //====================================================================================  MATERIA
    //Crear Materia Activa del profesor
    createMateria(materiaActiva) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createSubject`, materiaActiva);
    }
    //Cragar Todas las Materias Activas
    loadAllMaterias() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSubjects`);
    }
    //Eliminar una Actividad Activa
    deleteMateria(infoID) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteSubject`, infoID);
    }
    //====================================================================================  DOCENTE
    //Servicio Crear Docente
    createDocente(docente) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createDocente`, docente);
    }
    //Buscar un Docente
    loadDocente(infoID) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadDocente`, infoID);
    }
    //Cragar Todos los docentes
    loadAllDocentes() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllDocentes`);
    }
    //Eliminar un Docente
    deleteDocente(InfoID) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteDocente`, InfoID);
    }
    //Modificar datos Login del Docente en MongoDB 
    uploadInfoLoginDocente(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadInfoLoginDocente`, info);
    }
    //Modificar datos Presonales del Docente en MongoDB 
    uploadInfoPersonalDocente(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadInfoPersonalDocente`, info);
    }
    //Modificar Docente en MongoDB 
    uploadDocente(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadDocente`, info);
    }
    //====================================================================================  Estudiantes
    //Servicio Crear Estudiante
    createEstudiante(estudiante) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createEstudiante`, estudiante);
    }
    //Buscar un Estudiante
    loadEstudiante(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadEstudiante`, info);
    }
    //Cargar Todos los Estudiantes
    loadAllEstudiantes() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllEstudiantes`);
    }
    //Eliminar un Estudiante
    deleteEstudiante(infoID) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteEstudiante`, infoID);
    }
    //Modificar Estudiante en MongoDB 
    uploadEstudiante(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadEstudiante`, info);
    }
    //====================================================================================  ContenidoREA
    //Servicio para crear el contenido en MongoDB
    createContentREA(contenidoREA) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createContentREA`, contenidoREA);
    }
    //Servicio para cambiar el estado de USO del contenido en Mongo
    uploadEstadoContentREA(data) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadEstadoContentREA`, data);
    }
    //Servicio para subir el contenido al Repositorio ***
    uploadFile(formData) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/subir`, formData);
    }
    //Buscar un Contenido
    loadContentREA(data) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadContentREA`, data);
    }
    //Servicio para llamar todos los contenidos en MongoDB
    allContent() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllcontents`);
    }
    newAllContents() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadContentREA`);
    }
    //Servicio para borrar el contenido de MongoDB
    deleteContentREA(contenidoREA) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteContentREA/`, contenidoREA);
    }
    //====================================================================================  Actividades
    //Servicio para crear la Actividad en MongoDB
    createActivity(actividad) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createActivity`, actividad);
    }
    //Servicio para llamar todas las ACtividades en MongoDB
    allActivities() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllActivities`);
    }
    //Servicio para modificar datos de la Actividad en MongoDB 
    uploadActivity(actividad) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadActivity`, actividad);
    }
    //Servicio para borrar la Actividad de MongoDB
    deleteActivity(actividad) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteActivity`, actividad);
    }
    //====================================================================================  COMPETENCIAS
    //Servicio para crear la Competencia en MongoDB
    createCompetencia(competencia) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createCompetencia`, competencia);
    }
    //Servicio para llamar todas las Competencias en Mongo
    allCompetencias() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllCompetencias`);
    }
    //Servicio para borrar la Competencia de MongoDB
    deleteCompetencia(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteCompetencia`, info);
    }
    //====================================================================================  AreaMateria
    //Servicio para crear la AreaMateria en MongoDB
    createAreaSubject(areaMateria) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createAreaSubject`, areaMateria);
    }
    //Servicio para llamar todas las AreaMaterias en Mongo
    loadAllAreaSubjects() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllAreaSubjects`);
    }
    //Servicio para borrar la AreaMateria de MongoDB
    deleteAreaSubject(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteAreaSubject`, info);
    }
    //====================================================================================  COLEGIO
    //Servicio para crear colegio
    createColegio(newColegio) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createSchool`, newColegio);
    }
    //Servicio para obtener todos los colegio
    loadAllColegios() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSchools`);
    }
    //Servicio para obtener la informacion de un colegio
    loadColegio(infoColegio) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadSchool`, infoColegio);
    }
    //Servicio para modificar datos del colegio en MongoDB 
    uploadSchool(infoColegio) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadSchool`, infoColegio);
    }
    //====================================================================================  GRADOS
    //Servicio para crear un grado en Mongo 
    createGrade(grado) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createGrade`, grado);
    }
    //Servicio para llamar todos los grados
    allGrade() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllGrades`);
    }
    newAllGrades() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadGrades`);
    }
    //Servicio para modificar datos del colegio en MongoDB 
    deleteGrade(infoID) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteGrade`, infoID);
    }
    //------------------------------------------------------------------------------------ Servicions de Ayuda
    //Servicio para llamar todas las materias
    allSubject() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSubjects`);
    }
    newAllSubjects() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadSubjects`);
    }
    //Servicio para llamar todos los tipos de Contenidos
    allType() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllTypes`);
    }
    newAllTypes() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadTypes`);
    }
    //Servicio para cambiar contraseña de Administrador en MongoDB 
    uploadInfoLoginAdmin(infoC) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadInfoLoginAdmin`, infoC);
    }
};
AuthAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
];
AuthAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthAdminService);



/***/ }),

/***/ "./src/app/services/auth-d.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/auth-d.service.ts ***!
  \********************************************/
/*! exports provided: AuthDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDService", function() { return AuthDService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_docente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/docente */ "./src/app/models/docente.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_materiaActiva__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/materiaActiva */ "./src/app/models/materiaActiva.ts");
/* harmony import */ var _models_colegio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/colegio */ "./src/app/models/colegio.ts");
/* harmony import */ var _models_duda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/duda */ "./src/app/models/duda.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);











let AuthDService = class AuthDService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.AUTHD_SERVER = "http://localhost:3000";
        this.authDocente = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        //this.localStorageService = sessionStorage;
        this.localStorageService = localStorage;
        //this.currentSession = this.loadSessionData();
        this.selectedDocente = new _models_docente__WEBPACK_IMPORTED_MODULE_3__["DocenteI"];
        this.selectedMateriaActiva = new _models_materiaActiva__WEBPACK_IMPORTED_MODULE_6__["MateriaActivaI"];
        this.selectedColegio = new _models_colegio__WEBPACK_IMPORTED_MODULE_7__["ColegioI"];
        this.selectedDuda = new _models_duda__WEBPACK_IMPORTED_MODULE_8__["DudaI"];
    }
    //====================================================================================  IPSERVER
    loadIPServer() {
        var IPServer = this.localStorageService.getItem("IPSERVER");
        return IPServer;
    }
    //====================================================================================  DOCENTE
    //Servicio Crear Docente
    createDocente(docente) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createDocente`, docente);
    }
    //Buscar un Docente
    loadDocente(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadDocente`, info);
    }
    //Cragar Todos los docentes
    loadAllDocentes() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllDocentes`);
    }
    //Eliminar una Actividad Activa
    deleteDocente(docente) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteDocente`, docente);
    }
    //Modificar datos Login del Docente en MongoDB 
    uploadInfoLoginDocente(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadInfoLoginDocente`, info);
    }
    //Modificar datos Presonales del Docente en MongoDB 
    uploadInfoPersonalDocente(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadInfoPersonalDocente`, info);
    }
    //====================================================================================  LOGIN
    register(docente) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/register`, docente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (res) {
                // guardar token
                //this.saveToken(res.dataDocente.accessToken, res.dataDocente.expiresIn);
            }
        }));
    }
    //Sericio Verificacion de Login
    loginDocente(docente) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loginDocente`, docente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            if (res) {
                //this.saveData(res.dataDocente.id_docente, res.dataDocente)
                //console.log('login res:', res);
                this.temp = res;
                if (this.temp.Estado != "Error Servidor" && this.temp.Estado != "Error Login") {
                    this.saveSession(res.dataDocente.id_docente, res.dataDocente.nombre_docente, res.dataDocente.apellido_docente, res.dataDocente.accessToken, res.dataDocente.expiresIn, res.dataDocente.nombre_usuario, res.dataDocente.id_colegio);
                }
            }
        }));
    }
    //Servicio de Logout
    logout() {
        this.token = '';
        this.nombreApellido_docenteAuth = '';
        this.id_docenteAuth = 0;
        this.nombre_usuarioAuth = "";
        localStorage.removeItem("ID_DOCENTE");
        localStorage.removeItem("NOMBRE_DOCENTE");
        localStorage.removeItem("APELLIDO_DOCENTE");
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
        localStorage.removeItem("NOMBRE_USUARIO");
        localStorage.removeItem("ID_COLEGIO");
    }
    //Guardar Informacion de inicio de Sesion
    saveSession(id_docent, nombre_docente, apellido_docente, token, expiresIn, nombre_usuario, id_colegio) {
        this.localStorageService.setItem("ID_DOCENTE", id_docent);
        this.localStorageService.setItem("NOMBRE_DOCENTE", nombre_docente);
        this.localStorageService.setItem("APELLIDO_DOCENTE", apellido_docente);
        this.localStorageService.setItem("ACCESS_TOKEN", token);
        this.localStorageService.setItem("EXPIRES_IN", expiresIn);
        this.localStorageService.setItem("NOMBRE_USUARIO", nombre_usuario);
        this.localStorageService.setItem("ID_COLEGIO", id_colegio);
        this.token = token;
        this.nombreApellido_docenteAuth = nombre_docente + " " + apellido_docente;
        //console.log('prueba', this.nombreApellido_docenteAuth);
        this.id_docenteAuth = id_docent;
        this.nombre_usuarioAuth = nombre_usuario;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem("ACCESS_TOKEN");
        }
        return this.token;
    }
    getnombreApellidoDocente() {
        if (!this.nombreApellido_docenteAuth) {
            this.nombreApellido_docenteAuth = this.localStorageService.getItem("NOMBRE_DOCENTE") + " " + this.localStorageService.getItem("APELLIDO_DOCENTE");
        }
        return this.nombreApellido_docenteAuth;
    }
    getIdDocente() {
        var id_docenteAuthString = this.localStorageService.getItem("ID_DOCENTE");
        //console.log('prueba',id_docenteAuthString);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_10__["isNullOrUndefined"])(id_docenteAuthString)) {
            return parseInt(id_docenteAuthString);
        }
        else {
            return null;
        }
    }
    getIdColegioDocente() {
        var id_ColegioAuthString = this.localStorageService.getItem("ID_COLEGIO");
        return parseInt(id_ColegioAuthString);
    }
    getNombreUsuario() {
        if (!this.nombre_usuarioAuth) {
            this.nombre_usuarioAuth = this.localStorageService.getItem("NOMBRE_USUARIO");
        }
        return this.nombre_usuarioAuth;
    }
    isAuthenticated() {
        return (this.getToken() != null) ? true : false;
    }
    ;
    //====================================================================================  MATERIAACTIVA
    //Crear Materia Activa del profesor
    createSubjectActive(materiaActiva) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createSubjectActive`, materiaActiva);
    }
    //Cragar Todas las Materias Activas
    loadAllSubjectActives() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSubjectActives`);
    }
    //Eliminar una Materia Activa
    deleteSubjectActive(materiaActiva) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteSubjectActive`, materiaActiva);
    }
    //====================================================================================  COLEGIO
    //Servicio para obtener todos los colegio
    loadAllColegios() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSchools`);
    }
    //Servicio para obtener la informacion de un colegio
    loadColegio(infoColegio) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadSchool`, infoColegio);
    }
    //====================================================================================  DUDAS
    //Servicio para obtener todos los colegio
    loadAllDudas() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllDudas`);
    }
    //Ingresar respuesta y estado de la Duda en MongoDB 
    uploadRespuestaDuda(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadRespuestaDuda`, info);
    }
    //Modificar estado de la Duda en MongoDB 
    uploadEstadoDuda(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadEstadoDuda`, info);
    }
    //====================================================================================  EVENTOS
    //Servicio para obtener todos los Eventos
    loadAllEvento() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllEventoForAngular`);
    }
    //Ingresar respuesta y estado de la Duda en MongoDB 
    loadEvento(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadEvento`, info);
    }
    //====================================================================================  Estudiantes
    //Buscar un Estudiante
    loadEstudiante(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadEstudiante`, info);
    }
    //Cargar Todos los Estudiantes
    loadAllEstudiantes() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllEstudiantes`);
    }
    //Actualizar datos de evento en MongoDB 
    uploadEvento(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadEvento`, info);
    }
    //Actualizar datos de evento en MongoDB 
    uploadEstadoEvento(info) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadEstadoEvento`, info);
    }
    //====================================================================================  Servicios de Ayuda
    //Servicio para llamar todas las materias
    allSubject() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSubjects`);
    }
    //Servicio para llamar todos los grados
    allGrade() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllGrades`);
    }
    //Servicio para llamar todas las ACtividades en MongoDB
    allActivities() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllActivities`);
    }
    allType() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllTypes`);
    }
};
AuthDService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
AuthDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthDService);



/***/ }),

/***/ "./src/app/services/content-rea.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/content-rea.service.ts ***!
  \*************************************************/
/*! exports provided: ContentREAService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentREAService", function() { return ContentREAService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_contenidoREA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/contenidoREA */ "./src/app/models/contenidoREA.ts");




let ContentREAService = class ContentREAService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.AUTHD_SERVER = "http://localhost:3000";
        //this.localStorageService = sessionStorage;
        this.localStorageService = localStorage;
        this.selectedContenidoREA = new _models_contenidoREA__WEBPACK_IMPORTED_MODULE_3__["contenidoREAI"];
    }
    //====================================================================================  IPSERVER
    loadIPServer() {
        var IPServer = this.localStorageService.getItem("IPSERVER");
        return IPServer;
    }
    //------------------------------------------------------------------------------------ ContenidoREA
    //Servicio para crear el contenido en MongoDB
    createContentREA(contenidoREA) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/createContentREA`, contenidoREA);
    }
    //Servicio para cambiar el estado de USO del contenido en Mongo
    uploadEstadoContentREA(data) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadEstadoContentREA`, data);
    }
    //Servicio para cambiar la URL del contenido en Mongo
    uploadURLContentREA(data) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/uploadURLContentREA`, data);
    }
    //Servicio para subir el contenido al Repositorio ***
    uploadFile(formData) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/subir`, formData);
    }
    //Buscar un Contenido
    loadContentREA(data) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadContentREA`, data);
    }
    //Servicio para llamar todos los contenidos en MongoDB
    allContent() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllcontents`);
    }
    newAllContents() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadContentREA`);
    }
    //Servicio para borrar el contenido de MongoDB
    deleteContentREA(contenidoREA) {
        return this.httpClient.post(`http://${this.localStorageService.getItem("IPSERVER")}:3000/deleteContentREA/`, contenidoREA);
    }
    //------------------------------------------------------------------------------------ Servicions de Ayuda
    //Servicio para llamar todas las materias
    allSubject() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllSubjects`);
    }
    newAllSubjects() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadSubjects`);
    }
    //Servicio para llamar todos los grados
    allGrade() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllGrades`);
    }
    newAllGrades() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadGrades`);
    }
    //Servicio para llamar todos los tipos de Contenidos
    allType() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/loadAllTypes`);
    }
    newAllTypes() {
        return this.httpClient.get(`http://${this.localStorageService.getItem("IPSERVER")}:3000/newLoadTypes`);
    }
};
ContentREAService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContentREAService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ContentREAService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sepul\Desktop\Desarrollo\FC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map