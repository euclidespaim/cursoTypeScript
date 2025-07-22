//usamos o ? para indicar que o parâmetro é opcional
function apresentar(nome: string, idade?: number): string {
  return idade
    ? `Sou ${nome} e tenho ${idade} anos.`
    : `Sou ${nome}.`;
}

console.log(apresentar("João", 30)); // Sou João e tenho 30 anos.
console.log(apresentar("Maria")); // Sou Maria.
