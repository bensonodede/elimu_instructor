import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { onceGetInstructor } from "../firebase/db";
export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      console.log(authUser.uid);
      onceGetInstructor(authUser.uid).then(doc => {
        console.log(doc.data().courses);
        const allCourses = doc.data().courses;
        this.setState({ courses: allCourses });
      });
    });
  }
  render() {
    const { courses } = this.state;
    return (
      <div>
        <table className="mui-table">
          <thead>
            <tr>
              <th>Course code</th>
              <th>No. of students</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(item => (
              <tr key={item}>
                <NavLink
                  to={{
                    pathname: routes.COURSE_CONTENT,
                    state: { id: item }
                  }}
                >
                  <td>{item}</td>
                </NavLink>
                <td>20</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
