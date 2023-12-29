import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[] | undefined;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.loadCourses();
    });
  }
}
