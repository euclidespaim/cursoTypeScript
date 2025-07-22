// 1. Variável unknown com string
let entrada: unknown = "TypeScript é legal";

// 2. Acessar o tamanho usando asserção
const tamanho = (entrada as string).length;
console.log(`Tamanho da string: ${tamanho}`);


function imprimirDetalhes(valor: unknown): void {
  if (typeof valor === "string") {
    console.log(`String: "${valor}" com ${valor.length} caracteres`);
  } else if (typeof valor === "number") {
    console.log(`Número: ${valor.toFixed(2)}`);
  } else {
    console.log("Tipo não suportado.");
  }
}

// Testes:
imprimirDetalhes("Amora");     // String
imprimirDetalhes(3.14159);     // Número
imprimirDetalhes(true);        // Tipo não suportado
