function TextInput({type = "text" ,label,placeholder = "Enter your input here",handleInputChange}){
    return(
        <label>
           <span className="text-gray-700"> {label} </span>
            <input
            className="px-4 py-2 border-gray-500 rounded-md w-full"
            placeholder={placeholder}

            type={type}
           
           onChange={handleInputChange} 
    
            
            />
        </label>
      
    )
   

}
export default TextInput;