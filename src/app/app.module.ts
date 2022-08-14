/* Modules */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/* Components  */
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { ContactusComponent } from "./components/contactus/contactus.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FooterComponent } from "./components/footer/footer.component";

/* Pipes */
import { SummaryPipe } from "./pipes/summary.pipe";
import { DatePipe } from "./pipes/date.pipe";
import { TitlePipe } from "./pipes/title.pipe";

/* Services */
import { AuthInterceptor } from "../app/services/authconfig.interceptor";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth.guard";

@NgModule({
  declarations: [
    /* Components */
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    EmployeesComponent,
    ContactusComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SummaryPipe,
    DatePipe,
    TitlePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", "json");
}
