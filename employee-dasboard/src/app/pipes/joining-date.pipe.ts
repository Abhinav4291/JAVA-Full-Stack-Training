import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiningDate',
  standalone: true,
})
export class JoiningDatePipe implements PipeTransform {
  transform(value: Date | string | null | undefined): string {
    if (!value) {
      return '';
    }

    const date = value instanceof Date ? value : new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };

    return date.toLocaleDateString('en-GB', options);
  }
}
