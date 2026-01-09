import './InventarioPage.css';
import Header from '../Header/Header';
import ItemSection from '../ItemSection/ItemSection';
import { Diamante } from '../Header/Header';
import StatusValor from '../StatusValor/StatusValor';
import { useState, useEffect } from 'react';
import { Adicionar } from '../ItemSection/ItemSection';
function InventarioPage() {
    const [itensInventario, setItensInventario] = useState([
        { nome: 'Corda', quantidade: 2 },
        { nome: 'Tocha', quantidade: 5 },
        { nome: 'Pederneira', quantidade: 1 },
    ]);

    function adicionarItem() {
        setItensInventario([...itensInventario, { nome: '', quantidade: 0 }]);
    }
    function removerItem(indexToRemove: number) {
        const novosItens = itensInventario.filter((_, index) => index !== indexToRemove);
        setItensInventario(novosItens);
    }

    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        console.log(itensInventario);
    }, [itensInventario]);

    return ( 
        <div className="home-container" id="inventario-page">
            <Header title="Ficha" voltar={true} navigateTo='/'/>
            <main>
                <h1 className='home-title'>Inventário</h1>
                <div className="blue-content" id="inventario-content">
                    {itensInventario.length > 0 ? itensInventario.map((item, index) => (
                        <ItemSection lixeiraInline={true} ultimoItem={index === itensInventario.length - 1} key={index} onAddClick={adicionarItem} onDeleteClick={() => removerItem(index)}>
                        <div className="input-inventario-container">
                            <div>
                                <Diamante />
                                <input type="text" className="input-inventario" value={item.nome}/>
                            </div>
                            <StatusValor name="quantidadeItem" heightInput='40px' setas value={item.quantidade}/>
                        </div>
                    </ItemSection>
                    )) : <Adicionar display={true} onAddClick={adicionarItem} sozinho/>}

                </div>
            </main>
        </div>
     );
}

export default InventarioPage;