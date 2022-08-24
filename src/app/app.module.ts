import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactorialPipe } from './pipes/factorial.pipe';
import { IsAdminFilterPipe } from './pipes/is-admin-filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { IfNotDirective } from './directives/if-not.directive';
import { ModalDirective } from './directives/modal.directive';
import { PostsComponent } from './components/posts/posts.component';
import { CategoryComponent } from './components/category/category.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorialPipe,
    IsAdminFilterPipe,
    HighlightDirective,
    IfNotDirective,
    ModalDirective,
    PostsComponent,
    CategoryComponent,
    StatisticsComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
