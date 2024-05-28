//Como o banner não possui um arquivo chamado "index.js" é necessário escrever o nome do arquivo a ser renderizado, fazendo com que fique Banner/Banner
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Genero from './componentes/Genero';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [generos, setTimes] = useState([
    {
      id: uuidv4(),
      nome:'Shonen',
      corPrimaria:'#57C278',
    },
    {
      id: uuidv4(),
      nome:'Shoujo',
      corPrimaria:'#82CFFA',
    },
    {
      id: uuidv4(),
      nome:'Seinen',
      corPrimaria:'#A6D157',
    },
    {
      id: uuidv4(),
      nome:'Josei',
      corPrimaria:'#E06B69',
    },
    {
      id: uuidv4(),
      nome:'Ecchi',
      corPrimaria:'#DB6EBF',
    },
    {
      id: uuidv4(),
      nome:'Harem',
      corPrimaria:'#FFBA05',
    },
    {
      id: uuidv4(),
      nome:'Isekai',
      corPrimaria:'#FF8A29',
    },
    {
      id: uuidv4(),
      nome:'Mecha',
      corPrimaria:'#7469B6',
    }
  ]);

  const [animes, setAnimes] = useState([]);
  const aoNovoAnimeAdicionado = anime => {
    //set cria um array novo, pega a lista antiga e faz o expalhamento e acrescenta o novo anime
    setAnimes([...animes, anime])
    console.log(anime);
  }

  //função para deletar um card de um anime
  function deletarAnime(id) {
    setAnimes(animes.filter(anime => anime.id !== id))
  }


  //função para mudar a cor do gênero através do input de cor 
  function mudarCorDoGenero(cor, id) {
    setTimes(generos.map(genero => {
      if(genero.id === id) {
        genero.corPrimaria = cor;
      }
      return genero;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario generos={generos.map(genero => genero.nome)} aoAnimeCadastrado={anime => aoNovoAnimeAdicionado(anime)}/>

      {generos.map(genero => <Genero 
        nome={genero.nome} 
        key={genero.nome} 
        corPrimaria={genero.corPrimaria} 
        corSecundaria={genero.corSecundaria}
        animes={animes.filter(anime => anime.genero === genero.nome)}
        aoDeletar={deletarAnime}
        mudarCor={mudarCorDoGenero} 
        id={genero.id} 
      />)}

      <Rodape />
    </div>
  );
}

export default App;
