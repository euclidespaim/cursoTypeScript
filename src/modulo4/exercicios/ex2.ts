type Aluno = {
  nome: string;
  matricula: number;
  ativo?: boolean
}

const fulano: Aluno = {
  nome: "Fulano de Tal",
  matricula: 1234,
  ativo: true
}

const ciclano: Aluno = {
  nome: "Ciclano de Tal",
  matricula: 4321,
}

console.table(fulano)
console.table(ciclano)