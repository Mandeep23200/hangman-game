import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInput] = useState("password");
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form Submitted");
  }
  function handleTextInputChange(e) {
    console.log(e.target.value);
  }
  function handleShowHideClick(e) {
    if (inputType === "password") {
      setInput("Text");
    } else {
      setInput("password");
    }
    console.log(inputType);
  }
  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}
export default TextInputFormContainer;
