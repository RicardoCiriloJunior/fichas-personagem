import "./Login.css";
import Header from "../Header/Header";
import { useEffect } from "react";

function Login() {

  useEffect( () => {
    document.title = "Login - Fichas de Personagem";
  })

  return (
    <div className="page-container" id="pagina-login">
      <Header title="Login" voltar={true}/>
      <main>
        <div className="login-content">
          <h1 id="titulo-login">Entre na sua conta</h1>
          <div className="input">
            <label htmlFor="email-input">Email:</label>
            <input
              type="email"
              className="email-input"
              placeholder="exemplo@email.com"
            />
          </div>
          <div className="input">
            <label htmlFor="senha-input">Senha:</label>
            <input
              type="password"
              className="senha-input"
              placeholder="Digite a sua senha"
            />
          </div>
          <p>Esqueceu a senha?</p>
          <p>Não tem conta? Cadastre-se</p>
          <button className="botao-login">Entrar</button>
        </div>
      </main>
    </div>
  );
}

export default Login;
