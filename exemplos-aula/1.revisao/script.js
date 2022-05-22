//retomando .map() e .filter()

const alunasOn17 = [
    {
        nome: "Lara Oliveira",
        idade: 28,
        cidade: "Belém"
    },
    {
        nome: "Nicolle Dias",
        idade: 29,
        cidade: "Blumenau"

    },
    {
        nome: "Mayra Pereira",
        idade: 30,
        cidade: "Guarujá"
    },
    {
        nome: "Emanueli Martins",
        idade: 24,
        cidade: "Praia Grande"
    },
];


//filtrar apenas as alunas que sejam maiores de 25 anos
alunasOn17.filter(banana => banana >25);

//mapear cada aluna, adicionando 1 ano de idade para cada uma delas
const alunasOn17idade2023 = alunasOn17.map(item => item.idade+1);

alunasOn17.map( (item, indiceDoItem) => console.log(indiceDoItem));