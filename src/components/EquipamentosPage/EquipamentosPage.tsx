import "./EquipamentosPage.css";
import Header from "../Header/Header";
import ItemSection from "../ItemSection/ItemSection";
import InputLogin from "../InputLogin/InputLogin";
import StatusValor from "../StatusValor/StatusValor";
import LinhaHexagono from "../LinhaHexagono/LinhaHexagono";
import { useMemo, useState } from "react";
import type { Arma, Armadura } from "../../Util/Ficha";
import { Adicionar } from "../ItemSection/ItemSection";
import { useAuth } from "../../auth/useAuth";
import dado_10 from "../../assets/dado-10.png";
import PopUp from "../PopUp/PopUp";

function EquipamentosPage() {
  const WIDTH_INPUT = "40%";
  const TITLE_AVISO = "Salve!"
  const MSG_AVISO = "Você tem alterações não salvas. Salve para não perder os dados ao sair da página!"

  const { ficha, updateFicha } = useAuth();

  const [armasLocal, setArmasLocal] = useState<Arma[]>(
    structuredClone(ficha?.equipamentos.armas) || []
  );
  const [armasOriginal, setArmasOriginal] = useState<Arma[]>(
    structuredClone(ficha?.equipamentos.armas) || []
  );

  const [armadurasLocal, setArmadurasLocal] = useState<Armadura[]>(
    structuredClone(ficha?.equipamentos.armaduras) || []
  );
  const [armadurasOriginal, setArmadurasOriginal] = useState<Armadura[]>(
    structuredClone(ficha?.equipamentos.armaduras) || []
  );

  const popUpAviso = useMemo( () => {
    if (!armasLocal || !armasOriginal) return false;
    if (!armadurasLocal || !armadurasOriginal) return false;

    return (JSON.stringify(armasLocal) !== JSON.stringify(armasOriginal)) ||
           (JSON.stringify(armadurasLocal) !== JSON.stringify(armadurasOriginal));
  }, [armasLocal, armasOriginal, armadurasLocal, armadurasOriginal]);


  function adicionarArma() {
    setArmasLocal(prev => [
      ...prev,
      { id: crypto.randomUUID(), nome: "", encantamento: "", dano: "", custo: "" },
    ]);
  }

  function adicionarArmadura() {
    setArmadurasLocal(prev => [
      ...prev,
      { id: crypto.randomUUID(), nome: "", defesa: 0 },
    ]);
  }

  function removerArma(id: string) {
    setArmasLocal(prev => prev.filter(arma => arma.id !== id));
  }

  function removerArmadura(id: string) {
    setArmadurasLocal(prev => prev.filter(a => a.id !== id));
  }

  function atualizarArma(id: string, campo: keyof Arma, valor: string) {
    setArmasLocal(prev =>
      prev.map(arma =>
        arma.id === id ? { ...arma, [campo]: valor } : arma
      )
    );
  }

  function atualizarDefesa(id: string, defesa: number) {
    setArmadurasLocal(prev =>
      prev.map(a =>
        a.id === id ? { ...a, defesa } : a
      )
    );
  }

  async function salvarEquipamentos() {
    if (!ficha) return;

    const fichaAtualizada = {
      ...ficha,
      equipamentos: {
        armas: armasLocal,
        armaduras: armadurasLocal,
      },
    };

    await updateFicha(fichaAtualizada);

    setArmasOriginal(structuredClone(armasLocal));
    setArmasLocal(structuredClone(armasLocal));

    setArmadurasLocal(structuredClone(armadurasLocal));
    setArmadurasOriginal(structuredClone(armadurasLocal));
  }
  

  return (
    <div className="home-container" id="equipamentos-page">
      <Header title="Ficha" voltar navigateTo="/" />

      <main>
        <h1 className="home-title">Equipamentos</h1>

        <section className="blue-content equipamentos-content" id="armas-content">
          <h1 className="equipamentos-title">Armas</h1>

          {armasLocal.length > 0 ? ( armasLocal.map((arma, index) => (
            <ItemSection
              key={arma.id}
              lixeiraInline={false}
              ultimoItem={index === armasLocal.length - 1}
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
          ))) : (
            <Adicionar display={true} onAddClick={adicionarArma} sozinho />
          )}
        </section>

        <LinhaHexagono />

        <section className="blue-content equipamentos-content" id="armaduras-content">
          <h1 className="equipamentos-title">Armaduras</h1>

          {armadurasLocal.length > 0 ? ( armadurasLocal.map((armadura, index) => (
            <ItemSection
              key={armadura.id}
              lixeiraInline={false}
              ultimoItem={index === armadurasLocal.length - 1}
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
                    setArmadurasLocal(prev =>
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
          ))) : (
            <Adicionar display={true} onAddClick={adicionarArmadura} sozinho />
          )}
        </section>
      </main>
      {popUpAviso && (
        <PopUp 
          title={TITLE_AVISO}
          message={MSG_AVISO}
          srcImg={dado_10}
          type={'info'}
          buttonContent="Salvar"
          onClick={salvarEquipamentos}
        />
      )}
    </div>
  );
}

export default EquipamentosPage;
