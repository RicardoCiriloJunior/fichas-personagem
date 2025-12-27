import "./StatusValor.css";

type Props = {
  label: string;
  directionLabel?: "left" | "right";
  name: string;
};

function StatusValor({ label, directionLabel = "left", name }: Props) {
  const direction = directionLabel === "left" ? "row" : "row-reverse";
  return (
    <div className="status-valor" style={{ flexDirection: direction }}>
      <label htmlFor="">{label}</label>
      <input type="number" name={name} className="status-valor-input" />
    </div>
  );
}

export default StatusValor;
