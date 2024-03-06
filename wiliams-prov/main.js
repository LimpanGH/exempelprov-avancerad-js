import { Course } from "./Course.js";
import { Student } from "./Student.js";

const student1 = new Student("Sandra");
const student2 = new Student("Torsten");
const student3 = new Student("Stina");
const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);
const course3 = new Course("Javascript", 2000);
student1.registerCourse(course1);
student1.registerCourse(course2);
student1.registerCourse(course3);
student2.registerCourse(course1);
student2.registerCourse(course2);
student3.registerCourse(course3);
student1.listCourses();
