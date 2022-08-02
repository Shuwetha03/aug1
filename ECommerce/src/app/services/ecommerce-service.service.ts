import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from '../common/productCategory';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService {
  saveProduct(products: Product[]) {
    throw new Error("Method not implemented.");
  }

  productUrl = "http://localhost:8080/api/prod";
  categoryUrl = "http://localhost:8080/api/cat";

  constructor(private httpClient : HttpClient) { }

  getAllProduct() : Observable<Product[]>{

    console.log(this.httpClient.get<getProductResponse>(this.productUrl).pipe(map(response => response._embedded.products)));
    return this.httpClient.get<getProductResponse>(this.productUrl).pipe(map(response => response._embedded.products));
  }

  getAllCategory() : Observable<ProductCategory[]>{

    console.log(this.httpClient.get<getProductCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.productCategories)));
    return this.httpClient.get<getProductCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.productCategories));
  }
}


interface getProductResponse{
  _embedded : {
    products : Product[];
  }
}

interface getProductCategoryResponse{
  _embedded : {
    productCategories : ProductCategory[];
  }
}
