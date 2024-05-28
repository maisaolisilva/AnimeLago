import './anime.css';
import { IoMdCloseCircle } from "react-icons/io";

const Anime = ({nome, imagem, diretor, estudio, corDeFundo, aoDeletar, id}) => {
    return (<div className='anime'>
        <IoMdCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{diretor}</h5>
            <h5>{estudio}</h5>
        </div>
    </div>
        
    )
}

export default Anime;