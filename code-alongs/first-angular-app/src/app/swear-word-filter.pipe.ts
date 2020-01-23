import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swearWordFilter'
})
export class SwearWordFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter( text => {
      if ( text.includes(args[0]) ) {
        return true;
      }
    })
  }

}
