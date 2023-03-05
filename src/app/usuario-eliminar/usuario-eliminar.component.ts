import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent {

  idUsuario: number = 0;
  mensajeOk: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private router: Router){}

  ngOnInit():void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.idUsuario = parseInt(params['usuario'])
      /* this.usuarioService.getUser(parseInt(params['usuario'])).subscribe(datos => {
        this.usuario = datos;
      }); */
    })
  }


  eliminarUsuario(){
    this.usuarioService.deleteUser(this.idUsuario).subscribe(datos => {
      this.mensajeOk = true;
      setTimeout(()=> {
        this.router.navigate(['/gestion/usuarios'])

      }, 2000)
    })
  }


}
