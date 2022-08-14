import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "registerComponent",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerModel: any = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toasterService: ToastrService
  ) {}
  ngOnInit() {}
  registerUser(form: NgForm) {
    this.authService.register(form.value).subscribe((res) => {
      if (res) {
        this.toasterService.success("New User Added");
        this.router.navigate(["login"]);
        console.log(res);
      }
    });
    console.log(form.value);
  }
}
