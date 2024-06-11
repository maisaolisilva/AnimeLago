//Como o banner não possui um arquivo chamado "index.js" é necessário escrever o nome do arquivo a ser renderizado, fazendo com que fique Banner/Banner
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Genero from './componentes/Genero';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [generos, setGenero] = useState([
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

  //Foi colocado alguns animes prévios na lista para aparecerem na página assim que recarregada
  const [animes, setAnimes] = useState([
    {
      nome: 'Gintama',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/6/65/Gintamavol01capa.jpg',
      diretor: 'Shinji Takamatsu (ep. 1–105) e Yoichi Fujita', 
      estudio: 'Sunrise',
      id: uuidv4(),
      genero: 'Shonen', 
    },
    {
      nome: 'Re: Zero',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/3/3c/Re-Zero_kara_Hajimeru_Isekai_Seikatsu_light_novel_volume_1_cover.jpg',
      diretor: 'Masaharu Watanabe', 
      estudio: 'White Fox',
      id: uuidv4(),
      genero: 'Seinen', 
    },
    {
      nome: 'InuYasha',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c0/InuYasha_vol._01.jpg',
      diretor: 'Masashi Ikeda e Yasunao Aoki', 
      estudio: 'Sunrise',
      id: uuidv4(),
      genero: 'Shoujo', 
    },
    {
      nome: 'Fullmetal Alchemist: Brotherhood',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/9/9f/Fullmetal_Alchemist.jpg',
      diretor: 'Yasuhiro Irie', 
      estudio: 'Bones',
      id: uuidv4(),
      genero: 'Shonen', 
    },
    {
      nome: 'Death Note',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c0/Death_Note_vol._01.jpg',
      diretor: 'Tetsurō Araki', 
      estudio: 'Madhouse',
      id: uuidv4(),
      genero: 'Seinen', 
    },
    {
      nome: 'Haikyu!!',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/7/73/Haiky%C5%AB%21%21_vol_5.jpg',
      diretor: 'Susumu Mitsunaka', 
      estudio: 'Production I.G',
      id: uuidv4(),
      genero: 'Shonen', 
    },
  ]);
  const aoNovoAnimeAdicionado = anime => {
    //set cria um array novo, pega a lista antiga e faz o expalhamento e acrescenta o novo anime
    setAnimes([...animes, anime])
    
  }

  //função para deletar um card de um anime
  function deletarAnime(id) {
    setAnimes(animes.filter(anime => anime.id !== id))
  }


  //função para mudar a cor do gênero através do input de cor 
  function mudarCorDoGenero(cor, id) {
    setGenero(generos.map(genero => {
      if(genero.id === id) {
        genero.corPrimaria = cor;
      }
      return genero;
    }))
  }

  //Função para criar um novo gênero
  function cadastrarGenero(novoGenero){
    setGenero([...generos, novoGenero])
  }

  function resolverFavorito(id){
    setAnimes(animes.map(anime => {
      if(anime.id === id) {
        anime.favorito = !anime.favorito;
      }
      return anime;
    })
    )
  }

  
  return (
    <div className="App">
      <Banner />
      <Formulario
        generos={generos.map(genero => genero.nome)} 
        aoAnimeCadastrado={anime => aoNovoAnimeAdicionado(anime)}
        cadastrarGenero={cadastrarGenero}
      />

      {generos.map(genero => <Genero 
        nome={genero.nome} 
        key={genero.nome} 
        corPrimaria={genero.corPrimaria} 
        corSecundaria={genero.corSecundaria}
        animes={animes.filter(anime => anime.genero === genero.nome)}
        aoDeletar={deletarAnime}
        mudarCor={mudarCorDoGenero} 
        id={genero.id}
        aoFavoritar={resolverFavorito}

        
      />)}

      <Rodape />
    </div>
  );
}

export default App;
