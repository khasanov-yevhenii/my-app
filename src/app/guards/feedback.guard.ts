import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

import {CategoryComponent} from '../components/category/category.component';

@Injectable({
  providedIn: 'root'
})
export class FeedbackGuard implements CanDeactivate<CategoryComponent> {
  canDeactivate(): boolean {
    return !confirm('Could you leave a comment?');
  }
}
