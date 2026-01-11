  import "./StatusValor.css";
  import { FaCaretLeft } from "react-icons/fa6";
  import { FaCaretRight } from "react-icons/fa";

  type Props = {
    label?: string;
    directionLabel?: "left" | "right";
    name: string;
    classname?: string;
    heightInput?: string;
    setas?: boolean;
    value: number;
    onChange?: (value: number) => void;
  };

  function StatusValor({
    label,
    directionLabel = "left",
    name,
    classname,
    heightInput = "55px",
    setas = false,
    value,
    onChange
  }: Props) {
    const direction = directionLabel === "left" ? "row" : "row-reverse";
    const gap = setas ? "10px" : "20px";

    const handleCaretLeft = () => {
      onChange?.(value > 0 ? value - 1 : 0);
    };

    const handleCaretRight = () => {
      onChange?.(value + 1);
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
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value))}
        />
        {setas && <FaCaretRight size={36} className="seta-icon" onClick={handleCaretRight}/>}
      </div>
    );
  }

  export default StatusValor;
