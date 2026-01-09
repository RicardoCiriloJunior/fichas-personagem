import "./ItemSection.css";
import lixeira from "../../assets/lixeira-icon.png";
import adicionar from "../../assets/adicionar-icon.png";

type Props = {
  children: React.ReactNode;
  lixeiraInline?: boolean;
  ultimoItem?: boolean;
  onAddClick?: () => void;
  onDeleteClick?: () => void;
};

function Lixeira({ onDeleteClick }: { onDeleteClick?: () => void }) {
  return (
    <div className="lixeira-div">
      <img src={lixeira} alt="Ícone de lixeira" onClick={onDeleteClick} />
    </div>
  );
}

export function Adicionar({display, onAddClick, sozinho}: {display: boolean, onAddClick?: () => void, sozinho?: boolean}) {
  return (
    <div className="adicionar-div" style={{display: display ? 'flex' : 'none', bottom: sozinho ? 'auto' : undefined, position: sozinho ? 'relative' : 'absolute', left: sozinho ? 'auto' : undefined, transform: sozinho ? 'none' : undefined}}>
      <img src={adicionar} alt="Ícone de adicionar" onClick={onAddClick} />
      <div></div>
    </div>
  );
}

function ItemSection({ children, lixeiraInline = false, ultimoItem = false, onAddClick, onDeleteClick }: Props) {
  return (
    <div className="item-section">
      {lixeiraInline ? (
        <div className="lixeira-inline">
          <div className="children-container">{children}</div>
          <Lixeira onDeleteClick={onDeleteClick} />
          <Adicionar display={ultimoItem} onAddClick={onAddClick}/>
        </div>
      ) : (
        <div>
          <Lixeira onDeleteClick={onDeleteClick} />
          {children}
          <Adicionar display={ultimoItem} />
        </div>
      )}
    </div>
  );
}

export default ItemSection;
