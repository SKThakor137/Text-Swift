import React, { useState } from "react";

const TextForm = ({ heading, mode, showAlert }) => {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [readTime, setReadTime] = useState(0);

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    let word = newText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWord(word.length);

    let estimatedTime = 0.008 * word.length;
    setReadTime(estimatedTime);
  };

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Convert to Uppercase", "success");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Convert to Lowercase", "success");
  };
  const clearCase = (event) => {
    // let newText = (event.target.value = "");
    let newText = "";
    setText(newText);
    setWord(0);
    setReadTime(0);
    showAlert("Clear Text", "success");
  };
  const copyCase = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text Copied", "success");
  };
  const removeSpaceCase = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra removed space", "success");
  };

  // const wordCounter = () => {};
  return (
    <div>
      <div
        className="container"
        style={{
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="mb-4">{heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            cols="20"
            rows="8"
            value={text}
            style={{
              backgroundColor: mode === "dark" ? "#010831" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={upperCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={lowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clearCase}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={copyCase}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeSpaceCase}
        >
          Extra remove space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          words
          <span className="text-danger"> {word} </span> and character
          <span className="text-danger"> {text.length} </span>
        </p>
        <p>
          <span className="text-danger"> {readTime} </span> Minute read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
};

export default TextForm;
