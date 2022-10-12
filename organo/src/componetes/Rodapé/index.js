import './Rodapé.css'

const Rodapé = () => {
    return (
        <footer className='rodapé'>
            <div className='rs'>
                <img src='/imagens/fb.png' alt='Logo da marca Organo.'/>
                <img src='/imagens/tw.png' alt='Logo da marca Organo.'/>
                <img src='/imagens/ig.png' alt='Logo da marca Organo.'/>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo da marca Organo.'/>
            </div>
            <div className='des'>
                <h4>Desenvolvido por Alura</h4>
            </div>
        </footer>
    )
}

export default Rodapé