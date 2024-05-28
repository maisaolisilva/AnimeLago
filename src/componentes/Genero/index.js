import './Genero.css';
import Anime from '../Anime';
import hexToRgba from 'hex-to-rgba';

const Genero = (props) => {
    const css = { backgroundColor: hexToRgba(props.corPrimaria, '0.5') }
    //O operador && funciona como o operador ternário  props.animes.length > 0 ? <section> : ' '
    // Se não tiver nenhum card no gênero, o espaço dele não aparece
    return (
        props.animes.length > 0 && <section className='genero' style={css}>
            <input value={props.corPrimaria} onChange={event => props.mudarCor(event.target.value, props.id)} type='color' className='input-cor' />
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='animes'>
                {props.animes.map(anime => {
                return <Anime
                    key={anime.nome} 
                    nome={anime.nome} 
                    diretor={anime.diretor}
                    estudio={anime.estudio}
                    observacoes={anime.observacoes}
                    imagem={anime.imagem}
                    corDeFundo={props.corPrimaria}
                    aoDeletar={props.aoDeletar}
                    id={anime.id}
                />}
                )}
            </div>
        </section>
    )
}

export default Genero;
