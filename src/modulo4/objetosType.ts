import promptSync from 'prompt-sync';
const prompt = promptSync();

type Pessoa = {
  nome: string;
  idade: number;
  profissao?: string; // opcional
};

const melissa: Pessoa = {
  nome: "Melissa",
  idade: 42
};

melissa.profissao = prompt("Digite a profissão de Melissa: ") ?? undefined;

console.table(melissa);