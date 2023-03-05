import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.css']
})
export class FichaProductoComponent {

  producto!: Producto;

  constructor(private activatedRoute: ActivatedRoute,
    private productoService: ProductoService){}
  

  ngOnInit():void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const idProducto: number = parseInt(queryParams['idproducto'])
      this.productoService.getProduct(idProducto).subscribe(datos => {
        this.producto = datos;
      })

    })
  }

}
