import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://api.escuelajs.co/api/v1/'

  constructor(private httpClient: HttpClient) { }

  login(datos: Login) {
    return this.httpClient.post<any>(this.url + 'auth/login', datos)
  }

  profile(){
    return this.httpClient.get<Usuario>(this.url + 'auth/profile', this.cabeceraAuthorization())
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
