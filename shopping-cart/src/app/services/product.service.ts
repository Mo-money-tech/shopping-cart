import { Injectable } from '@angular/core';

import{Product} from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
    products: Product[] = [
      new Product(1, 'Product1', 'This is the product 1 description. The product is exclusive', 100), 
      new Product(2, 'Product2', 'This is the product 2 description. The product is exclusive', 200), 
      new Product(3, 'Product3', 'This is the product 3 description. The product is exclusive', 400), 
      new Product(4, 'Product4', 'This is the product 4 description. The product is exclusive', 600), 
      new Product(5, 'Product5', 'This is the product 5 description. The product is exclusive', 500), 
      new Product(6, 'Product6', 'This is the product 6 description. The product is exclusive', 100), 
    ]

  constructor() { }
  
  getProducts(): Product[] {
    //TODO: Populate productss from an API and return an Observable
    return this.products
  }
}
