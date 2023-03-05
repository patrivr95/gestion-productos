import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {

  mensajeError: string = '';
  mensajeOk: boolean = false;

  constructor(private usuariosService: UsuariosService){}

  enviarUsuario($event: Usuario){
    this.usuariosService.createUser($event).pipe(catchError((e)=>{
      this.mensajeError = e.error.message;
      this.mensajeOk = false;
      return EMPTY
    }))
    .subscribe(datos => {
      this.mensajeOk = true;
      
    })
  }
}
