import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { IContactus } from "../modals/IContactus";

@Injectable()
export class Contactus {
  url = "http://localhost:3030/api/contact-us";

  constructor(private http: HttpClient) {}

  getContactus(): Observable<IContactus[]> {
    return this.http.get<IContactus[]>(this.url);
  }
  postContactus(contactus: IContactus) {
    return this.http.post(this.url, contactus);
  }
}
