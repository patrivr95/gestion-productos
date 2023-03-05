import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  usuario!: Usuario | null;

  constructor(private router: Router){}

  ngOnInit():void {
    
  }

  ngDoCheck(){
    
    const user = localStorage.getItem('user')
    if (user){
      this.usuario = JSON.parse(user)
    } else {
      this.usuario = null;
    }
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

}
