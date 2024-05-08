import './anime.css';

const Anime = ({nome, imagem, diretor, estudio, corDeFundo}) => {
    return (<div className='anime'>
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