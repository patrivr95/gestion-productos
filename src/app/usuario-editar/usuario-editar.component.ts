import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {

  usuario!: Usuario
  mensajeOk: boolean = false;
  mensajeError: string = '';

  constructor(private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit():void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.usuarioService.getUser(parseInt(params['usuario'])).subscribe(datos => {
        this.usuario = datos;
      });
    })
  }

  enviarUsuario($event: Usuario){
    this.usuarioService.updateUser(this.usuario.id, $event).pipe(catchError((e)=>{
      this.mensajeError = e.error.message;
      this.mensajeOk = false;
      return EMPTY
    }))
    .subscribe(datos => {
      this.mensajeOk = true;
      
    })
    }
  }


