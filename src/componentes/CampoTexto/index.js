
import './CampoTexto.css';
//o input será obrigatório caso a propriedade obrigatório=true
const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className='campo-texto'> 
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

export default CampoTexto;