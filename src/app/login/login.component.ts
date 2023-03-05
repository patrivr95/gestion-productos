import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {catchError, EMPTY} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;
  mensajeError: string ='';

  constructor(private authService: AuthService,
    private router: Router){}

  ngOnInit():void {
    this.form = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])

    })
    
  }

  onSubmit(){
    this.authService.login(this.form.value).pipe(
      catchError((e) => {
        this.mensajeError = e.statusText;
        return EMPTY
      })
    ).subscribe(datos => {
      
      localStorage.setItem('token', datos.access_token);
      this.authService.profile().subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/dashboard'])
      })
    })
  }

}
