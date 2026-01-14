import './PopUp.css'

type Props = {
  srcImg: string;
  type: "error" | "info" | "success";
  title: string;
  message: string;
  onClick?: () => void;
  buttonContent?: string;
};
function PopUp({
  srcImg,
  type,
  title,
  message,
  onClick,
  buttonContent,
}: Props) {
  return (
    <div className="popup-container">
      <div className={"popup-header " + type}><img src={srcImg} alt={type} /></div>
      <div className="popup-content">
        <h2 className="popup-title">{title}</h2>
        <p className="popup-message">{message}</p>
        {type !== "success" && (
          <button className={"popup-button " + type} onClick={onClick}>
            {buttonContent}
          </button>
        )}
      </div>
    </div>
  );
}

export default PopUp;
