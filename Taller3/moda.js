const lista = [
    1,
    4,
    5,
    6,
    1,
    3,
    4,
    2,
    4,
    5

];
const conteonumero = {

};

lista.map(
    function(numero){
        if (conteonumero[numero]){
            conteonumero[numero] +=1;
        }else {
        conteonumero[numero] = 1;}
        }  
        );
    
    


console.log(conteonumero)