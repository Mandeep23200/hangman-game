const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); // Convert string to array
function LetterButtons({text,guessedLetters,onLetterClick}){
    const orignalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter){
        if(guessedLettersSet.has(letter)){
        return `${orignalLetters.has(letter)?`bg-green-500`:`bg-red-500`}`;
        }else{
            return `bg-blue-500`;
        }
    }

    const buttons = alphabet.map(letter=>{
        return(
            <button
            key ={`button-${letter}`}
            onClick={onLetterClick}
            disabled= {guessedLettersSet.has(letter)}
            className={`m-1 h-12 w-12 text-white rounded-md ${buttonStyle(letter)}`}
            
            
            
            >
                {letter}

            </button>
        );
    });
    return(
        <>
        {buttons}
        </>
    );

}
export default LetterButtons;