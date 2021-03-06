import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'password'
})
export class PasswordPipe implements PipeTransform {

    transform(value: string, hide: boolean = true): string {
        if (hide) {
            let result = '';
            for (let i = 0; i < value.length; i++) {
                result += '*';
            }
            return result;
        } else {
            return value;
        }
    }
}
