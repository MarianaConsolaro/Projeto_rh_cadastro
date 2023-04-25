import './App.css';
import { Routes, Route } from "react-router-dom";
import Cadastro from './components/Cadastro';



function App() {
  return (
    <div className="App">          
    

      <Routes>

        <Route path = "/" element = {<Cadastro/>} /> 
      
      </Routes>

    </div>
  );
}

export default App;
