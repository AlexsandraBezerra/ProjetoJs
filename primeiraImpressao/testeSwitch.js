// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(carro, novoValor){
  switch(carro) {
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            console.log(novoValor);
            if(novoValor > 1){
                console.log(carro.roda);
                carro.rodas = novoValor;    
                console.log(novoValor);
            }
            else{
                console.log("aqui");
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            if (novoValor > 0 ){
                carro.portas = novoValor;
            } else {
                return "Minimo de portas precisa ser 1";
            }
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            if (novoValor == "cinza" || novoValor == "preto" ||novoValor == "vermelho"){
                carro.cor = novoValor;
            } else {
                return "Cor invalida";
            }
            break;
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        case "ano":
            if (novoValor == 2019){
                carro.estado = "novo";
            } else {
                carro.estado = "usado";
            }
            break;
        default:
            return "Propriedade invalida";
    }
    
            return "Alteracao concluida somente se foi possivel alterar um dado do objeto";
     
}

console.log(mudarPropriedade(1,1));

