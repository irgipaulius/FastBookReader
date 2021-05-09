import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import { useWindowDimension } from "./components/useWindowDimension";
import { useInterval } from "./components/useInterval";

import "./css/Reader.less";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function Reader() {
  console.log("in the reader")
  const [file, setFile] = useState("./sample.pdf");
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  //screen size
  const [width, height] = useWindowDimension();

  //timer
  const [counter, setCounter] = useState(1);

  useInterval(() => {
    setCounter(numPages > counter ? counter + 1 : 1);
  }, 500);

  return (
    <div className="Example__container__document">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {
          <Page
            key={`page_${counter}`}
            pageNumber={counter}
            height={height}
            scale={1}
          />
        }
      </Document>
    </div>
  );
}
