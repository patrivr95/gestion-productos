import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent {
  @Input() datos!: Usuario;
  @Input() roleDisabled: boolean = true;
  @Input() textoBoton: string = 'Modificar'
  @Output() enviarUsuario: EventEmitter<Usuario>

  form!: FormGroup;

  constructor(){
    this.enviarUsuario = new EventEmitter();
  }

  ngOnInit():void {
    this.form = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      name: new FormControl('', [Validators.required,  Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl({value:'', disabled: this.roleDisabled}),
      avatar: new FormControl('')
    }, [])
    this.form.patchValue(this.datos);
  }

  /* ngDoCheck(){
    if(this.datos){
      this.form.patchValue(this.datos);
    }
  } */


  onSubmit(){
    this.enviarUsuario.emit(this.form.value);
  }
}
