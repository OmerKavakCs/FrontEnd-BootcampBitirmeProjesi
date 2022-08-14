import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { ILogin } from "../modals/ILogin";

@Injectable()
export class Login {
  url = "http://localhost:3030/api/auth/login";

  constructor(private http: HttpClient) {}

  postLogin(login: ILogin) {
    return this.http.post(this.url, login);
  }
}
