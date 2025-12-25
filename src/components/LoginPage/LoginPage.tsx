import "./LoginPage.css";
import Header from "../Header/Header";
import InputLogin from "../InputLogin/InputLogin";
import BotaoConfirmar from "../BotaoConfirmar/BotaoConfirmar";
import { useEffect, useRef } from "react";

function Login() {
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Login - Fichas de Personagem";
  }, []);

  return (
    <div className="page-container" id="pagina-login">
      <Header title="Login" voltar={false} />
      <main>
        <form
          className="blue-content"
          id="login-content"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 id="titulo-login">Entre na sua conta</h1>
          <InputLogin
            placeholder={"Exemplo: exemplo@email.com"}
            label="Email:"
            type="email"
            idInput="email-input"
            name="email"
          />
          <InputLogin
            placeholder={"Digite a sua senha"}
            label="Senha:"
            type="password"
            idInput="senha-input"
            name="password"
            reference={passwordRef}
          />
          <div className="links-login">
            <a href="esqueceu-senha">Esqueceu a senha?</a>
            <p>Não tem conta? <a href="cadastro">Cadastre-se</a></p>
          </div>
          <BotaoConfirmar content={"Entrar"} />
        </form>
      </main>
    </div>
  );
}

export default Login;
