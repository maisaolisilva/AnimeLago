//Como o banner não possui um arquivo chamado "index.js" é necessário escrever o nome do arquivo a ser renderizado, fazendo com que fique Banner/Banner
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [animes, setAnimes] = useState([]);
  const aoNovoAnimeAdicionado = anime => {
    console.log(anime);
    //set cria um array novo, pega a lista antiga e faz o expalhamento e acrescenta o novo anime
    setAnimes([...animes, anime])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoAnimeCadastrado={anime => aoNovoAnimeAdicionado(anime)}/>
    </div>
  );
}

export default App;
