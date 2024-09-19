//ex..originalWorld :HUMBLE
//guessedLetters :['H','M','E']
//return --> "H _ M _ E"

export function getMaskedString(originalWorld, guessedLetters){
    guessedLetters = guessedLetters.map(letter =>letter.toUpperCase()); //['h','M','e']-->['H','M','E']

    const guessedLetterSet = new Set(guessedLetters);  // Create a Set of guessed letters...{'H','M','E'}
    
    const result = originalWorld.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){    // Check if the Set contains the current character
            return char;   // If the guessed letter is in the Set, return it
        }
        else{
            return "_";
        }
    });  //['H', '_','M', '_', '_', 'E']
    return result;
}
