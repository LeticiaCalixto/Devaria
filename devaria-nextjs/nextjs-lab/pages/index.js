import { useState } from "react";
import Pessoa from "../components/Pessoa";
import comAutorizacao from '../hoc/comAutorizacao';

function Home() {

  const [idadeDouglas, setIdadeDouglas] = useState(17);
  const pessoas = [
    {
      nomePessoa: 'Cleiton',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Glau',
      idadePessoa: 25
    },
    {
      nomePessoa: 'Paulo',
      idadePessoa: 30
    }
  ]

  const incrementaIdadeDouglas = () => {
    setIdadeDouglas(++idadeDouglas);
  }

  return (
    <>
      <h1>Hello word {process.env.NEXT_PUBLIC_TESTE} </h1>
      <Pessoa nome='Douglas' idade={idadeDouglas} /> <br/>
      <Pessoa nome='Rafa' idade={32} /> <br />

      {pessoas.map(({ nomePessoa, idadePessoa }, index) => {
        return <Pessoa 
          nome={nomePessoa} 
          idade={idadePessoa}
          key={index}
        />
        })}

      <button onClick={incrementaIdadeDouglas}>Incrementa idade do Douglas</button>
    </>
  )
}


export default comAutorizacao(Home);