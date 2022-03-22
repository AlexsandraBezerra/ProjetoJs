 
 let alunos = [
     {
         nome : "Walter",
         nota : 10
     },
     {
         nome : "ingrid",
         nota : 10
     },
     {
         nome : "heitor",
         nota :7
     },
     {
         nome : "Walter Junior",
         nota : 6
     },
     {
         nome : "Alexsandra",
         nota : 4 
     }
    ]
   
    for (let x = 0; x  < alunos.length; x++){
       if (alunos[x].nota > 5){
          // console.log(`${ alunos[x].nome}: passou `);
       }
    }
    // ou 
    for ( let aluno  of alunos){
        if (aluno.nota > 2){
            console.log(`${aluno.nome}  :passou`);
        }
    }

    