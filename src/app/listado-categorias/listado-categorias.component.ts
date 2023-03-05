import { Component } from '@angular/core';
import { Categoria } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent {

  categorias!: Categoria[];

  constructor(private productoService: ProductoService){}

  ngOnInit():void {
    this.productoService.getCategories().subscribe(datos => 
      this.categorias = datos
      );
  }


 

}
