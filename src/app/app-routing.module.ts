import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from './components/posts/posts.component';
import {CategoryComponent} from './components/category/category.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {AuthGuard} from './guards/auth.guard';
import {FeedbackGuard} from './guards/feedback.guard';
import {StatisticsResolver} from './guards/statistics.resolver';
import {ParentComponent} from './components/parent/parent.component';

const routes: Routes = [
  {
    title: 'Parent',
    path: 'parent',
    component: ParentComponent,
  },
  {
    title: 'Posts',
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{
      path: ':category"',
      component: CategoryComponent,
      canDeactivate: [FeedbackGuard],
    }]
  },
  {
    title: 'Statistics',
    path: 'statistics',
    component: StatisticsComponent,
    resolve: {
      amount: StatisticsResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
