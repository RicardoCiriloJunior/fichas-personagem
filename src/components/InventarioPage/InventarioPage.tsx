import "./InventarioPage.css";
import Header from "../Header/Header";
import ItemSection from "../ItemSection/ItemSection";
import { Diamante } from "../Header/Header";
import StatusValor from "../StatusValor/StatusValor";
import { useState } from "react";
import { Adicionar } from "../ItemSection/ItemSection";
import { useAuth } from "../../auth/useAuth";
import type { Item } from "../../Util/Ficha";
function InventarioPage() {
  const { ficha, updateFicha } = useAuth();
  const [itensInventario, setItensInventario] = useState<Item[]>(
    ficha?.inventario || []
  );


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

  return (
    <div className="home-container" id="inventario-page">
      <Header title="Ficha" voltar={true} navigateTo="/" />
      <main>
        <h1 className="home-title">Inventário</h1>
        {itensInventario.length > 0 && (
          <div className="blue-content" id="inventario-content" style={{paddingBottom: 40}}>
            {itensInventario.map((item, index) => (
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
            ))}
          </div>
        )}
        {itensInventario.length === 0 && (
          <div className="blue-content" id="inventario-content">
            <Adicionar display={true} onAddClick={adicionarItem} sozinho />
          </div>
        )}
      </main>
    </div>
  );
}

export default InventarioPage;
