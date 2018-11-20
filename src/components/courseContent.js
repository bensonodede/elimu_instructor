import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";

import "../styles/Course.css";

export default class courseContent extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <div>
          <h2>{this.props.location.state.id}</h2>
          <h2>20 students</h2>
        </div>
        <div className="grid-container">
          <div>
            <NavLink to={routes.COURSE_CONTENT_TYPE}>Week 1</NavLink>
          </div>
          <div>
            <NavLink to={routes.COURSE_CONTENT_TYPE}>Week 2</NavLink>
          </div>
          <div>
            <NavLink to={routes.COURSE_CONTENT_TYPE}>Week 3</NavLink>
          </div>
          <div>
            <NavLink to={routes.COURSE_CONTENT_TYPE}>Week 4</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
