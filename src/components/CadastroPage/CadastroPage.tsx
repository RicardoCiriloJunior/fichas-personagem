import "./CadastroPage.css";
import Header from "../Header/Header.tsx";
import InputLogin from "../InputLogin/InputLogin.tsx";
import BotaoConfirmar from "../BotaoConfirmar/BotaoConfirmar.tsx";
import React, { useState } from "react";
import { cadastrar } from "../../services/Api.ts";
import { useAuth } from "../../auth/useAuth.ts";
import { ApiError } from "../../services/ApiError.ts";
import PopUp from "../PopUp/PopUp.tsx";
import dado_1 from "../../assets/dado-1.png";
import { useNavigate } from "react-router-dom";
import Loading from "../LoginPage/Loading.tsx";

function CadastroPage() {
  const { signIn } = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  function handlePopUpClick() {
    setError(null);
  }
  async function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (senha !== confirmarSenha) {
      setError("As senhas precisam ser iguais!")
      setLoading(false);
      return;
    }

    try {
      await cadastrar(nome, email, senha, confirmarSenha);
      await signIn(email, senha);

      navigate("/");
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message)
      } else {
        setError("Erro ao cadastrar. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="page-container" id="pagina-cadastro">
      <Header title="Cadastro" voltar={true} navigateTo="/login" />
      {loading && <Loading />}
      <main>
        <form
          className="blue-content"
          id="login-content"
          onSubmit={handleCadastro}
        >
          <h1 id="titulo-cadastro">Faça o seu cadastro</h1>
          <InputLogin
            idInput={"cadastro-nome"}
            placeholder={"Digite seu nome"}
            name={"nome"}
            label={"Nome:"}
            type={"text"}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputLogin
            idInput={"cadastro-email"}
            placeholder={"Exemplo: exemplo@email.com"}
            name={"email"}
            label={"Email:"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLogin
            idInput={"cadastro-senha"}
            placeholder={"Digite a sua senha"}
            name={"senha"}
            label={"Senha:"}
            type={"password"}
            onChange={(e) => setSenha(e.target.value)}
          />
          <InputLogin
            idInput={"cadastro-confirmar-senha"}
            placeholder={"Confirme a nova senha"}
            name={"confirmarSenha"}
            label={"Confirmar Senha:"}
            type={"password"}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <BotaoConfirmar content={"Cadastre-se"} />
        </form>
      </main>
      {error && (
        <PopUp
          title="Erro!"
          message={error}
          srcImg={dado_1}
          type={'error'}
          buttonContent="Fechar"
          onClick={handlePopUpClick}
        />
      )}
    </div>
  );
}

export default CadastroPage;
