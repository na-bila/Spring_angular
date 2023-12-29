package com.test.backend.services;

import com.test.backend.models.Course;
import com.test.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Long id, Course updatedCourse) {
        Optional<Course> existingCourse = courseRepository.findById(id);

        if (existingCourse.isPresent()) {
            Course course = existingCourse.get();
            course.setTitle(updatedCourse.getTitle());
            course.setPrice(updatedCourse.getPrice());
            return courseRepository.save(course);
        } else {
            // Handle not found
            return null;
        }
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
