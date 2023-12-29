import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.params['id'];
    this.courseService.getCourse(courseId).subscribe(data => {
      this.course = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }

}
