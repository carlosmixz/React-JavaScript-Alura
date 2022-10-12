import './Formulario.css';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botão from '../Botão';
import { useState } from 'react';

function Formulario(props) {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            Cargo,
            Imagem,
            Time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    const [nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    holder="Digite seu nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    holder="Digite seu cargo..."
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    holder="Digite o endereço da imagem..."
                    valor={Imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={props.times}
                    obrigatorio={true}

                    valor={Time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botão>Criar Card</Botão>
            </form>
        </section>
    )
}

export default Formulario