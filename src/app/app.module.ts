import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import CourseListComponent from './courses/course-list.component';
import { FreestyleComponent } from './freestyle/freestyle.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    FreestyleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
