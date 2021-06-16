function solucao(tempo, distancia) {
    if ( 5 > tempo ) {
     console.log(600);
 }; 
if ( tempo >=5 && tempo < 60 ){
     console.log( 100 * tempo + 50 * distancia );
 }; 
 if ( tempo > 60 && distancia < 100){
         console.log (200*distancia);
     };
     if (tempo> 60 && distancia >= 100){
         console.log( 150 * distancia );
     }
 }
