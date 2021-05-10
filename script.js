"use strict"

 let hora = 0;
 let minuto = 0;
 let segundo = 0;
 let milisegundo = 0;

let tempo = 10; //1 segundo sao  1000 milésimos.
let cronometro;

 function iniciar (){

    cronometro = setInterval(function(){ timer(); }, tempo)// se o tempo é 1 segundo, a cada segundo esta função será executada.
    // setInterval(() => { timer(); }, tempo);  //  outra maneira de configurar
}

 function pausar(){
    clearInterval(cronometro); // esta função para a execução da anterior verificar mais exemplos em w3schools.
 }

 function parar(){
    clearInterval(cronometro);
    hora = 0;
    minuto = 0;
    segundo = 0;
    milisegundo = 0;

    document.getElementById('counter').innerHTML = '00:00:00:00';
}

 function timer() {

    milisegundo++;
    if (milisegundo == 100){
        milisegundo = 0;
        segundo++;

        if (segundo == 60){
            segundo = 0;
            minuto++;

            if (minuto == 60){
                minuto = 0;
                hora++;
            }
        }
    }
     let formato = 
     (hora < 10 ? '0' + hora : hora) + ":" + 
     (minuto < 10 ? '0'+ minuto : minuto) + ":" + 
     (segundo < 10 ? '0' + segundo : segundo) + ":" + 
     (milisegundo < 10 ? '0' + milisegundo : milisegundo); 
          
     document.getElementById('counter').innerHTML = formato;

     return formato;
 }