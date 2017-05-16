import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPip implements PipeTransform {

  transform(value: any, args: any): any {
    if (args && Array.isArray(value)) {
      let filterKeys = Object.keys(args);
      return value.filter(item =>
        filterKeys.reduce((memo, keyName) =>
          (memo && new RegExp(args[keyName], 'gi').test(item[keyName])) || args[keyName] === "", true));
    } else {
      return value;
    }
  }

}



// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any, filter: any): any {
//     if (filter && Array.isArray(items)) {
//       let filterKeys = Object.keys(filter);
//       return items.filter(item =>
//         filterKeys.reduce((memo, keyName) =>
//           (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
//     } else {
//       return items;
//     }
//   }
// }
