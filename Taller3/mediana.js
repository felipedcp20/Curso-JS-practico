const listaUnorder =[3,15,15,7,32,12];


const mitad = parseInt(listaUnorder.length/2);

function espar (value){
    if (value%2 ===0){
        return true;
    }else{return false}
}

function promedio (a,b){
    return ((a+b)/2);
}


function mediana (listaUnorder){
    console.log(listaUnorder)
    lista = listaUnorder.sort(function(a, b){return a - b});    
    console.log(lista)
    
    if(espar(lista.length) === true){
        posicioninicial = lista[mitad-1];
        posicionfinal = lista[mitad];
        mediana = promedio(posicioninicial,posicionfinal)
        console.log(`la mediana de la lista par es ${mediana}`)
    }else{
        console.log(`la mediana de la lista es ${lista[mitad]}`)
    }
}

mediana(listaUnorder); 