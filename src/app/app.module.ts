import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import CourseListComponent from './courses/course-list.component';
import StarComponent from './star/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    CourseListComponent,
    AppComponent,
    StarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
