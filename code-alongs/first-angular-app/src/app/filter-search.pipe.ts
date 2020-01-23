import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
  // *ngFor="let todo of (todos | FilterSearchPipe)"
  transform(value: any, filterText): any {
    // filter 
    return value.filter( item => item.task.includes(filterText))
  }
}
