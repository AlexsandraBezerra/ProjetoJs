/*function somarSubVetores(vetor){
    for (let i = 0; i < vetor.length; ){vetor.indice++;
         
       
   }*/

   
   
   
let vetor = [[1,2,3], [1,1,1], [0,2,3]];

//let vetorr = [1, 2, 3, 4, 5];

  let result = []

for (i = 0; i < vetor.length; i++){
    var soma1 = 0;
    for ( j = 0;  j< vetor.length; j++){
        soma1 = soma1 + vetor[i][j];
        //console.log(soma);
    }
    result[i] = soma1; 
}
console.log(result);

//function somarSubVetores(vetor) {
    let resultado = [];

    for (let indice = 0; indice < vetor.length; indice++){
         let  subVetor = vetor[indice];
         let soma = 0;

         for (let subIndice = 0; subIndice < subVetor.length; subIndice++){
             soma = soma + subVetor[subIndice]; 
         }
         resultado[indice] = soma; 
    }
     console.log(resultado)   
//}



