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

    const aoSalvar = (event) => {
        event.preventDefaul();
        console.log("Formulário fooi submetido");
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do anime</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Diretor" placeholder="Digite o nome do diretor"/>
                <CampoTexto obrigatorio={true} label="Estúdio" placeholder="Digite o nome do estúdio"/>
                <CampoTexto label="Observações" placeholder="Digite as observações em relação ao anime"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label='Gêneros' itens={generos} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;