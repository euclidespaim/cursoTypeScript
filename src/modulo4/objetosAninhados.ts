type Endereco = {
  rua: string;
  cidade: string;
};

type Empresa = {
  nome: string;
  endereco: Endereco;
};

const ifc: Empresa = {
  nome: "Instituto Federal",
  endereco: {
    rua: "Rua Principal",
    cidade: "Itajaí"
  }
};