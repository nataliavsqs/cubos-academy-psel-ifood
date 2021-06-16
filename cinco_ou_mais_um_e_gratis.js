  
function solucao(precos) {
    precos.sort((a, b) => a-b);
     
     
     if (precos.length >= 5){ 
         precos.splice(0,1);
 }
     let total = 0;
     for(let i = 0; i< precos.length; i++){
         total = total + precos[i];
     }
     console.log(total)
 
 } 