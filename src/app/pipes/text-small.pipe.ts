import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSmall'
})
export class TextSmallPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(value.length < args) {
      return value
    }

    return value.substr(0, args)+'...';    
  }

}
