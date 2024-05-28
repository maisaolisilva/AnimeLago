import './Formulario.css';
//automaticamente ele acessa o index.js da pasta CampoTexto
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [diretor, setDiretor] = useState(''); 
    const [estudio, setEstudio] = useState('');  
    const [imagem, setImagem] = useState(''); 
    const [genero, setGenero] = useState('Shonen');
    const [nomeGenero, setNomeGenero] = useState(''); 
    const [cor, setCor] = useState('');

    const aoSalvar = (event) => {

        event.preventDefault();

        //mesma coisa de um objeto criado de maneira explicita:
        //nome: nome,
        //diretor: diretor
        props.aoAnimeCadastrado({
            nome,
            diretor,
            estudio,
            imagem,
            genero,
            id: uuidv4(),
        });

        setNome('');
        setDiretor('');
        setEstudio('');
        setImagem('');
        setGenero('');
    }

    //Função que será realizada ao clicar no botão para criar um novo gênero
    function aoNovoGeneroAdicionado(event){
        event.preventDefault(); 
        props.cadastrarGenero({id: uuidv4(), nome: nomeGenero, corPrimaria: cor});
        setNomeGenero('');
        setCor('');
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
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={setImagem}    
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Gêneros' 
                    itens={props.generos} 
                    valor={genero}
                    aoAlterado={setGenero}
                    />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoNovoGeneroAdicionado}>
                <h2>Preencha os dados para adicionar um novo gênero</h2>
                <CampoTexto 
                    obrigatorio 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nomeGenero}
                    aoAlterado={setNomeGenero}
                />
                <CampoTexto 
                    obrigatorio 
                    label="Cor" 
                    placeholder="Digite a cor do gênero (#hexadecimal)"
                    valor={cor}
                    aoAlterado={setCor}
                />
                <Botao>Criar um novo gênero</Botao>
            </form>
        </section>
    )
}

export default Formulario;