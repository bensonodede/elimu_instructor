import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "../styles/Upload.css";

export default class uploadVideo extends Component {
  _onDrop = files => {
    console.log(files);
  };
  render() {
    return (
      <div className="Page-Container">
        <Dropzone onDrop={this._onDrop.bind(this)} accept="video/*">
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
            return <h3>Click or drag video files here to upload.</h3>;
          }}
        </Dropzone>
      </div>
    );
  }
}
