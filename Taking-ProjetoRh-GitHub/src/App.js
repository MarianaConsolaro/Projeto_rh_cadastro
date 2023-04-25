import './App.css';
import { Routes, Route } from "react-router-dom";
import Cadastro from './components/Cadastro';
import ListagemFiltro from './components/ListagemFiltro';



function App() {
  return (
    <div className="App">          
    

      <Routes>

        <Route path = "/" element = {<Cadastro/>} /> 
        <Route path = "/listagemfiltro" element = {<ListagemFiltro/>} /> 

      </Routes>

    </div>
  );
}

export default App;
