import './InputLogin.css'

type Props = {
    classname?: string;
    placeholder?: string;
    label: string;
    type: string;
    idInput: string;
    name: string;
    reference?: React.RefObject<HTMLInputElement | null>;
}

function InputLogin({classname = "", placeholder, label, type, idInput, reference, name}: Props) {
    return (
        <div className={"input " + classname}>
            <label htmlFor={idInput}>{label}</label>
            <input
              type={type}
              className={classname}
              placeholder={placeholder}
              id={idInput}
              ref={reference}
              name={name}
            />
          </div>
    )
}

export default InputLogin;