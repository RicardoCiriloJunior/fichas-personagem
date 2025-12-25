import "./InputLogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

type Props = {
  classname?: string;
  placeholder?: string;
  label: string;
  type: string;
  idInput: string;
  name: string;
  reference?: React.RefObject<HTMLInputElement | null>;
};

function InputLogin({
  classname = "",
  placeholder,
  label,
  type,
  idInput,
  reference,
  name,
}: Props) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return type === "password" ? (
    <div className={"input-container"}>
      <label htmlFor={idInput}>{label}</label>
      <div className="password-input-container">
        <input
          type={senhaVisivel ? "text" : "password"}
          className={"password-input input " + classname}
          placeholder={placeholder}
          id={idInput}
          ref={reference}
          name={name}
        />
        {senhaVisivel ? (
          <FaEye className="password-eye" onClick={() => setSenhaVisivel(!senhaVisivel)} />
        ) : (
          <FaEyeSlash className="password-eye" onClick={() => setSenhaVisivel(!senhaVisivel)} />
        )}
      </div>
    </div>
  ) : (
    <div className={"input-container "}>
      <label htmlFor={idInput}>{label}</label>
      <input
        type={type}
        className={"input " + classname}
        placeholder={placeholder}
        id={idInput}
        ref={reference}
        name={name}
      />
    </div>
  );
}

export default InputLogin;
