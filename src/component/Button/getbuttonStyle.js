function getstyleType(styleType){
    if(styleType === "primary"){
        return "bg-blue-500";

    }
    else if(styleType === "warning"){
        return "bg-red-500";
    }else if(styleType === "success"){
        return "bg-green-500";
    }

}

export default getstyleType;