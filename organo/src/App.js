import { useState } from 'react';
import Banner from './componetes/Banner';
import Formulario from './componetes/Formulario';
import Time from './componetes/Time';
import Rodapé from './componetes/Rodapé';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundária: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundária: '#E8f8ff',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#06D157',
      corSecundária: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundária: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundária: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundária: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundária: '#FFEEDF',
    }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundária={time.corSecundária}
        colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
      />)}

      <Rodapé />

    </>
  );
}

export default App;
