import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { IContactus } from "src/app/modals/IContactus";
import { Contactus } from "src/app/services/contactus.service";

@Component({
  selector: "contactusComponent",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"],
  providers: [Contactus],
})
export class ContactusComponent implements OnInit {
  contactusLists: IContactus[] = [];
  contactusModel: any = [];

  viewClassic: boolean = true;
  viewList: boolean = false;
  viewGallery: boolean = false;

  constructor(
    private contactusService: Contactus,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactusService.getContactus().subscribe((c) => {
      this.contactusLists = c;
    });
  }
  viewClassicChange() {
    if (this.viewList == false || this.viewGallery == false) {
      this.viewClassic = true;
      this.viewList = false;
      this.viewGallery = false;
    }
  }
  viewListChange() {
    if (this.viewClassic == false || this.viewGallery == false) {
      this.viewList = true;
      this.viewClassic = false;
      this.viewGallery = false;
    }
  }
  viewGalleryChange() {
    if (this.viewClassic == false || this.viewList == false) {
      this.viewGallery = true;
      this.viewClassic = false;
      this.viewList = false;
    }
  }
  postContactus(form: NgForm) {
    this.contactusService.postContactus(form.value).subscribe(() => {
      this.toasterService.success("New Contact Added");
    });
  }
}
