// RUTAS
import { app_routing } from "./app.routes";

//Componentes

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioProfesoresComponent } from './components/inicio-profesores/inicio-profesores.component';
import { CrearActividadComponent } from './components/crear-actividad/crear-actividad.component';
import { BorrarActividadComponent } from './components/borrar-actividad/borrar-actividad.component';
import { ModificarActividadComponent } from './components/modificar-actividad/modificar-actividad.component';
import { SubirContenidoComponent } from './components/subir-contenido/subir-contenido.component';
import { BorrarContenidoComponent } from './components/borrar-contenido/borrar-contenido.component';
import { from } from 'rxjs';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioProfesoresComponent,
    CrearActividadComponent,
    BorrarActividadComponent,
    ModificarActividadComponent,
    SubirContenidoComponent,
    BorrarContenidoComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
