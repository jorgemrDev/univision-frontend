import React, { useState, useEffect } from "react";
import UploadService from "../services/FileUploadService";

export default function Upload() {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        console.log(response.data);
        setMessage("File uploaded Succesfully!");
        setProgress(0);
        setCurrentFile(undefined);
        setSelectedFiles(undefined);
      })
      .catch((error) => {
        if (error.includes("403")) {
          setMessage("Too Large file!");
        } else {
          setMessage("Could not upload the file!");
        }
        setProgress(0);
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <div class="container">
      <h1 style={{ fontSize: 35, fontWeight: "bold" }}>Upload your Video</h1>
      {currentFile && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <label className="btn btn-default">
        <input type="file" onChange={selectFile} />
      </label>

      <button
        className="btn btn-success"
        disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </button>

      <div className="alert alert-light" role="alert">
        {message}
      </div>
    </div>
  );
}
