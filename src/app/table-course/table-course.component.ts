import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course'

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() decorative to get the custom property value passed in the app-level
  @Input()
  title: string;
  @Input()
  courses: Course[];
}
