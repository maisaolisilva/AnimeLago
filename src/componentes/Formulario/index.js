import './Formulario.css';
//automaticamente ele acessa o index.js da pasta CampoTexto
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) => {

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

    const [nome, setNome] = useState('');
    const [diretor, setDiretor] = useState(''); 
    const [estudio, setEstudio] = useState(''); 
    const [observacoes, setObservacoes] = useState(''); 
    const [imagem, setImagem] = useState(''); 
    const [genero, setGenero] = useState('Shonen'); 

    const aoSalvar = (event) => {

        event.preventDefault();
        //mesma coisa de um objeto criado de maneira explicita:
        //nome: nome,
        //diretor: diretor
        props.aoAnimeCadastrado({
            nome,
            diretor,
            estudio,
            observacoes,
            imagem,
            genero,
        });
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do anime</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={setNome}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Diretor" 
                    placeholder="Digite o nome do diretor"
                    valor={diretor}
                    aoAlterado={setDiretor}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Estúdio" 
                    placeholder="Digite o nome do estúdio"
                    valor={estudio}
                    aoAlterado={setEstudio}
                    />
                <CampoTexto 
                    label="Observações" 
                    placeholder="Digite as observações em relação ao anime"
                    valor={observacoes}
                    aoAlterado={setObservacoes}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={setImagem}    
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Gêneros' 
                    itens={generos} 
                    valor={genero}
                    aoAlterado={setGenero}
                    />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;