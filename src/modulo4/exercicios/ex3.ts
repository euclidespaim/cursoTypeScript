interface Curso {
  readonly codigo: number;
  nome: string;
  cargaHoraria: number;
}

const historia: Curso = {
  codigo: 123,
  nome: "Licenciatura em História",
  cargaHoraria: 120
}

historia.cargaHoraria = 240;
//historia.codigo = 321

console.table(historia)