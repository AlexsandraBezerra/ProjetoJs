//  breack Comando que utilizado para encerrar o loop

let num = 1;

while (num < 10) {
    //console.log(num )
    if (num == 6){
        break; 
    }
    num++;
}

 for (let numero of [1,2,3,4,5,6,7]){
     if (numero == 5 || numero == 7 ){
         continue;
     }
     console.log(numero);
 }


 