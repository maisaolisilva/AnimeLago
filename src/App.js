//Como o banner não possui um arquivo chamado "index.js" é necessário escrever o nome do arquivo a ser renderizado, fazendo com que fique Banner/Banner
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Genero from './componentes/Genero';

function App() {

  const generos = [
    {
      nome:'Shonen',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Shoujo',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Seinen',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Josei',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Ecchi',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Harem',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Isekai',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },
    {
      nome:'Mecha',
      corPrimaria:'#7469B6',
      corSecundaria: '#E4E0F8'
    }
  ]

  const [animes, setAnimes] = useState([]);
  const aoNovoAnimeAdicionado = anime => {
    console.log(anime);
    //set cria um array novo, pega a lista antiga e faz o expalhamento e acrescenta o novo anime
    setAnimes([...animes, anime])
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
      />)}
    </div>
  );
}

export default App;
