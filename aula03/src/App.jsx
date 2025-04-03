import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  const alunos = [
    {nome: 'João', email: 'joao@gmail.com', curso: 'Sistemas para internet', media: 8.5},
    {nome: 'Maria', email: 'maria@gmail.com', curso: 'Sistemas para internet', media: 6.3},
    {nome: 'Jose', email: 'jose@gmail.com', curso: 'Sistemas para internet', media: 7.0}
  ];
  
  return (
    <div>
      {alunos.map((aluno, index) => 
        <Aluno 
          key={index}
          nome={aluno.nome} 
          email={aluno.email} 
          curso={aluno.curso}
          media={aluno.media}
        />
      )}
    </div>
  )
}

export default App