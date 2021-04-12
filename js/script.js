//creazione array di numeri casuali
var numeri = [];
var numeriUtente = [];
var s = 1000;


while( numeri.length < 5){
    var numero = Math.floor(Math.random()* 10)+1;
    if( !numeri.includes(numero) ){
        numeri.push(numero);
    }
}

//stampa alert dei numeri
alert("Ricorda i seguenti numeri: " + numeri);

//setTimeout
setTimeout(function(){
    
    while( numeriUtente.length < 5 ){
        var numero;
        numero = parseInt( prompt( "Inserire un numero dei precedentemente visualizzati" + "\nHai inserito " + numeriUtente.length + " di " + "5" ) )
        
        if( !isNaN(numero) ){
            numeriUtente.push(numero);
        }else{
            alert("valore inserito non valido");
        }
    }

}, 3*s );

