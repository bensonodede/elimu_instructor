import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "../styles/Upload.css";
import { firebase } from "../firebase";
export default class uploadText extends Component {
  _onDrop = file => {
    console.log(file);
  };
  render() {
    return (
      <div className="Page-Container">
        <Dropzone onDrop={this._onDrop.bind(this)} accept="">
          {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (acceptedFiles.length || rejectedFiles.length) {
              return `Accepted ${acceptedFiles.length}, rejected ${
                rejectedFiles.length
              } files`;
            }
            if (isDragAccept) {
              return "This file is authorized";
            }
            if (isDragReject) {
              return "This file is not authorized";
            }
            return <h3>Click or drag text files here to upload.</h3>;
          }}
        </Dropzone>
      </div>
    );
  }
}
