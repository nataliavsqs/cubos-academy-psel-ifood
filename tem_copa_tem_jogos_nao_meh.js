
function solucao(ano) {
	const resto =(ano - 2018)%4
    
    if  ( resto ==0) {
        console.log("COPA")
}else if ( resto == 2){
         console.log("JOGOS")
    } else{
        console.log("MEH")
    }
}