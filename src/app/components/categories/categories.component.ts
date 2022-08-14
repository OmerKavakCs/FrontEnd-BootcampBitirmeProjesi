import { Component, OnInit } from "@angular/core";
import { ICategories } from "src/app/modals/ICategories";
import { Categories } from "src/app/services/categories.service";

@Component({
  selector: "categoriesComponent",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
  providers: [Categories],
})
export class CategoriesComponent implements OnInit {
  categoryLists: ICategories[] = [];
  img = this.categoriesService.image;

  constructor(private categoriesService: Categories) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((c) => {
      this.categoryLists = c;
    });
  }
  /*postCategory() {
    this.categoriesService.postCategory().subscribe(() => {
      this.toastrService.success("Category Added", "New Category");
    });
  }
  updateCategory() {
    this.categoriesService.updateCategory().subscribe(() => {
      this.toastrService.success("Category Update", "Updated Category");
    });
  }
  deleteCategory() {
    this.categoriesService.deleteCategory().subscribe(() => {
      this.toastrService.error("Category Delete", "Delete Category");
    });
  }*/
}
