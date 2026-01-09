import { useNavigate } from "react-router-dom";
import "./OutrasSecoesBotao.css";

type Props = {
  label: string;
  icon: React.ReactNode;
};
function OutrasSecoesBotao({ label, icon }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    const endpoint = removerAcentos(label.toLowerCase());
    navigate(endpoint);
  };

  function removerAcentos(texto: string) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  return (
    <div className="outras-secoes-botao" onClick={handleClick}>
      <div className="icon-container">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

export default OutrasSecoesBotao;
