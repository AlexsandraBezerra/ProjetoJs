console.log("Olá Mundo");
// Variaveis - é usado quando quero atribuir um numero ou caracter 
/* var - Declara uma variavel podendo atribuir um valor junto a sua criação
Let - declara a variavel com escopo de bloco 
const - variavel para leitura , não será possivel alterar a const 
Java script tem alguns tipode de dados - number,strig, boolean, array,function,objetc,null e undefild e simbow.
*/
var number0 = (10);
//console.log (number0);
// numero maximo e minimo
//console.log(Number.MAX_VALUE);
//console.log(Number.MIN_VALUE);

// caracter especial- utilizamos a barra invertida 
//concatenar  strigg  - juntar caracteres
let moo =  "Irei fazer arroz"
let Moo = "com feijao e batata"

// console.log ( moo + Moo);
//  Outra forma é usar String de adiçao  é - .concat  

//Comparaçao booleano

let Comparaçao = 1 == 1;
let nacomparaçao = "walter"== "walter";

//console.log (nacomparaçao);
/* ==  igual
===  valor, tipo , iguais 
!=  Valor diferente 
!== valor e tipo diferente 
<,<= menor ou menor igual a 
>,>= maior ou maior igual a 
& (E) logico retorna verdadeiro 
||  (ou) retorna se apenas 1 for verdadeiro 
! (nao) ele inverte o boleando a sua esquerda 
*/

// array (vetor) é uma lista ou coleçao de dados que pode ser acessada por indice 
// para criar um vetor, basta criar uma variavel vazia e atribuir [ ] a ela .


/* objeto : e uma tipo de dado composto pelo outros tipos . da pra inserir mais informaçoes de uma variavel */

let lojaNova = {
   mesa : 2,
   caderno : 4,
   estojo : 6,
   nome : "Alexsandra", 
   celular :  4, 
};

lojaNova.lapis = 20;
lojaNova["borracha"] = 30;
//console.log(lojaNova);

// funçao - é utilizadas para criarmos uma sequencia de operaçoes para serem executadas

function faculdade() {
    console.log("ola mundo ");
    console.log('Te amo walter ');
    console.log("Meu mundo é voce");
 }
 let somar =  function Wa(valor1,valor2) {
    let resultaado = valor1 + valor2;
   return(resultaado);  
 }

 let resultaado = somar(5,3);
 //console.log(resultaado);
 //console.log(somar(10,20));

 function x(abacaxi,peck) {
    let somado = abacaxi * 2;
    let somado2 = peck *2; 
    return(somado);
 }
 let a = x(resultaado,8);
//console.log(a);

//Exercicios

let apoio = {
   apoio2 : {
       vetor : [1,2,{valorr : 55}]
   }

};

console.log(apoio["apoio2"]["vetor"][2].valorr);


// 2 exercicio 


