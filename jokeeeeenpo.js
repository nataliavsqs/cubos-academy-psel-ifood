function solucao(joao, andre) {
    if ( joao === andre) {
           console.log ("EMPATE");
      } else if (( joao == "TESOURA" && andre == "PAPEL") || ( joao == "PAPEL" && andre == "PEDRA") || ( joao == "PEDRA" && andre == "TESOURA" )){
            console.log ( "JOAO" );
        } else {
            console.log ( "ANDRE");
        }
  }
  