import "./InventarioPage.css";
import Header from "../Header/Header";
import ItemSection from "../ItemSection/ItemSection";
import { Diamante } from "../Header/Header";
import StatusValor from "../StatusValor/StatusValor";
import { useState, useEffect } from "react";
import { Adicionar } from "../ItemSection/ItemSection";
function InventarioPage() {
  const [itensInventario, setItensInventario] = useState([
    { id: crypto.randomUUID(), nome: "Corda", quantidade: 2 },
    { id: crypto.randomUUID(), nome: "Tocha", quantidade: 5 },
    { id: crypto.randomUUID(), nome: "Pederneira", quantidade: 1 },
  ]);

  function adicionarItem() {
    setItensInventario([
      ...itensInventario,
      { id: crypto.randomUUID(), nome: "", quantidade: 0 },
    ]);
  }
  function removerItem(indexToRemove: number) {
    const novosItens = itensInventario.filter(
      (_, index) => index !== indexToRemove
    );
    setItensInventario(novosItens);
  }
  function atualizarNome(id: string, nome: string) {
    setItensInventario((prev) =>
      prev.map((item) => (item.id === id ? { ...item, nome } : item))
    );
  }
  function atualizarQuantidade(id: string, quantidade: number) {
    setItensInventario((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantidade } : item))
    );
  }

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    console.log(itensInventario);
  }, [itensInventario]);

  return (
    <div className="home-container" id="inventario-page">
      <Header title="Ficha" voltar={true} navigateTo="/" />
      <main>
        <h1 className="home-title">Inventário</h1>
        <div className="blue-content" id="inventario-content">
          {itensInventario.length > 0 ? (
            itensInventario.map((item, index) => (
              <ItemSection
                lixeiraInline={true}
                ultimoItem={index === itensInventario.length - 1}
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
            ))
          ) : (
            <Adicionar display={true} onAddClick={adicionarItem} sozinho />
          )}
        </div>
      </main>
    </div>
  );
}

export default InventarioPage;
