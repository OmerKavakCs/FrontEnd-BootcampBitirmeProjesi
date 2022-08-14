import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import defaultLanguage from "../assets/i18n/en.json";

@Component({
  selector: "appComponent",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "tr"]);
    translate.setTranslation("en", defaultLanguage);
    translate.setDefaultLang("en");
  }

  selectedLang(lang: string) {
    this.translate.use(lang);
  }
}
