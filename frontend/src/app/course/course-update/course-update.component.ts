import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  courseId: number | undefined;
  course: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.courseService.getCourse(this.courseId).subscribe(data => {
      this.course = data;
    });
  }

  updateCourse(): void {
    this.courseService.updateCourse(this.courseId, this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

}
