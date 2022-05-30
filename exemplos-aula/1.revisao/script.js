//retomando .map() e .filter()

const alunasOn17 = [
  {
    nome: "Lara Oliveira",
    idade: 28,
    cidade: "Belém",
  },
  {
    nome: "Nicole Dias",
    idade: 29,
    cidade: "Blumenal",
  },
  {
    nome: "Mayra Pereira",
    idade: 30,
    cidade: "Guarujá",
  },
  {
    nome: "emanueli Martins",
    idade: 24,
    cidade: "Praia Grande",
  },
];

// filtrar apenas as alunas que sejam maiores de 25 anos
//alunasOn17.filter((elementoArray) => elementoArray.idade > 25);
/*const alunasMaiores25 = alunasOn17.filter( elementoArray => elementoArray.idade > 25);
console.log(alunasMaiores25)*/

// mapear cada aluna, adicionando 1 ano de idade para cada uma delas
const alunasOn17Idade2023 = alunasOn17.map(item => item.idade+1);
console.log(alunasOn17Idade2023);
