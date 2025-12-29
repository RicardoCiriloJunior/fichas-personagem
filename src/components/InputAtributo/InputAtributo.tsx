import "./InputAtributo.css"

type Props = {
    name: string
    reference?: React.RefObject<HTMLInputElement | null>;
}
function InputAtributo({ name, reference }: Props) {
    return ( 
        <input type="number" className="input-atributo" name={name} ref={reference} />
     );
}

export default InputAtributo;