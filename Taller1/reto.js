function alturaTrianguloIsosceles (lado1,lado2,base){
    const altura = Math.sqrt((lado1 **2) - (base**2/4));
    return altura
}

function determinarisosceles (lado1,lado2,base){
    if (lado1 === lado2 || lado1 === base || lado2 === base){
        return true
    }else {
        return false}
    }


function calculartriangulo (){
    const inputlado1 = document.getElementById("lado1");
    const lado1 = Number(inputlado1.value);
    const inputlado2 = document.getElementById("lado2");
    const lado2 = Number(inputlado2.value);
    const inputbase = document.getElementById("base");
    const base = Number(inputbase.value);

   
    if (determinarisosceles(lado1,lado2,base) == true){
        altura =alturaTrianguloIsosceles(lado1,lado2,base)
        alert(`es un triangulo isosceles y su altura es ${altura}`);
        ;
    }else {
        alert(`no es un triangulo isosceles`)
    }

}