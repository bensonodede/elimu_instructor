import { db } from "./firebase";

// Create User
export const doCreateUser = (role, email, firstName, lastName, password) =>
  db
    .collection(role)
    .doc()
    .set({
      email,
      firstName,
      lastName,
      password
    });

//Get Students
export const onceGetStudents = () => db.collection("Student").get();

//Get Instructor
export const onceGetInstructor = uid =>
  db
    .collection("Instructor")
    .doc(uid)
    .get();

//Create Course
export const doCreateCourse = (courseCode, CourseDescription) =>
  db
    .collection("Courses")
    .doc(courseCode)
    .set({
      CourseDescription
    });

//Get Student Courses
export const onceGetStudentCourses = () => db.ref("Student").once("value");
