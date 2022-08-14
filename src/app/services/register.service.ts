import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { IRegister } from "../modals/IRegister";

@Injectable()
export class Register {
  url = "http://localhost:3030/api/auth/register";

  constructor(private http: HttpClient) {}

  postRegister(register: IRegister[]) {
    return this.http.post(this.url, register);
  }
}
