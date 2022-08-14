import { Component, OnInit } from "@angular/core";
import { IEmployees } from "src/app/modals/IEmployees";
import { Employees } from "src/app/services/employees.service";

@Component({
  selector: "employeesComponent",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
  providers: [Employees],
})
export class EmployeesComponent implements OnInit {
  employeeLists: IEmployees[] = [];
  img = this.employeesService.image;

  viewClassic: boolean = true;
  viewList: boolean = false;
  viewGallery: boolean = false;

  constructor(private employeesService: Employees) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((e) => {
      this.employeeLists = e;
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

  /*postProduct() {
    this.employeesService.postEmploye().subscribe(() => {
      this.toastrService.success("Employe Added", "New Employee");
    });
  }
  updateProduct() {
    this.employeesService.updateEmploye().subscribe(() => {
      this.toastrService.success("Employee Update", "Updated Employee");
    });
  }
  deleteProduct() {
    this.employeesService.deleteEmploye().subscribe(() => {
      this.toastrService.error("Employee Delete", "Delete Employee");
    });*/
}
