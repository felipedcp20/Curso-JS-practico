const salariosCOL = colombia.map(
    function(personita){
        return personita.salary
    }
);


const order = salariosCOL.sort(
    function(a,b){
        return a-b
    }
)

function ispar (number) {
    if (number% 2=== 0){
        return true}
    else{
        return false
   }       
}

function promedio (a,b){
    return ((a+b)/2)
}

function CalcularMediana (lista){


const mitad = parseInt(lista.length/2);
      
    if(ispar(lista.length) === true){
        posicioninicial = lista[mitad-1];
        posicionfinal = lista[mitad];
        mediana1 = promedio(posicioninicial,posicionfinal)
        console.log(`la mediana de la lista par es ${mediana1}`)
    }else{
        console.log(`la mediana de la lista es ${lista[mitad]}`)
    }
}