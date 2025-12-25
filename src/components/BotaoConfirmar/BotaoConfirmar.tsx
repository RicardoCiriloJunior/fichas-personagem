import "./BotaoConfirmar.css";

type Props = {
  className?: string;
  content: string;
  onClick?: () => void
};
function BotaoConfirmar({ className = "", content , onClick}: Props) {
  return (
    <button className={`botao-confirmar ${className}`} onClick={onClick}>{content}</button>
  );
}

export default BotaoConfirmar;
