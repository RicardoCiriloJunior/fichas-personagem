import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import CadastroPage from './components/CadastroPage/CadastroPage';
import EsqueceuSenhaPage from './components/EsqueceuSenhaPage/EsqueceuSenhaPage';
import HomePage from "./components/HomePage/HomePage";
import InventarioPage from "./components/InventarioPage/InventarioPage";
import EquipamentosPage from "./components/EquipamentosPage/EquipamentosPage";
import MagiasPage from "./components/MagiasPage/MagiasPage";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App(){
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/cadastro" element={<CadastroPage />}/>
          <Route path="/esqueceu-senha" element={<EsqueceuSenhaPage />}/>
          <Route path="/inventario" element={<ProtectedRoute><InventarioPage /></ProtectedRoute>}/>
          <Route path="/equipamentos" element={<ProtectedRoute><EquipamentosPage /></ProtectedRoute>}/>
          <Route path="/magias" element={<ProtectedRoute><MagiasPage /></ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App;