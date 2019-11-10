import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FCRoutingModule } from './fc-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { InicioProfesoresComponent } from 'src/app/components/inicio-profesores/inicio-profesores.component';
import { CrearActividadComponent } from 'src/app/components/crear-actividad/crear-actividad.component';
import { BorrarActividadComponent } from 'src/app/components/borrar-actividad/borrar-actividad.component';
import { ModificarActividadComponent } from 'src/app/components/modificar-actividad/modificar-actividad.component';
import { SubirContenidoComponent } from 'src/app/components/subir-contenido/subir-contenido.component';
import { BorrarContenidoComponent } from 'src/app/components/borrar-contenido/borrar-contenido.component';
import { BusquedaComponent } from 'src/app/components/busqueda/busqueda.component';

import { AppComponent } from 'src/app/app.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AuthDService } from '../services/auth-d.service';
import { ContentREAService } from '../services/content-rea.service';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

@NgModule({
  declarations:[
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
    AuthDService,
    RegistroUsuarioComponent
  ],
  imports:[
      CommonModule,
      FormsModule,
      FCRoutingModule,
      HttpClientModule
  ],
  providers:[AuthDService, ContentREAService]
})
export class FCModule { }
