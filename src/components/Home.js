import React, { Component } from "react";
import { firebase } from "../firebase";
import "../styles/Home.css";
import "../styles/App.css";

export default class HomePage extends Component {
  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log("SIGNED IN: ", user.email);
      } else {
        console.log("NOT SIGNED IN");
      }
    });
  }
  render() {
    return (
      <div className="App-container">
        <h1 className="Home-header">Welcome to your dashboard</h1>
      </div>
    );
  }
}
