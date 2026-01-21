import "./MagiasPage.css";
import Header from "../Header/Header";
import type { Magia } from "../../Util/Ficha";
import { useMemo, useState } from "react";
import ItemSection from "../ItemSection/ItemSection";
import InputLogin from "../InputLogin/InputLogin";
import { Adicionar } from "../ItemSection/ItemSection";
import { useAuth } from "../../auth/useAuth";
import PopUp from "../PopUp/PopUp";
import dado_10 from "../../assets/dado-10.png";
import dado_20 from "../../assets/dado-20.png";

function MagiasPage() {
  const WIDTH_INPUT = "45%";
  const TITLE_AVISO = "Salve!";
  const MSG_AVISO =
    "Você tem alterações não salvas. Salve para não perder os dados ao sair da página!";
  const { ficha, updateFicha } = useAuth();
  const [magiasLocal, setMagiasLocal] = useState<Magia[]>(
    structuredClone(ficha?.magias) || []
  );
  const [magiasOriginal, setMagiasOriginal] = useState<Magia[]>(
    structuredClone(ficha?.magias) || []
  );

  const popUpAviso = useMemo(() => {
    if (!magiasLocal || !magiasOriginal) return false;
    return JSON.stringify(magiasLocal) !== JSON.stringify(magiasOriginal);
  }, [magiasLocal, magiasOriginal]);

  const [exibirPopUpSucesso, setExibirPopUpSucesso] = useState(false);
  const popUpSucesso = useMemo(() => {
    return exibirPopUpSucesso;
  }, [exibirPopUpSucesso]);

  function adicionarMagia() {
    setMagiasLocal((prev) => [
      ...prev,
      { id: crypto.randomUUID(), efeito: "", custo: "" },
    ]);
  }
  function removerMagia(id: string) {
    setMagiasLocal((prev) => prev.filter((magia) => magia.id !== id));
  }
  function atualizarMagia(id: string, campo: keyof Magia, valor: string) {
    setMagiasLocal((prev) =>
      prev.map((magia) =>
        magia.id === id ? { ...magia, [campo]: valor } : magia
      )
    );
  }

  async function salvarMagias() {
    if (!ficha) return;

    const fichaAtualizada = {
      ...ficha,
      magias: magiasLocal,
    };
    await updateFicha(fichaAtualizada);

    setMagiasLocal(structuredClone(magiasLocal));
    setMagiasOriginal(structuredClone(magiasLocal));
    setExibirPopUpSucesso(true);
  }
  return (
    <div className="home-container" id="magias-page">
      <Header title="Ficha" voltar navigateTo="/" />
      <main>
        <h1 className="home-title">Magias</h1>
        {magiasLocal.length > 0 && (
          <div
            className="blue-content"
            id="magias-content"
            style={{ paddingBottom: 40 }}
          >
            {magiasLocal.map((magia, index) => (
              <ItemSection
                key={magia.id}
                lixeiraInline={false}
                ultimoItem={index === magiasLocal.length - 1}
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
        {magiasLocal.length === 0 && (
          <div className="blue-content" id="magias-content">
            <Adicionar display={true} onAddClick={adicionarMagia} sozinho />
          </div>
        )}
      </main>
      {popUpAviso && (
        <PopUp
          title={TITLE_AVISO}
          message={MSG_AVISO}
          type={"info"}
          buttonContent="Salvar"
          srcImg={dado_10}
          onClick={salvarMagias}
          allowMinimize
          minimizedMessage="Não perca nada"
        />
      )}
      {popUpSucesso && (
        <PopUp
          title="Sucesso!"
          message="Informações salvas com sucesso!"
          type="success"
          buttonContent="Fechar"
          srcImg={dado_20}
          closeInterval={5000}
          onTimeout={() => setExibirPopUpSucesso(false)}
        />
      )}
    </div>
  );
}

export default MagiasPage;
