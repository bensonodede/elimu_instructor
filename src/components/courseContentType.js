import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";

import "../styles/Course.css";

export default class courseContentType extends Component {
  render() {
    return (
      <div>
        <h1>Week 1</h1>
        <div class="grid-container">
          <div>
            <NavLink to={routes.UPLOAD_AUDIO}>Audio</NavLink>
          </div>
          <div>
            <NavLink to={routes.UPLOAD_TEXT}>Text</NavLink>
          </div>
          <div>
            <NavLink to={routes.UPLOAD_VIDEO}>Video</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
