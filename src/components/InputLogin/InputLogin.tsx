import "./InputLogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

type Props = {
  classname?: string;
  placeholder?: string;
  label: string;
  type: React.HTMLInputTypeAttribute | "textarea";
  idInput: string;
  name: string;
  reference?: React.RefObject<HTMLInputElement | null>;
  width?: string | number | undefined;
  label_align?: React.CSSProperties["textAlign"];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputLogin({
  classname = "",
  placeholder,
  label,
  type,
  idInput,
  reference,
  name,
  width = "100%",
  label_align = "left",
  value,
  onChange
}: Props) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return type === "password" ? (
    <div className={"input-container"} style={{width: width}}>
      <label htmlFor={idInput} style={{ textAlign: label_align }}>
        {label}
      </label>
      <div className="password-input-container">
        <input
          type={senhaVisivel ? "text" : "password"}
          className={"password-input input " + classname}
          placeholder={placeholder}
          id={idInput}
          ref={reference}
          name={name}
          value={value}
          onChange={onChange}
        />
        {senhaVisivel ? (
          <FaEye
            className="password-eye"
            onClick={() => setSenhaVisivel(!senhaVisivel)}
          />
        ) : (
          <FaEyeSlash
            className="password-eye"
            onClick={() => setSenhaVisivel(!senhaVisivel)}
          />
        )}
      </div>
    </div>
  ) : (
    <div className={"input-container "} style={{width: width}}>
      <label htmlFor={idInput} style={{ textAlign: label_align }}>
        {label}
      </label>
      <input
        type={type}
        className={"input " + classname}
        placeholder={placeholder}
        id={idInput}
        ref={reference}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputLogin;
