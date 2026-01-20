import { useState } from "react";
import "./PopUp.css";

type Props = {
  srcImg: string;
  type: "error" | "info" | "success";
  title: string;
  message: string;
  onClick?: () => void;
  buttonContent?: string;
  closeInterval?: number;
  onTimeout?: () => void;
};
function PopUp({
  srcImg,
  type,
  title,
  message,
  onClick,
  buttonContent,
  closeInterval,
  onTimeout
}: Props) {
  const [display, setDisplay] = useState(true);
  if (closeInterval) {
    setTimeout(() => {
      if (onClick) onClick();

      if (onTimeout) onTimeout();
      
      setDisplay(false);
    }, closeInterval);
  }
  return (
    <div className="popup-container" style={{display: display ? "block" : "none"}}>
      <div className={"popup-header " + type}>
        <img src={srcImg} alt={type} />
      </div>
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
