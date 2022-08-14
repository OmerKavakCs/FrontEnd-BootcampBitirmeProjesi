import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { ICategories } from "../modals/ICategories";

@Injectable()
export class Categories {
  url = "http://localhost:3030/api/categories";
  image = "http://localhost:3030/api/categories/images/";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.url);
  }
  postCategory(category: ICategories) {
    return this.http.post(this.url, category);
  }
  updateCategory(category: ICategories, categoryId: number) {
    return this.http.put(this.url + "/" + categoryId, category);
  }
  deleteCategory(categoryId: number) {
    return this.http.delete(this.url + "/" + categoryId);
  }
}
