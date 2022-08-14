import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { IProducts } from "../modals/IProducts";

@Injectable()
export class Products {
  url = "http://localhost:3030/api/products";
  image = "http://localhost:3030/api/products/images/";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.url);
  }
  postProduct(product: IProducts) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: IProducts, productId: number) {
    return this.http.put(this.url + "/" + productId, product);
  }
  deleteProduct(productId: number) {
    return this.http.delete(this.url + "/" + productId);
  }
}
