import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trans'
})
export class objoffilter implements PipeTransform {
  transform(value, args:string[]) : any {
    let trans = [];
    for (let key in value) {
      trans.push({key: key, value: value[key]});
    }
    return trans;
  }
}
