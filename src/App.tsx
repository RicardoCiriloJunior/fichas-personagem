import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import CadastroPage from './components/CadastroPage/CadastroPage';
import EsqueceuSenhaPage from './components/EsqueceuSenhaPage/EsqueceuSenhaPage';
import HomePage from "./components/HomePage/HomePage";

function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/cadastro" element={<CadastroPage />}/>
      <Route path="/esqueceu-senha" element={<EsqueceuSenhaPage />}/>
    </Routes>
  )
}

export default App;