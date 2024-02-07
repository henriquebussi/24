// var prompt = require("prompt-sync")()

// console.log("Hello World");

// console.log("A Soma é: ", 10 + 2);

// console.log("a subtração é ", 10 - 2);

// console.log("multiplicação", 10 * 2);

// console.log("a divisão é: ", 10 / 2 );

// console.log(`Minha Idade é ${20}`);

// var idade = 27;

// console.log(`Minha Idade é: ${idade}`);

// var nome = "guilherme";
// console.log('meu nome é', nome);

// let nomelet = "Gui"
// nomelet = "Devito"
// console.log("meu nome é", nomelet);

// const nomeconst = "devito"

// console.log(10 + 11.331213)

// const dormindo = true
// const sonhando = false
// const sonhandoString = 'false'

// console.log(dormindo);
// console.log(sonhando);
// console.log(sonhandoString);


// let caixa = 1000;
// caixa = caixa + 10
// console.log("As 16:30, o valor da caixa é: ", caixa);
// caixa += 500;
// caixa -= 100;
// console.log("As 16:32, o valor da caixa é: ", caixa);

// console.log("10" == 10);
// console.log("10" === 10);

// function mostrarmeunome() {
//     console.log("Devito");
// }

// function mostrarmeunomecomparametro(japa) {
//     console.log(japa);
    
// }

// mostrarmeunomecomparametro("Tomas")

// function soma(n1, n2, n3, n4){
//     let soma1 = n1+n2+n3+n4
//     console.log(soma1);
// }
// soma(10, 10, 10, 10)


// function media(nota1, nota2, nota3, nota4){
//     let media1 = nota1 + nota2 + nota3 + nota4 
//     let media2 = media1/4
//     if (media2 < 5){
//         console.log("Reprovado");
//     } else if (media2 === 10){
//         console.log("melhor aluno");
//     }else{
//         console.log("Aprovado");
//     }

// }

// var not1 = parseFloat(prompt("Qual foi a nota: "));
// var not2 = parseFloat(prompt("Qual foi a nota: "));
// var not3 = parseFloat(prompt("Qual foi a nota: "));
// var not4 = parseFloat(prompt("Qual foi a nota: "));


// media(not1, not2, not3, not4)

const japa  = ["feio", "chines", "Inteligente"]

console.log(japa);
console.log(japa.length);
console.log(japa[2]);

for (let i of japa){
    console.log(i);
}

// push adiciona um elemento no final do array

const  alunos = ["ferrari", "henri", "jhuan"]

alunos.push("JEOVA(EU)")

console.log(alunos);

// pop remove um elemento no do array

alunos.pop();

console.log(alunos);

// reverse 
alunos.reverse()
console.log(alunos);


// remove o indice desejado do array
alunos.splice()
console.log(alunos);



// foreach percorre a array com uma função oculta
alunos.forEach((item, index) => console.log(item, index))

const alunoscopia = alunos.map((alunos) => alunos)

console.log(alunoscopia);
console.log(alunos);