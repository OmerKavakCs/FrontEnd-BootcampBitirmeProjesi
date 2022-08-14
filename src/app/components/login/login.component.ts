import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "loginComponent",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginModel: any = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {}
  changeLanguage(event: any) {
    console.log(event.toElement.value);
  }

  loginUser(form: NgForm) {
    this.authService.login(form.value);
    this.router.navigate(["home"]);
    console.log(form.value);
  }
}
