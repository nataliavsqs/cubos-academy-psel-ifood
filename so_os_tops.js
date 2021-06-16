function solucao(produtos) {
    function criarRelatorio(lista){
    
     let precosTop = 0 ;
     let precosTotal= 0 ;
     let precoTotal = 0;
  
     for (let item of lista){
         const preco = item.preco;
       if ( preco >= 10000 ){
         precosTop = precosTop + preco
       }else{
         precosTotal = precosTotal + preco    
         }
         precoTotal = (precosTotal + precosTop)
         
    };
    const resposta = {
      totalTop: precosTop,
      percentual: precosTop/precoTotal
      
    }
  console.log(resposta)
   } 
  criarRelatorio (produtos);
    }
  