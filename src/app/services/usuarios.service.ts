import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioFormulario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  urlBase = 'https://api.escuelajs.co/api/v1/users/';

  constructor(private httpClient: HttpClient) { }

  updateUser(idUsuario: number, datosUsuario: UsuarioFormulario){
    return this.httpClient.put<Usuario>(this.urlBase + idUsuario , datosUsuario, this.cabeceraAuthorization())
  }

  getUsers(){
    return this.httpClient.get<Usuario[]>(this.urlBase,this.cabeceraAuthorization())
  }

  getUser(idUsuario: number){
    return this.httpClient.get<Usuario>(this.urlBase + idUsuario,this.cabeceraAuthorization())
  }

  createUser(datosUsuario: Usuario){
    return this.httpClient.post<Usuario>(this.urlBase, datosUsuario, this.cabeceraAuthorization())
  }

  deleteUser(idUsuario: number){
    return this.httpClient.delete<boolean>(this.urlBase + idUsuario,this.cabeceraAuthorization())
  }

  cabeceraAuthorization(){
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
  }
}
