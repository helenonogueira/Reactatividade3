Componentes com Fragments
📚 O que foi aprendido na aula
Nesta aula, exploramos conceitos importantes de React:

Fragments: Uma forma de agrupar elementos sem adicionar nós extras ao DOM

Destructuring: Técnica para extrair propriedades de objetos de forma mais limpa

Renderização condicional: Como exibir diferentes conteúdos baseados em condições

Mapeamento de arrays: Como transformar arrays de dados em componentes React

🎯 O que o desafio propôs
O exercício solicitou a criação de um componente Aluno que:

Exibisse informações de estudantes (nome, email, curso, média e status)

Utilizasse Fragments para evitar divs desnecessárias

Implementasse lógica para determinar aprovação (média ≥ 7)

Renderizasse múltiplos alunos a partir de um array

🖥️ Como funcionou o método utilizado
Estrutura do componente Aluno
jsx
<>
  <p>Nome: {nome}</p>
  <p>Email: {email}</p>
  <p>Curso: {curso}</p>
  <p>Média: {media}</p>
  <p>Status: {status}</p>
  <p>=======================</p>
</>
Lógica de status
jsx
const status = media >= 7 ? 'APROVADO(A)' : 'REPROVADO(A)';
Renderização dos alunos
jsx
Copy
{alunos.map((aluno, index) => 
  <Aluno 
    key={index}
    nome={aluno.nome} 
    email={aluno.email} 
    curso={aluno.curso}
    media={aluno.media}
  />
)}
📸 Resultado
A saída do programa mostra:

![aprovadoreprovado](https://github.com/user-attachments/assets/d700a617-c6c0-4c7f-8779-48fb2d34d491)


✅ Principais aprendizados
Uso prático de Fragments para organização do código

Como a desestruturação simplifica o acesso às props

Implementação de lógica condicional diretamente no JSX

Boa prática de usar key em listas mapeadas
