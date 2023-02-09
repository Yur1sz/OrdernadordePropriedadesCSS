import readlinesync from 'readline-sync'
import ck from 'chalk';



const valores = [];
let input = "";

//laço
console.log(ck.hex('#FF69B4')(" \n ----------   PROGRAMA de PROPRIEDADES CSS ---------- "))

while(input != 'sair') {

    valores.push(input)
    input = readlinesync.question(ck.hex("#ff6f9c")(" \nDigite  as propriedades de CSS a serem ordenadas : ")).toLocaleLowerCase()

}

//mostra o conteudo do array
console.log(ck.hex("#FF69B4")(" \n Aqui estão as propriedades que voce digitou: "))
console.log(ck.hex("#ff6f9c")(valores.sort().join("\n")));
