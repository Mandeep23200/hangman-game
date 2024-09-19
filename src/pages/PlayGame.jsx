import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../component/MaskedText/MaskedText";
import LetterButtons from "../component/Button/LetterButtons/LetterButtons";
function PlayGame(){
//    const [searchParams]= useSearchParams();---to access querrry params
// //    console.log(searchParams.get("text"));
// let result = searchParams.get("text");
            //   const {text} = useParams(); ---to access path params
           const {state} =useLocation(); //---to access the object (state)..by destructuring it {state}


    return(
        <>
        <h1>Play Game {state.wordSelected}</h1>
        <MaskedText text={state.wordSelected} guessedLetters={[]} />
        <div>

        
        <LetterButtons text={state.wordSelected} guessedLetters={[]} onLetterClick={()=>{}}/>
        </div>
        <Link to ="/start" className="text-blue-400">Start Game</Link>

        </>
    );

}
export default PlayGame;