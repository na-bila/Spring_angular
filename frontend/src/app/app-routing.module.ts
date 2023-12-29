import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path : "", redirectTo:"home", pathMatch : 'full'},
  { path: "home", component:LandingPageComponent},
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'create', component: CourseCreateComponent },
  { path: 'update/:id', component: CourseUpdateComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
