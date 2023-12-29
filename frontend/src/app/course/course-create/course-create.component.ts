import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {
  newCourse: any = {};

  constructor(private router: Router, private courseService: CourseService) {}

  createCourse(): void {
    this.courseService.createCourse(this.newCourse).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }
}