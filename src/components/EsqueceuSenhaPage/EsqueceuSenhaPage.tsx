import "./EsqueceuSenhaPage.css";
import Header from "../Header/Header";
import InputLogin from "../InputLogin/InputLogin";
import BotaoConfirmar from "../BotaoConfirmar/BotaoConfirmar";

function EsqueceuSenhaPage() {
  return (
    <div className="page-container" id="pagina-esqueceu-senha">
      <Header title="Mudar Senha" voltar={true} />
      <main>
        <form
          className="blue-content"
          id="esqueceu-senha-content"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 id="titulo-esqueceu-senha">Esqueceu a senha</h1>
          <p className="descricao-login">Digite o seu email para enviarmos um código de verificação.</p>
          <InputLogin
            idInput={"esqueceu-senha-email"}
            placeholder={"Exemplo: exemplo@email.com"}
            name={"email"}
            label={"Email:"}
            type={"email"}
          />
          <BotaoConfirmar content={"Confirmar"} />
        </form>
      </main>
    </div>
  );
}

export default EsqueceuSenhaPage;
