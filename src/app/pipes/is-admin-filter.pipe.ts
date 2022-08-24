import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appIsAdminFilter',
})
export class IsAdminFilterPipe implements PipeTransform {
  transform(users: any[]): any[] {
    return users.filter(user => user.isAdmin);
  }
}
