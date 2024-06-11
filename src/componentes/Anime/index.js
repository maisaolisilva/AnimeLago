import './anime.css';
import { IoMdCloseCircle} from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Anime = ({nome, imagem, diretor, estudio, corDeFundo, aoDeletar, id, favorito, aoFavoritar}) => {
    //Objeto com as propriedades do componente de coração (heart)
    const propsFavorito = {
        size: 25,
        onClick: () => aoFavoritar(id),
    }

    //Para o componente de coração foi necessário utilizar CONDITIONAL RENDERING com o operador ternário

    return (<div className='anime'>
        <IoMdCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{diretor}</h5>
            <h5>{estudio}</h5>
            <div className='favoritar'>
                {favorito 
                    ? <FaHeart {...propsFavorito} color='#ff0000' /> 
                    : <FaRegHeart {...propsFavorito} />
                }
            </div>
        </div>
    </div>
        
    )
}

export default Anime;