import { Component, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Filtro } from '../interfaces/producto';


@Component({
  selector: 'app-filtro-precio',
  templateUrl: './filtro-precio.component.html',
  styleUrls: ['./filtro-precio.component.css']
})
export class FiltroPrecioComponent {

  @Output() onFilter: EventEmitter<Filtro>

  form!: FormGroup;

  constructor(){
    this.onFilter = new EventEmitter;
  }

  ngOnInit():void {
    this.form = new FormGroup ({
      preMin: new FormControl('', [Validators.required, Validators.min(0)]),
      preMax: new FormControl('', [Validators.required, Validators.min(0)])
    }, [])
  }

  onSubmit(){
    this.onFilter.emit(this.form.value);
  }

  reset(){
    this.form.reset();
    this.onFilter.emit(this.form.value);
  }

  
}
