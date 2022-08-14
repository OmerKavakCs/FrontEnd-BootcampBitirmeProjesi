/* Modules */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/* Components */
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { ContactusComponent } from "./components/contactus/contactus.component";

/* Services */
import { AuthGuard } from "../app/services/auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductsComponent, canActivate: [AuthGuard] },
  {
    path: "categories",
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "employees",
    component: EmployeesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "contactus",
    component: ContactusComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
