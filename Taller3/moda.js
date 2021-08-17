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

    function(numero){Object.entries(conteonumero)
        if (conteonumero[numero]){
            conteonumero[numero] +=1;
        }else {
        conteonumero[numero] = 1;}
        }  
        );
    
    


const Objectarra1 = Object.entries(conteonumero)

const orderarray = Objectarra1.sort (
    function (value1,value2){
        return value1[1] - value2[1];
    })

console.log(`la moda de la lista es ${orderarray[orderarray.length - 1]}`)