import './Genero.css';
import Anime from '../Anime';

const Genero = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    //O operador && funciona como o operador ternário  props.animes.length > 0 ? <section> : ' '
    // Se não tiver nenhum card no gênero, o espaço dele não aparece
    return (
        props.animes.length > 0 && <section className='genero' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='animes'>
                {props.animes.map(anime => <Anime 
                    nome={anime.nome} 
                    diretor={anime.diretor}
                    estudio={anime.estudio}
                    observacoes={anime.observacoes}
                    imagem={anime.imagem}
                />)}
            </div>
        </section>
    )
}

export default Genero;
