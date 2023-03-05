import { Component } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
import { Usuario, UsuarioFormulario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-area-personal',
  templateUrl: './area-personal.component.html',
  styleUrls: ['./area-personal.component.css']
})
export class AreaPersonalComponent {

  usuario!: Usuario;
  mensajeError : string = '';
  mensajeCorrecto: boolean = false;

  constructor(private usuariosService: UsuariosService){}

  ngOnInit():void {
    const user = localStorage.getItem('user');
    if(user){
      this.usuario = JSON.parse(user);
    }
  }

  enviarUsuario($event: Usuario){
    this.usuariosService.updateUser(this.usuario.id, $event).pipe(catchError((e) => {
      
      this.mensajeError = e.error.message;
      return EMPTY;
    }))
    .subscribe(datos => {
      console.log(datos)
      localStorage.setItem('user', JSON.stringify(datos));
      this.mensajeCorrecto = true;
    })
  }

}
