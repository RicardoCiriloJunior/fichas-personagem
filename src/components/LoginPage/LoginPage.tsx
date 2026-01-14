import "./LoginPage.css";
import Header from "../Header/Header";
import InputLogin from "../InputLogin/InputLogin";
import BotaoConfirmar from "../BotaoConfirmar/BotaoConfirmar";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { ApiError } from "../../services/ApiError";
import PopUp from "../PopUp/PopUp";
import dado_1 from "../../assets/dado-1.png";

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - Fichas de Personagem";
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signIn(email, password);

      navigate("/");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
        return;
      }
      setError("Erro ao fazer login");
    }
  }

  return (
    <div className="page-container" id="pagina-login">
      <Header title="Login" voltar={false} />
      <main>
        <form
          className="blue-content"
          id="login-content"
          onSubmit={handleSubmit}
        >
          <h1 id="titulo-login">Entre na sua conta</h1>
          <InputLogin
            placeholder={"Exemplo: exemplo@email.com"}
            label="Email:"
            type="email"
            idInput="email-input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLogin
            placeholder={"Digite a sua senha"}
            label="Senha:"
            type="password"
            idInput="senha-input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="links-login">
            <a href="esqueceu-senha">Esqueceu a senha?</a>
            <p>
              Não tem conta? <a href="cadastro">Cadastre-se</a>
            </p>
          </div>
          <BotaoConfirmar content={"Entrar"} />
        </form>
      </main>
      {error && (
        <PopUp type="error" title="Erro!" message={error} buttonContent="Fechar" onClick={() => setError("") } srcImg={dado_1}/>
      )}
    </div>
  );
}

export default Login;
