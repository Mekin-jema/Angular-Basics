import { Pipe, PipeTransform } from '@angular/core';
// This is a custom pipe that reverses a string.
// you can use it in your template like this:
// you can also create a custom pipe by running the following command:
// ng generate pipe Pipe-template/reverse
// then you can use it in your template like this:
// {{ name | reverse }}
// this will reverse the string in the name variable.
// you can also pass arguments to the pipe like this:
// {{ name | reverse: 'arg1' : 'arg2' }}

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value.split('').reverse().join('');
  }
}
// can i create another pipe in same foulder?

//if so create another pipe in the same folder
// generate code that will upcase the first letter of the string
// and lowercase the rest of the string

export class TitleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
