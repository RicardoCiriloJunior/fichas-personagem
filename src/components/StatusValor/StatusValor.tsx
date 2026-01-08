import "./StatusValor.css";

type Props = {
  label: string;
  directionLabel?: "left" | "right";
  name: string;
  classname?: string;
};

function StatusValor({ label, directionLabel = "left", name, classname }: Props) {
  const direction = directionLabel === "left" ? "row" : "row-reverse";
  return (
    <div className={`status-valor ${classname}`} style={{ flexDirection: direction }}>
      <label htmlFor="">{label}</label>
      <input type="number" name={name} className="status-valor-input" />
    </div>
  );
}

export default StatusValor;
