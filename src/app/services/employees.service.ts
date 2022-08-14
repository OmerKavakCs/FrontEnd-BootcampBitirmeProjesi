import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { IEmployees } from "../modals/IEmployees";

@Injectable()
export class Employees {
  url = "http://localhost:3030/api/employees";
  image = "http://localhost:3030/api/employees/images/";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployees[]> {
    return this.http.get<IEmployees[]>(this.url);
  }
  postEmploye(employe: IEmployees) {
    return this.http.post(this.url, employe);
  }
  updateEmploye(employe: IEmployees, employeId: number) {
    return this.http.put(this.url + "/" + employeId, employe);
  }
  deleteEmploye(employeId: number) {
    return this.http.delete(this.url + "/" + employeId);
  }
}
