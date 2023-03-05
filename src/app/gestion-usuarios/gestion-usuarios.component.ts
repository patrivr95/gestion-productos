import { Component } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

usuarios!: Usuario[];

constructor(private usuariosService: UsuariosService){}

ngOnInit():void {
  this.usuariosService.getUsers().subscribe(datos => {
    this.usuarios = datos;
  })
}
}
