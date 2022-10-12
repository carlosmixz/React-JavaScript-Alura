import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundária }

    return (
        (props.colaboradores.length > 0) && <section style={css} className='time'>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.Cargo} imagem={colaborador.Imagem} corFundo={props.corPrimaria}/>)}
            </div>
        </section>
    )
}

export default Time