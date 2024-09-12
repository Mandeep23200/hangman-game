import getstyleType from  './getbuttonStyle';
function Button({text ,onClickHandler ,styleType="primary",type ="button"}){
    return(
        <button
        onClick={onClickHandler} 
        type={type}
        className={`text-white ${getstyleType(styleType)} px-4 py-2`}
    
        
        >
         {text}
        </button>
    );
}

export default Button;