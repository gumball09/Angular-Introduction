import { Component } from '@angular/core';
import { Course } from './model/course'
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // import the Courses array
  courses : Array<Course> = COURSES;

  data = {
    title: 'angular-basic',
    courseTitle: 'LIST OF COURSES',
    courses: this.courses,
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
    console.log(this.courses)
  } 
}
