import React, { Component } from "react";

export default class ReportsPage extends Component {
  render() {
    return (
      <div>
        <table className="mui-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Content Type</th>
              <th>% Interaction</th>
              <th>Time Spent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>653586</td>
              <td>Bruce Wayne</td>
              <td>Audio</td>
              <td>20%</td>
              <td>20mins</td>
            </tr>
            <tr>
              <td>652346</td>
              <td>Clark Kent</td>
              <td>Text</td>
              <td>10%</td>
              <td>10mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
