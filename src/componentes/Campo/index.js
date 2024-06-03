
import './Campo.css';
//o input será obrigatório caso a propriedade obrigatório=true
const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className={`campo campo-${type}`}> 
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={`${placeholder}...`}/>
        </div>
    )
}
export default Campo;