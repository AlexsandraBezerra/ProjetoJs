// Escopo  o bloco de escopo é definido pela regiao  ao qual variaveis  e outros  dados sao visiveis 

let nvnumero = 1;

if (nvnumero == 1){
    let texto = ("olá");
    // acessando a variavel nvnumero 
    nvnumero = 2
}

//erro de escopo 
//console.log(texto)

let vallor = 12;

let umafucao = function nvteste(params) {
    console.log(vallor);
    
}
if (vallor == 12 ) {
    umafucao();
    console.log(vallor);
}
// escopo global uma variavel declara fora da funcao , torna se global e todos  os scripts  e funçoes   em uma pagina na web  podem acessa -la


let  varGlobal  = 1;
function  funcaoGlobal(params) {
    let  varFuncao = varGlobal + 1 ;

    function funcaoLocal(params) {
        let varfuncLocal = varFuncao + varGlobal;
            console.log(varfuncLocal);
        
    }
    
}

// escopo de bloco  variaveis  declaradas dentro de um local cercado por {}


