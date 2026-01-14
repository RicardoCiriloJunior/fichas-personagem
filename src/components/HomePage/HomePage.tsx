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
import dado_10 from "../../assets/dado-10.png";
import { useAuth } from "../../auth/useAuth";
import { useMemo, useState } from "react";
import PopUp from "../PopUp/PopUp";
import type { Ficha } from "../../Util/Ficha";

function HomePage() {
  const { ficha, updateFicha } = useAuth();
  const [localFicha, setLocalFicha] = useState<Ficha | null>(() => 
    ficha ? structuredClone(ficha): null);
  const [fichaOriginal, setFichaOriginal] = useState<Ficha | null>(() => 
    ficha ? structuredClone(ficha): null);
  const TITULO_AVISO = "Salve!"
  const MSG_AVISO = "Você tem alterações não salvas. Salve para não perder os dados ao sair da página!"
  const popupAviso = useMemo( () => {
    if (!fichaOriginal || !localFicha) return false;
    return JSON.stringify(fichaOriginal) !== JSON.stringify(localFicha);
  }, [localFicha, fichaOriginal]);

  async function handlePopUpClick() {
    if (!localFicha || !fichaOriginal) return;

    await updateFicha(localFicha);
    setFichaOriginal(structuredClone(localFicha));
    setLocalFicha(structuredClone(localFicha));
    
  }
  
  return (
    <div className="home-container page-container" id="home-page">
      <Header title="Ficha" voltar={false} />
      <main>
        <h1 className="home-title">A Grande Guerra</h1>
        <section className="content-box" id="principal">
          <div className="linha-principal">
            <InputLogin
              label="JOGADOR"
              idInput="jogador-input"
              type="text"
              name="jogador"
              label_align="center"
              value={localFicha?.jogador || ""}
              width={336}
              classname="inputs-principal"
            />
            <InputLogin
              label="NOME"
              idInput="nome-input"
              value={localFicha?.nome || ""}
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
                  value={localFicha?.vida.atual || 0}
                />
                <div className="barra-diagonal"></div>
                <StatusValor
                  label="Max"
                  name="vidaMax"
                  directionLabel="right"
                  value={localFicha?.vida.max || 0}
                />
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
              value={localFicha?.classe || ""}
            />
            <InputLogin
              label="RAÇA"
              idInput="raca-input"
              type="text"
              name="raca"
              label_align="center"
              width={336}
              classname="inputs-principal"
              value={localFicha?.raca || ""}
            />
            <div className="min-max-container">
              <label className="min-max-label">MANA</label>
              <div className="min-max">
                <StatusValor
                  label="Atual"
                  name="manaAtual"
                  directionLabel="left"
                  value={localFicha?.mana.atual || 0}
                />
                <div className="barra-diagonal"></div>
                <StatusValor
                  label="Max"
                  name="manaMax"
                  directionLabel="right"
                  value={localFicha?.mana.max || 0}
                />
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
                <span>FOR</span> <InputAtributo name="forca" value={localFicha?.atributos.for.valor || 0}/>
              </div>
              <div className="atributo">
                <span>AGI</span> <InputAtributo name="agilidade" value={localFicha?.atributos.agi.valor || 0} />
              </div>
              <div className="atributo">
                <span>INT</span> <InputAtributo name="inteligencia" value={localFicha?.atributos.int.valor || 0} />
              </div>
              <div className="atributo">
                <span>CAR</span> <InputAtributo name="carisma" value={localFicha?.atributos.car.valor || 0} />
              </div>
              <div className="atributo">
                <span>VIG</span> <InputAtributo name="vigor" value={localFicha?.atributos.vig.valor || 0} />
              </div>
              <div className="atributo">
                <span>DES</span> <InputAtributo name="destreza" value={localFicha?.atributos.des.valor || 0} />
              </div>
              <div className="atributo">
                <span>SRT</span> <InputAtributo name="sorte" value={localFicha?.atributos.srt.valor || 0} />
              </div>
            </div>
            <div id="modificadores-container">
              <p>Mod</p>
              <InputAtributo name="modForca" value={localFicha?.atributos.for.modificador || 0}/>
              <InputAtributo name="modAgilidade" value={localFicha?.atributos.agi.modificador || 0} />
              <InputAtributo name="modInteligencia" value={localFicha?.atributos.int.modificador || 0} />
              <InputAtributo name="modCarisma" value={localFicha?.atributos.car.modificador || 0} />
              <InputAtributo name="modVigor" value={localFicha?.atributos.vig.modificador || 0} />
              <InputAtributo name="modDestreza" value={localFicha?.atributos.des.modificador || 0} />
              <InputAtributo name="modSorte" value={localFicha?.atributos.srt.modificador || 0} />
            </div>
          </div>
          <div className="half-width alice" id="dinheiro-e-reputacao">
            <div id="dinheiro-container">
              <p>Dinheiro</p>
              <div id="inputs-dinheiro">
                <StatusValor label="Ouro" name="dinheiroOuro" value={localFicha?.dinheiro.ouro || 0} />
                <StatusValor label="Prata" name="dinheiroPrata" value={localFicha?.dinheiro.prata || 0} />
                <StatusValor label="Cobre" name="dinheiroCobre" value={localFicha?.dinheiro.cobre || 0} />
              </div>
            </div>
            <div id="reputacao-container">
              <p>Reputação</p>
              <div id="inputs-reputacao">
                <StatusValor
                  label="Generalistas"
                  name="repGeneralistas"
                  value={localFicha?.reputacao.generalistas || 0}
                  classname="status-valor-reputacao"
                />
                <StatusValor
                  label="Puristas"
                  name="repPuristas"
                  value={localFicha?.reputacao.puristas || 0}
                  classname="status-valor-reputacao"
                />
                <StatusValor
                  label="Karma"
                  name="repKarma"
                  value={localFicha?.reputacao.karma || 0}
                  classname="status-valor-reputacao"
                />
              </div>
            </div>
          </div>
        </section>
        <LinhaHexagono />
        <div className="content-box" id="outras-secoes">
          <h1>Outras Seções</h1>
          <div>
            <OutrasSecoesBotao
              label="Inventário"
              icon={<img src={mochila} alt="Inventário" />}
            />
            <OutrasSecoesBotao
              label="Equipamentos"
              icon={<img src={escudo_espada} alt="Equipamentos" />}
            />
            <OutrasSecoesBotao
              label="Magias"
              icon={<img src={cajado} alt="Magias" />}
            />
          </div>
        </div>
      </main>
      {popupAviso && (
        <PopUp
          title={TITULO_AVISO}
          message={MSG_AVISO}
          type="info"
          srcImg={dado_10}
          buttonContent="Salvar"
          onClick={handlePopUpClick}
        />
      )}
    </div>
  );
}

export default HomePage;
