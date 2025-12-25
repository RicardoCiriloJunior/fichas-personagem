import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import CadastroPage from './components/CadastroPage/CadastroPage';

function App(){
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/cadastro" element={<CadastroPage />}/>
    </Routes>
  )
}

export default App;