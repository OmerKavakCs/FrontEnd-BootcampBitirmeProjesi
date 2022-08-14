import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "title",
})
export class TitlePipe implements PipeTransform {
  transform(value: any) {
    if (value === "Sales Representative") {
      return value.replace(value, "SR");
    } else if (value === "Vice President, Sales") {
      return value.replace(value, "VR&S");
    } else if (value === "Sales Manager") {
      return value.replace(value, "SM");
    } else if (value === "Inside Sales Coordinator") {
      return value.replace(value, "ISC");
    } else if (value === "Software Developer") {
      return value.replace(value, "SD");
    }
  }
}
