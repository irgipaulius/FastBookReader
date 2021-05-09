import React, { useState } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { Redirect } from "react-router";

import SpeedTable from "./components/speedTable";

import "./css/MainMenu.less";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function MainMenu() {
  const [speed, setSpeed] = useState(10);
  const [file, setFile] = useState("./sample.pdf");
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  const submitForm = () => {
    console.log("routing to reader");
    return (
      <Redirect
        to="/reader"
        // to={{
        //   pathname: `/reader`,
        //   state: { file, numPages, interval: speed },
        // }}
      />
    );
  };

  return (
    <div className="App">
      <form>
        {/* Load file */}
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>

        {/* Load document in the background */}
        <Document
          file={file}
          onLoadSuccess={(document) => setNumPages(document.numPages)}
          options={options}
        />

        <hr />

        {/* Set Speed */}
        <div className="Example__container__speed">
          {SpeedTable(speed, numPages, setSpeed)}
        </div>

        <hr />

        {/* Start button */}
        <button onClick={submitForm}>Start</button>
      </form>
    </div>
  );
}
