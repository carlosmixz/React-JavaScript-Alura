import './CampoTexto.css'

function CampoTexto(props) {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.holder} />
        </div>
    )
}

export default CampoTexto