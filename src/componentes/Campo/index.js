
import './Campo.css';
//o input será obrigatório caso a propriedade obrigatório=true
const Campo = ({ type = 'text', label, placeholder, valor, onChange, obrigatorio = false }) => {

    return (
        <div className={`campo campo-${type}`}> 
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={onChange(event => event.target.value)} 
                required={obrigatorio} 
                placeholder={`${placeholder}...`}/>
        </div>
    )
}
export default Campo;