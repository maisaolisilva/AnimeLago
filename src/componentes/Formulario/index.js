import './Formulario.css';
//automaticamente ele acessa o index.js da pasta CampoTexto
import CampoTexto from '../CampoTexto';
const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do anime</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Diretor" placeholder="Digite o nome do diretor"/>
                <CampoTexto label="Estúdio" placeholder="Digite o nome do estúdio"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario;