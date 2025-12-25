import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import CadastroPage from './components/CadastroPage/CadastroPage';
import EsqueceuSenhaPage from './components/EsqueceuSenhaPage/EsqueceuSenhaPage';

function App(){
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/cadastro" element={<CadastroPage />}/>
      <Route path="/esqueceu-senha" element={<EsqueceuSenhaPage />}/>
    </Routes>
  )
}

export default App;