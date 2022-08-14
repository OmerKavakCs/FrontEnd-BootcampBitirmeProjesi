import { Injectable } from "@angular/core";
import { ILogin } from "../modals/ILogin";
import { IRegister } from "../modals/IRegister";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Router } from "@angular/router";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loginUrl: string = "http://localhost:3030/api/auth/register";
  registerUrl: string = "http://localhost:3030/api/auth/login";

  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser: any = {};
  constructor(private http: HttpClient, public router: Router) {}

  /* Register */
  register(user: any[]) {
    return this.http
      .post(this.registerUrl, user)
      .pipe(catchError(this.handleError));
  }

  /* Login */
  login(user: any[]) {
    return this.http.post<any>(this.loginUrl, user).subscribe((res) => {
      localStorage.setItem("access_token", res.token);
      this.getUserProfile().subscribe((res) => {
        this.currentUser = res;
        this.router.navigate(["home/" + res.msg._id]);
      });
    });
  }
  getToken() {
    return localStorage.getItem("access_token");
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  getUserProfile(): Observable<any> {
    let api = `${this.loginUrl}`;
    return this.http.post(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(error.headers);
    return throwError(msg);
  }
}
