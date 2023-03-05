import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';
import { FiltroPrecioComponent } from './filtro-precio/filtro-precio.component';
import { LoginComponent } from './login/login.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaPersonalComponent } from './area-personal/area-personal.component';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionCategoriasComponent } from './gestion-categorias/gestion-categorias.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './usuario-eliminar/usuario-eliminar.component';

registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoCategoriasComponent,
    ListadoProductosComponent,
    FichaProductoComponent,
    FiltroPrecioComponent,
    LoginComponent,
    DashboardComponent,
    AreaPersonalComponent,
    GestionProductosComponent,
    GestionUsuariosComponent,
    GestionCategoriasComponent,
    FormularioUsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
