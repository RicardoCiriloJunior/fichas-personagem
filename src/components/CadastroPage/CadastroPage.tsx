import "./CadastroPage.css";
import Header from "../Header/Header.tsx";
import InputLogin from "../InputLogin/InputLogin.tsx";
import BotaoConfirmar from "../BotaoConfirmar/BotaoConfirmar.tsx";

function CadastroPage() {
  return (
    <div className="page-container" id="pagina-cadastro">
      <Header title="Cadastro" voltar={true} navigateTo="/login"/>
      <main>
        <form
          className="blue-content"
          id="login-content"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 id="titulo-cadastro">Faça o seu cadastro</h1>
          <InputLogin idInput={"cadastro-nome"} placeholder={"Digite seu nome"} name={"nome"} label={"Nome:"} type={"text"} />
          <InputLogin idInput={"cadastro-email"} placeholder={"Exemplo: exemplo@email.com"} name={"email"} label={"Email:"} type={"email"} />
          <InputLogin idInput={"cadastro-senha"} placeholder={"Digite a sua senha"} name={"senha"} label={"Senha:"} type={"password"}/>
          <InputLogin idInput={"cadastro-confirmar-senha"} placeholder={"Confirme a nova senha"} name={"confirmarSenha"} label={"Confirmar Senha:"} type={"password"} />
          <BotaoConfirmar content={"Cadastre-se"} />
        </form>
      </main>
    </div>
  );
}

export default CadastroPage;
