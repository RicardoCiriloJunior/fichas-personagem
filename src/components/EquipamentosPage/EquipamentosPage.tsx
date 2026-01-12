import "./EquipamentosPage.css";
import Header from "../Header/Header";
import ItemSection from "../ItemSection/ItemSection";
import InputLogin from "../InputLogin/InputLogin";
import StatusValor from "../StatusValor/StatusValor";
import LinhaHexagono from "../LinhaHexagono/LinhaHexagono";
import { useState } from "react";
import type { Arma, Armadura } from "../../Util/Ficha";

function EquipamentosPage() {
  const WIDTH_INPUT = "40%";

  const [armasTeste, setArmas] = useState<Arma[]>([
    {
      id: crypto.randomUUID(),
      nome: "Espada Longa",
      encantamento: "+1 Fogo",
      dano: "1d8 + 2",
      custo: "150 PO",
    },
    {
      id: crypto.randomUUID(),
      nome: "Arco Curto",
      encantamento: "+2 Gelo",
      dano: "1d6 + 1",
      custo: "120 PO",
    },
  ]);

  const [armadurasTeste, setArmaduras] = useState<Armadura[]>([
    { id: crypto.randomUUID(), nome: "Cota de Malha", defesa: 15 },
    { id: crypto.randomUUID(), nome: "Armadura de Couro", defesa: 12 },
  ]);

  function adicionarArma() {
    setArmas(prev => [
      ...prev,
      { id: crypto.randomUUID(), nome: "", encantamento: "", dano: "", custo: "" },
    ]);
  }

  function adicionarArmadura() {
    setArmaduras(prev => [
      ...prev,
      { id: crypto.randomUUID(), nome: "", defesa: 0 },
    ]);
  }

  function removerArma(id: string) {
    setArmas(prev => prev.filter(arma => arma.id !== id));
  }

  function removerArmadura(id: string) {
    setArmaduras(prev => prev.filter(a => a.id !== id));
  }

  // --- Atualizar campos ---
  function atualizarArma(id: string, campo: keyof Arma, valor: string) {
    setArmas(prev =>
      prev.map(arma =>
        arma.id === id ? { ...arma, [campo]: valor } : arma
      )
    );
  }

  function atualizarDefesa(id: string, defesa: number) {
    setArmaduras(prev =>
      prev.map(a =>
        a.id === id ? { ...a, defesa } : a
      )
    );
  }

  return (
    <div className="home-container" id="equipamentos-page">
      <Header title="Ficha" voltar navigateTo="/" />

      <main>
        <h1 className="home-title">Equipamentos</h1>

        {/* Seção Armas */}
        <section className="blue-content equipamentos-content" id="armas-content">
          <h1 className="equipamentos-title">Armas</h1>

          {armasTeste.map((arma, index) => (
            <ItemSection
              key={arma.id}
              lixeiraInline={false}
              ultimoItem={index === armasTeste.length - 1}
              onAddClick={adicionarArma}
              onDeleteClick={() => removerArma(arma.id)}
            >
              <div className="input-equipamento-container">
                <InputLogin
                  label="Nome"
                  idInput={`nome-arma-${arma.id}`}
                  type="text"
                  name="nomeArma"
                  label_align="center"
                  width={WIDTH_INPUT}
                  classname="inputs-equipamento"
                  value={arma.nome}
                  onChange={(e) => atualizarArma(arma.id, "nome", e.target.value)}
                />
                <InputLogin
                  label="Encantamento"
                  idInput={`encantamento-arma-${arma.id}`}
                  type="text"
                  name="encantamentoArma"
                  label_align="center"
                  width={WIDTH_INPUT}
                  classname="inputs-equipamento"
                  value={arma.encantamento}
                  onChange={(e) => atualizarArma(arma.id, "encantamento", e.target.value)}
                />
                <InputLogin
                  label="Dano"
                  idInput={`dano-arma-${arma.id}`}
                  type="text"
                  name="danoArma"
                  label_align="center"
                  width={WIDTH_INPUT}
                  classname="inputs-equipamento"
                  value={arma.dano}
                  onChange={(e) => atualizarArma(arma.id, "dano", e.target.value)}
                />
                <InputLogin
                  label="Custo"
                  idInput={`custo-arma-${arma.id}`}
                  type="text"
                  name="custoArma"
                  label_align="center"
                  width={WIDTH_INPUT}
                  classname="inputs-equipamento"
                  value={arma.custo}
                  onChange={(e) => atualizarArma(arma.id, "custo", e.target.value)}
                />
              </div>
            </ItemSection>
          ))}
        </section>

        <LinhaHexagono />

        {/* Seção Armaduras */}
        <section className="blue-content equipamentos-content" id="armaduras-content">
          <h1 className="equipamentos-title">Armaduras</h1>

          {armadurasTeste.map((armadura, index) => (
            <ItemSection
              key={armadura.id}
              lixeiraInline={false}
              ultimoItem={index === armadurasTeste.length - 1}
              onAddClick={adicionarArmadura}
              onDeleteClick={() => removerArmadura(armadura.id)}
            >
              <div className="input-equipamento-container">
                <InputLogin
                  label="Nome"
                  idInput={`nome-armadura-${armadura.id}`}
                  type="text"
                  name="nomeArmadura"
                  label_align="center"
                  width="60%"
                  classname="inputs-equipamento"
                  value={armadura.nome}
                  onChange={(e) => {
                    const novoNome = e.target.value;
                    setArmaduras(prev =>
                      prev.map(a => a.id === armadura.id ? { ...a, nome: novoNome } : a)
                    );
                  }}
                />
                <div className="defesa-armadura-div">
                  <label className="defesa-armadura-label">Defesa</label>
                  <StatusValor
                    name="defesaArmadura"
                    value={armadura.defesa}
                    setas
                    heightInput="40px"
                    onChange={(v) => atualizarDefesa(armadura.id, v)}
                  />
                </div>
              </div>
            </ItemSection>
          ))}
        </section>
      </main>
    </div>
  );
}

export default EquipamentosPage;
