import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8090/api/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCourse(id: number | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, course);
  }

  updateCourse(id: number | undefined, course: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
