
import './App.css'

import TextInputFormContainer from './component/TextInputForm/TextInputFormContainer';
import {Route,Routes} from 'react-router-dom';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';



function App() {
  

  return (
    <div>
      <Routes>
        <Route path ='/' element={<TextInputFormContainer/>}/>
        <Route path="/start" element={<StartGame/>}/>
        <Route path="/play" element={<PlayGame/>}/>
      </Routes>
      

    
 
  
  </div>
  
  )
}

export default App;
