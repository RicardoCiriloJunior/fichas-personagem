import "./InventarioPage.css";
import Header from "../Header/Header";
import ItemSection from "../ItemSection/ItemSection";
import { Diamante } from "../Header/Header";
import StatusValor from "../StatusValor/StatusValor";
import { useMemo, useState } from "react";
import { Adicionar } from "../ItemSection/ItemSection";
import { useAuth } from "../../auth/useAuth";
import type { Item } from "../../Util/Ficha";
import dado_10 from "../../assets/dado-10.png";
import dado_20 from "../../assets/dado-20.png";
import PopUp from "../PopUp/PopUp";
import { ApiError } from "../../services/ApiError";
function InventarioPage() {
  const { ficha, updateFicha } = useAuth();
  const [itensInventarioLocal, setItensInventarioLocal] = useState<Item[]>(
    structuredClone(ficha?.inventario) || []
  );
  const [itensInventarioOriginal, setItensInventarioOriginal] = useState<Item[]>(
    structuredClone(ficha?.inventario) || []
  );
  const TITULO_AVISO = "Salve!"
  const MSG_AVISO = "Você tem alterações não salvas. Salve para não perder os dados ao sair da página!"

  const popUpAviso = useMemo( () => {
    if (!itensInventarioLocal || !itensInventarioOriginal) return false;
    return JSON.stringify(itensInventarioLocal) !== JSON.stringify(itensInventarioOriginal);
  }, [itensInventarioLocal, itensInventarioOriginal]);
  const [exibirSucesso, setExibirSucesso] = useState(false);
  const popUpSucesso = useMemo( () => {
    return exibirSucesso;
  }, [exibirSucesso]);
  
  function adicionarItem() {
    setItensInventarioLocal([
      ...itensInventarioLocal,
      { id: crypto.randomUUID(), nome: "", quantidade: 0 },
    ]);
  }
  function removerItem(indexToRemove: number) {
    const novosItens = itensInventarioLocal.filter(
      (_, index) => index !== indexToRemove
    );
    setItensInventarioLocal(novosItens);
  }
  function atualizarNome(id: string, nome: string) {
    setItensInventarioLocal((prev) =>
      prev.map((item) => (item.id === id ? { ...item, nome } : item))
  );
}
function atualizarQuantidade(id: string, quantidade: number) {
  setItensInventarioLocal((prev) =>
    prev.map((item) => (item.id === id ? { ...item, quantidade } : item))
);
}
async function salvarInventario() {
  if (!ficha) return;
  
  const fichaAtualizada = {
    ...ficha,
    inventario: itensInventarioLocal,
  };

  try {
    await updateFicha(fichaAtualizada);
  } catch (err) {
    if ( err instanceof ApiError ) {
      alert(err.message);
      return;
    }
    alert("Erro imprevisto ao salvar o inventário.");
    return;
  }

  setItensInventarioLocal(structuredClone(itensInventarioLocal));
  setItensInventarioOriginal(structuredClone(itensInventarioLocal));
  setExibirSucesso(true);

}
return (
    <div className="home-container" id="inventario-page">
      <Header title="Ficha" voltar={true} navigateTo="/" />
      <main>
        <h1 className="home-title">Inventário</h1>
        {itensInventarioLocal.length > 0 && (
          <div className="blue-content" id="inventario-content" style={{paddingBottom: 40}}>
            {itensInventarioLocal.map((item, index) => (
              <ItemSection
                lixeiraInline={true}
                ultimoItem={index === itensInventarioLocal.length - 1}
                key={item.id}
                onAddClick={adicionarItem}
                onDeleteClick={() => removerItem(index)}
              >
                <div className="input-inventario-container">
                  <div>
                    <Diamante />
                    <input
                      type="text"
                      className="input-inventario"
                      value={item.nome}
                      onChange={(e) => atualizarNome(item.id, e.target.value)}
                    />
                  </div>
                  <StatusValor
                    name="quantidadeItem"
                    heightInput="40px"
                    setas
                    value={item.quantidade}
                    onChange={(v) => atualizarQuantidade(item.id, v)}
                  />
                </div>
              </ItemSection>
            ))}
          </div>
        )}
        {itensInventarioLocal.length === 0 && (
          <div className="blue-content" id="inventario-content">
            <Adicionar display={true} onAddClick={adicionarItem} sozinho />
          </div>
        )}
      </main>
      {popUpAviso && (
        <PopUp
          title={TITULO_AVISO}
          message={MSG_AVISO}
          type="info"
          buttonContent="Salvar"
          srcImg={dado_10}
          onClick={salvarInventario}
          allowMinimize
          minimizedMessage="Não perca nada"
        />
      )}
      {popUpSucesso && (
        <PopUp
          title="Sucesso!"
          message="As informações foram salvas com successo!"
          type={"success"}
          srcImg={dado_20}
          closeInterval={5000}
          onTimeout={() => setExibirSucesso(false)}
        />
      )}
    </div>
  );
}

export default InventarioPage;
