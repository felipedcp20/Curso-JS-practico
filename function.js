function perimetroCuadrado (lado){
    return lado *4 
}

function areaCuadrado (lado) {
    return lado * lado
}

function perimetroTriangulo (lado1,lado2 , base){
    return lado1 + lado2 + base
}

function areaTriangulo (base, altura) {
    return ((base * altura)/2)
}

function diametroCirculo (radio){
    return radio *2
}

function perimetroCirculo (radio){
    diametro  = diametroCirculo(radio)
    return diametro * Math.PI
}

function areaCirculo (radio){
    return (radio * radio) * Math.PI
}


function calcularperimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`el perimetro del cuadrado es ${perimetro}cm`);
}

function calcularareaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`el área del cuadrado es ${area}cm²`);
}

function calculaperimetroTriangulo (){
    const inputlado1 = document.getElementById("Inputlado1")
    const inputlado2 = document.getElementById("Inputlado2")
    const inputbase = document.getElementById("Base")
    const lado1 = Number(inputlado1.value);
    const lado2 = Number(inputlado2.value);
    const base = Number(inputbase.value);
    const perimetro= perimetroTriangulo(lado1,lado2,base)

    alert(`el perimetro del triangulo es ${perimetro}cm`)

}

function calcularareaTriangulo(){
    const inputaltura = document.getElementById("Altura");
    const inputbase = document.getElementById("Base");
    const altura = Number(inputaltura.value);
    const base  = Number(inputbase.value);
    const  area = areaTriangulo(base,altura)
    alert(`el area del triangulo es ${area}`)
}   