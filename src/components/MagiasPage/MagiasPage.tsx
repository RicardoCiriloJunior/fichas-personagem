import "./MagiasPage.css";
import Header from "../Header/Header";
import type { Magia } from "../../Util/Ficha";
import { useState } from "react";
import ItemSection from "../ItemSection/ItemSection";
import InputLogin from "../InputLogin/InputLogin";
import { Adicionar } from "../ItemSection/ItemSection";

function MagiasPage() {
  const WIDTH_INPUT = "45%";
  const [magiasTeste, setMagiasTeste] = useState<Magia[]>([
    {
      id: crypto.randomUUID(),
      efeito: "Queima os inimigos, dando 10 de dano por rodada.",
      custo: "5 de mana",
    },
    {
      id: crypto.randomUUID(),
      efeito: "Congela os inimigos, reduzindo a velocidade em 50%.",
      custo: "7 de mana",
    },
    {
      id: crypto.randomUUID(),
      efeito: "Cura 15 pontos de vida do aliado.",
      custo: "6 de mana",
    },
  ]);

  function adicionarMagia() {
    setMagiasTeste((prev) => [
      ...prev,
      { id: crypto.randomUUID(), efeito: "", custo: "" },
    ]);
  }
  function removerMagia(id: string) {
    setMagiasTeste((prev) => prev.filter((magia) => magia.id !== id));
  }
  function atualizarMagia(id: string, campo: keyof Magia, valor: string) {
    setMagiasTeste((prev) =>
      prev.map((magia) =>
        magia.id === id ? { ...magia, [campo]: valor } : magia
      )
    );
  }

  return (
    <div className="home-container" id="magias-page">
      <Header title="Ficha" voltar navigateTo="/" />
      <main>
        <h1 className="home-title">Magias</h1>
        {magiasTeste.length > 0 && (
          <div className="blue-content" id="magias-content" style={{paddingBottom: 40}}>
            {magiasTeste.map((magia, index) => (
              <ItemSection
                key={magia.id}
                lixeiraInline={false}
                ultimoItem={index === magiasTeste.length - 1}
                onAddClick={adicionarMagia}
                onDeleteClick={() => removerMagia(magia.id)}
              >
                <div className="magia-container">
                  <InputLogin
                    label="Efeito"
                    type="text"
                    value={magia.efeito}
                    idInput={`efeito-magia-${magia.id}`}
                    name="efeitoMagia"
                    label_align="center"
                    width={WIDTH_INPUT}
                    onChange={(e) =>
                      atualizarMagia(magia.id, "efeito", e.target.value)
                    }
                  />
                  <InputLogin
                    label="Custo"
                    type="text"
                    value={magia.custo}
                    idInput={`custo-magia-${magia.id}`}
                    name="custoMagia"
                    label_align="center"
                    width={WIDTH_INPUT}
                    onChange={(e) =>
                      atualizarMagia(magia.id, "custo", e.target.value)
                    }
                  />
                </div>
              </ItemSection>
            ))}
          </div>
        )}
        {magiasTeste.length === 0 && (
          <div className="blue-content" id="magias-content">
            <Adicionar display={true} onAddClick={adicionarMagia} sozinho />
          </div>
        )}
      </main>
    </div>
  );
}

export default MagiasPage;
