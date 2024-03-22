import './Formulario.css';
//automaticamente ele acessa o index.js da pasta CampoTexto
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
const Formulario = () => {

    const generos = [
        'Shonen',
        'shoujo',
        'Seinen',
        'Josei',
        'Ecchi',
        'Harem',
        'Isekai',
        'Mecha'

    ]
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do anime</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Diretor" placeholder="Digite o nome do diretor"/>
                <CampoTexto label="Estúdio" placeholder="Digite o nome do estúdio"/>
                <CampoTexto label="Observações" placeholder="Digite as observações em relação ao anime"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label='Gêneros' itens={generos} />
                <Botao nome="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario;