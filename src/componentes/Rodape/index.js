import rodape from "../../imagens/rodape.png";
import './rodape.css';
const Rodape = () => {
    return(
        <footer className="rodape">
            <img src={rodape} alt="Imagem do rodapé"/>
        </footer>
    )
}
export default Rodape;