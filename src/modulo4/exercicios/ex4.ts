type Enderecos = {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

type PessoaComEndereco = {
  nome: string;
  idade: number;
  endereco: Enderecos;
}

const professor: PessoaComEndereco = {
  nome: "Euclides",
  'idade': 45,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
  }
}

console.table(professor);
