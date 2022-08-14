import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { IProducts } from "src/app/modals/IProducts";
import { Products } from "src/app/services/products.service";

@Component({
  selector: "productsComponent",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  providers: [Products],
})
export class ProductsComponent implements OnInit {
  productLists: IProducts[] = [];
  img = this.productsServive.image;

  filterProducts: IProducts[];

  filterText: string = "";

  productModal: any = {
    imageName: "",
  };

  viewClassic: boolean = true;
  viewList: boolean = false;
  viewGallery: boolean = false;

  constructor(
    private productsServive: Products,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.productsServive.getProducts().subscribe((p) => {
      this.productLists = p;
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

  postProduct(form: NgForm) {
    this.productsServive.postProduct(form.value).subscribe(() => {
      this.toasterService.success("New Product Added");
    });
  }
  /*updateProduct() {
    this.productsServive.updateProduct().subscribe(() => {
      this.toasterService.success("Product Update", "Updated Product");
    });
  }*/
  deleteProduct(id: any) {
    this.productsServive.deleteProduct(id).subscribe(() => {
      this.toasterService.error("Product Deleted");
    });
  }
}
