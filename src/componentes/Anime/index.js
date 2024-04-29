import './anime.css';

const Anime = ({nome, imagem, diretor, estudio, observacoes}) => {
    return (<div className='anime'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{diretor}</h5>
            <h5>{estudio}</h5>
            <h5>{observacoes}</h5>
        </div>
    </div>
        
    )
}

export default Anime;