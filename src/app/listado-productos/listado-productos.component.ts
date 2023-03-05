import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filtro, Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {

  listadoProductos!: Producto[];
  categoria: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private productoService: ProductoService ){}

  ngOnInit():void {
    this.activatedRoute.params.subscribe(param => {
      this.categoria = parseInt(param['idCategoria']);
      this.suscribeProducts(this.categoria);
    })
  }

  onFilter($event: Filtro){
    if($event.preMin && $event.preMax){
        this.productoService.getProductsByFilter(this.categoria, $event).subscribe(datos => {
          this.listadoProductos = datos;
        })
    } else {
      this.suscribeProducts(this.categoria);
     }
    }


    private suscribeProducts(categoria: number){
        this.productoService.getProductsByCategory(categoria).subscribe(datos => { 
          this.listadoProductos = datos;
        });
    }
  }


