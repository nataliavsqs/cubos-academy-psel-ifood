function solucao(pessoa) {
	if ( pessoa.temIngresso ){
   if ( (pessoa.idade >= pessoa.censura) || (pessoa.estaComPais )){
     if ( pessoa.temCarteirinha || pessoa.idade < 18){
       console.log( "MEIA" );
       } else { console.log( "INTEIRA" );
       }
      } else {
        console.log ("ACESSO NEGADO")
    }
    } else {
        console.log ("ACESSO NEGADO")
    }

}