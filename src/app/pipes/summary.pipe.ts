import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summary",
})
export class SummaryPipe implements PipeTransform {
  limit: number = 20;

  transform(value: string): string {
    if (!value) return null;

    if (this.limit > value.length) {
      return value;
    }
    return value.substring(0, this.limit) + " ...";
  }
}
