import diamante_icon from "../../assets/diamante-icon.png";
import rasgados_header from "../../assets/rasgados-header.png";
import { FaArrowLeft } from "react-icons/fa";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Diamante() {
  return <img src={diamante_icon} />;
}

function Voltar() {
  const navigate = useNavigate();
  return (
    <div className="header-voltar" onClick={() => navigate("/login")}>
      <FaArrowLeft size={29} />
      <p>Voltar</p>
    </div>
  );
}

type Props = {
  voltar?: boolean;
  title: string;
};

function Header({ voltar, title }: Props) {
  return (
    <header>
      <div className="header-content">
        {voltar ? <Voltar /> : <div className="header-voltar-vazio"></div>}
        <div className="header-title">
          <Diamante />
          <h1>{title}</h1>
          <Diamante />
        </div>
        <div className="header-voltar-vazio"></div>
      </div>
      <img src={rasgados_header} className="header-img" alt="" />
    </header>
  );
}

export default Header;
