import Button from "../Button/Button";
import TextInput from "../Button/TextInput/TextInput";


function TextInputForm({inputType ,handleFormSubmit ,handleTextInputChange ,handleShowHideClick}){
  
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                type={inputType}
                label="Enter a word or Phrase"
                placeholder="Enter a word or phrase here..."
                handleInputChange ={handleTextInputChange}
                
                />

            </div>
            <div>
            <Button
                styleType="warning"
                text ={inputType ==="password"?"Show":"Hide"}
                onClickHandler={handleShowHideClick}
                />
                </div>
                <div>
                <Button
                styleType="primary"
                text ="Submit"
                type = "submit"
                
                />
                </div>
        </form>
    )

}
export default TextInputForm;
