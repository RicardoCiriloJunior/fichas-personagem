import "./HomePage.css";
import Header from "../Header/Header";
import InputLogin from "../InputLogin/InputLogin";
import StatusValor from "../StatusValor/StatusValor";
import LinhaHexagono from "../LinhaHexagono/LinhaHexagono";

function HomePage() {
  return (
    <div className="home-container" id="home-page">
      <Header title="Ficha" voltar={false} />
      <main>
        <h1 id="home-title">A Grande Guerra</h1>
        <section className="content-box" id="principal">
          <InputLogin
            label="JOGADOR"
            idInput="jogador-input"
            type="text"
            name="jogador"
            label_align="center"
            width={336}
            classname="inputs-principal"
          />
          <InputLogin
            label="NOME"
            idInput="nome-input"
            type="text"
            name="nome"
            label_align="center"
            width={336}
            classname="inputs-principal"
          />
          <div className="min-max-container">
            <label className="min-max-label">VIDA</label>
            <div className="min-max">
              <StatusValor
                label="Atual"
                name="vidaAtual"
                directionLabel="left"
              />
              <div className="barra-diagonal"></div>
              <StatusValor label="Max" name="vidaMax" directionLabel="right" />
            </div>
          </div>
          <InputLogin
            label="CLASSE"
            idInput="classe-input"
            type="text"
            name="classe"
            label_align="center"
            width={336}
            classname="inputs-principal"
          />
          <InputLogin
            label="RAÇA"
            idInput="raca-input"
            type="text"
            name="raca"
            label_align="center"
            width={336}
            classname="inputs-principal"
          />
          <div className="min-max-container">
            <label className="min-max-label">MANA</label>
            <div className="min-max">
              <StatusValor
                label="Atual"
                name="manaAtual"
                directionLabel="left"
              />
              <div className="barra-diagonal"></div>
              <StatusValor label="Max" name="manaMax" directionLabel="right" />
            </div>
          </div>
        </section>
        <LinhaHexagono />
      </main>
    </div>
  );
}

export default HomePage;
