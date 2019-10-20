// RUTAS
import { app_routing } from "./app.routes";

//Componentes

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
import { LoginComponent } from "./components/login/login.component"
import { AuthDService } from './services/auth-d.service';
import { CommonModule } from '@angular/common';


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
    BusquedaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
