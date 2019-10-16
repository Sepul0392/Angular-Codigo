import { RouterModule, Routes } from '@angular/router';

import {
    InicioProfesoresComponent,
    SubirContenidoComponent,
    BorrarContenidoComponent,
    CrearActividadComponent,
    ModificarActividadComponent,
    BorrarActividadComponent,
    BusquedaComponent
} from './components/index.paginas';

const app_routes: Routes = [
    { path: 'inicioProfesores', component: InicioProfesoresComponent },
    { path: 'subirContenido', component: SubirContenidoComponent },
    { path: 'borrarContenido', component: BorrarContenidoComponent },
    { path: 'crearActividad', component: CrearActividadComponent },
    { path: 'modificarActividad', component: ModificarActividadComponent },
    { path: 'borrarActividad', component: BorrarActividadComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicioProfesores'}
];

export const app_routing = RouterModule.forRoot(app_routes);