import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MadLibFormComponent } from './mad-lib-form/mad-lib-form.component';
import { TodoComponent } from './todo/todo.component';
import { SwearWordFilterPipe } from './swear-word-filter.pipe';
import { FilterSearchPipe } from './filter-search.pipe';
// import { LoggerService } from 'src/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    MadLibFormComponent,
    TodoComponent,
    SwearWordFilterPipe,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
