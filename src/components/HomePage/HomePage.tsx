import "./HomePage.css";
import Header from "../Header/Header";
import InputLogin from "../InputLogin/InputLogin";
import StatusValor from "../StatusValor/StatusValor";
import LinhaHexagono from "../LinhaHexagono/LinhaHexagono";
import InputAtributo from "../InputAtributo/InputAtributo";
import OutrasSecoesBotao from "../OutrasSecoesBotao/OutrasSecoesBotao";
import cajado from "../../assets/cajado.png";
import escudo_espada from "../../assets/escudo-espada.png";
import mochila from "../../assets/mochila.png";


function HomePage() {
  return (
    <div className="home-container" id="home-page">
      <Header title="Ficha" voltar={false} />
      <main>
        <h1 id="home-title">A Grande Guerra</h1>
        <section className="content-box" id="principal">
          <div className="linha-principal">
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
          </div>
          <div className="linha-principal">
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
          </div>
        </section>
        <LinhaHexagono />
        <section className="content-box" id="secundario">
            <div className="half-width alice" id="atributos-e-modificadores">
                <div id="atributos-container">
                    <p>Atributos</p>
                    <div className="atributo">
                        <span>FOR</span> <InputAtributo name="forca" />
                    </div>
                    <div className="atributo">
                        <span>AGI</span> <InputAtributo name="agilidade" />
                    </div>
                    <div className="atributo">
                        <span>INT</span> <InputAtributo name="inteligencia" />
                    </div>
                    <div className="atributo">
                        <span>CAR</span> <InputAtributo name="carisma" />
                    </div>
                    <div className="atributo">
                        <span>VIG</span> <InputAtributo name="vigor" />
                    </div>
                    <div className="atributo">
                        <span>DES</span> <InputAtributo name="destreza" />
                    </div>
                    <div className="atributo">
                        <span>SRT</span> <InputAtributo name="sorte" />
                    </div>
                </div>
                <div id="modificadores-container">
                    <p>Mod</p>
                    <InputAtributo name="modForca" />
                    <InputAtributo name="modAgilidade" />
                    <InputAtributo name="modInteligencia" />
                    <InputAtributo name="modCarisma" />
                    <InputAtributo name="modVigor" />
                    <InputAtributo name="modDestreza" />
                    <InputAtributo name="modSorte" />
                </div>
            </div>
            <div className="half-width alice" id="dinheiro-e-reputacao">
                <div id="dinheiro-container">
                    <p>Dinheiro</p>
                    <div id="inputs-dinheiro">
                        <StatusValor label="Ouro" name="dinheiroOuro" />
                        <StatusValor label="Prata" name="dinheiroPrata" />
                        <StatusValor label="Cobre" name="dinheiroCobre" />
                    </div>
                </div>
                <div id="reputacao-container">
                    <p>Reputação</p>
                    <div id="inputs-reputacao">
                        <StatusValor label="Generalistas" name="repGeneralistas" classname="status-valor-reputacao"/>
                        <StatusValor label="Puristas" name="repPuristas" classname="status-valor-reputacao"/>
                        <StatusValor label="Karma" name="repKarma" classname="status-valor-reputacao"/>
                    </div>
                </div>
            </div>
        </section>
        <LinhaHexagono />
        <div className="content-box" id="outras-secoes">
          <h1>Outras Seções</h1>
          <div>
            <OutrasSecoesBotao label="Inventário" icon={<img src={mochila} alt="Inventário" />} />
            <OutrasSecoesBotao label="Equipamentos" icon={<img src={escudo_espada} alt="Equipamentos" />} />
            <OutrasSecoesBotao label="Magias" icon={<img src={cajado} alt="Magias" />} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
