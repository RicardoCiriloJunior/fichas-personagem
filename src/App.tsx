import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import CadastroPage from './components/CadastroPage/CadastroPage';
import EsqueceuSenhaPage from './components/EsqueceuSenhaPage/EsqueceuSenhaPage';
import HomePage from "./components/HomePage/HomePage";
import InventarioPage from "./components/InventarioPage/InventarioPage";

function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/cadastro" element={<CadastroPage />}/>
      <Route path="/esqueceu-senha" element={<EsqueceuSenhaPage />}/>
      <Route path="/inventario" element={<InventarioPage />}/>
    </Routes>
  )
}

export default App;