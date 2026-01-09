import "./StatusValor.css";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

type Props = {
  label?: string;
  directionLabel?: "left" | "right";
  name: string;
  classname?: string;
  heightInput?: string;
  setas?: boolean;
  value?: number;
};

function StatusValor({
  label,
  directionLabel = "left",
  name,
  classname,
  heightInput = "55px",
  setas = false,
  value
}: Props) {
  const direction = directionLabel === "left" ? "row" : "row-reverse";
  const gap = setas ? "10px" : "20px";
  const [valorInput, setValorInput] = useState(value || 0);

  const handleCaretLeft = () => {
    setValorInput((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleCaretRight = () => {
    setValorInput((prev) => prev + 1);
  };


  return (
    <div
      className={`status-valor ${classname}`}
      style={{ flexDirection: direction, gap: gap }}
    >
      {label && <label htmlFor="">{label}</label>}
      {setas && <FaCaretLeft size={36} className="seta-icon" onClick={handleCaretLeft}/>}
      <input
        type="number"
        name={name}
        className="status-valor-input"
        style={{ height: heightInput }}
        value={valorInput || ''}
        onChange={(e) => setValorInput(Number(e.target.value))}
      />
      {setas && <FaCaretRight size={36} className="seta-icon" onClick={handleCaretRight}/>}
    </div>
  );
}

export default StatusValor;
