import "./InputAtributo.css"

type Props = {
    name: string
    reference?: React.RefObject<HTMLInputElement | null>;
    value?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputAtributo({ name, reference, value, onChange }: Props) {
    return ( 
        <input type="number" className="input-atributo" name={name} ref={reference} value={value} onChange={onChange} />
     );
}

export default InputAtributo;