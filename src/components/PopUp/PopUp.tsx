import { useState } from "react";
import "./PopUp.css";
import { FaCompressAlt } from "react-icons/fa";

type Props = {
  srcImg: string;
  type: "error" | "info" | "success";
  title: string;
  message: string;
  onClick?: () => void;
  buttonContent?: string;
  closeInterval?: number;
  onTimeout?: () => void;
  minimizedMessage?: string;
  allowMinimize?: boolean;
};
function PopUp({
  srcImg,
  type,
  title,
  message,
  onClick,
  buttonContent,
  closeInterval,
  onTimeout,
  minimizedMessage,
  allowMinimize
}: Props) {
  const [display, setDisplay] = useState(true);
  const [minimized, setMinimized] = useState(false);
  if (closeInterval) {
    setTimeout(() => {
      if (onClick) onClick();

      if (onTimeout) onTimeout();

      setDisplay(false);
    }, closeInterval);
  }
  return !minimized ? (
    <div
      className="popup-container"
      style={{ display: display ? "block" : "none" }}
    >
      <div className={"popup-header " + type}>
        <img src={srcImg} alt={type} />
        {allowMinimize && (
          <FaCompressAlt
            className="popup-compress-icon"
            onClick={() => setMinimized(!minimized)}
          />
        )}
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
  ) : (
    <div
      className="popup-container minimized"
      style={{ display: display ? "block" : "none" }}
    >
      <div className={"popup-header " + type}>
        <img src={srcImg} alt={type} />
      </div>
      <div className="popup-content">
        <p className="popup-message">{minimizedMessage}</p>
        <button className={"popup-button " + type} onClick={onClick}>
          {buttonContent}
        </button>
        <FaCompressAlt
          className="popup-compress-icon"
          id="compress-icon-minimized"
          onClick={() => setMinimized(!minimized)}
        />
      </div>
    </div>
  );
}

export default PopUp;
