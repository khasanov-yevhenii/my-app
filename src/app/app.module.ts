import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FactorialPipe} from './pipes/factorial.pipe';
import {IsAdminFilterPipe} from './pipes/is-admin-filter.pipe';
import {HighlightDirective} from './directives/highlight.directive';
import {IfNotDirective} from './directives/if-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    FactorialPipe,
    IsAdminFilterPipe,
    HighlightDirective,
    IfNotDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
