import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInput] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate(); //useNavigate is a hook that return a navigate function
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form Submitted" ,value);
    if(value){
      //if we have something in value thenn we navigate to the play page
      //  navigate("/play");
      setTimeout (()=>{
        navigate("/play");
      },3000)
    }
  }
  function handleTextInputChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
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
