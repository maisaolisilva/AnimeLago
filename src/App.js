//Como o banner não possui um arquivo chamado "index.js" é necessário escrever o nome do arquivo a ser renderizado, fazendo com que fique Banner/Banner
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
