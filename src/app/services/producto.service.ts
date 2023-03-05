import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, Filtro, Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase = 'https://api.escuelajs.co/api/v1/';

  constructor(private httpClient: HttpClient) { }

  getCategories(){
    return this.httpClient.get<Categoria[]>(this.urlBase + 'categories/')
  }

  getProductsByCategory(idCategoria: number){
    return this.httpClient.get<Producto[]>(this.urlBase + 'categories/' + idCategoria +'/products')
  }

  getProductsByFilter(categoria: number, datosFiltro: Filtro){
    return this.httpClient.get<Producto[]>(this.urlBase + 'products?price_min=' + datosFiltro.preMin + '&price_max=' + datosFiltro.preMax + '&categoryId=' + categoria)
  }

  getProduct(idProduct: number){
    return this.httpClient.get<Producto>(this.urlBase + 'products/' + idProduct )
  }

}
