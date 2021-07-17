import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }



  getProductos(){
    return this.httpClient.get<Producto[]>('https://fakestoreapi.com/products');
  }

}
