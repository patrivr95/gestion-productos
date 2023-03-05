import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPersonalComponent } from './area-personal/area-personal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';
import { GestionCategoriasComponent } from './gestion-categorias/gestion-categorias.component';
import { GestionProductosComponent } from './gestion-productos/gestion-productos.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { LoginComponent } from './login/login.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './usuario-eliminar/usuario-eliminar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: ListadoCategoriasComponent},
  {path: 'productos/categoria/:idCategoria', component: ListadoProductosComponent},
  {path: 'producto/:idproducto', component: FichaProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'area-personal', component: AreaPersonalComponent, canActivate: [AuthGuard]},
  {path: 'gestion/productos', component: GestionProductosComponent, canActivate: [AdminGuard]},
  {path: 'gestion/usuarios', component: GestionUsuariosComponent, canActivate: [AdminGuard]},
  {path: 'gestion/usuarios/nuevo', component: UsuarioNuevoComponent, canActivate: [AdminGuard]},
  {path: 'gestion/usuarios/editar', component: UsuarioEditarComponent, canActivate: [AdminGuard]},
  {path: 'gestion/usuarios/eliminar', component: UsuarioEliminarComponent, canActivate: [AdminGuard]},
  {path: 'gestion/categorias', component: GestionCategoriasComponent, canActivate: [AdminGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
