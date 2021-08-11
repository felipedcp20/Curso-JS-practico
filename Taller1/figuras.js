console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado*4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`)

const AreaCuadrado = ladoCuadrado*ladoCuadrado;
console.log(`El Área del cuadrado es ${AreaCuadrado}cm²`)
console.groupEnd();


console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const altura = 5.5;

console.log (`los lados del triangulo miden: ${ladoTriangulo1}cm,${ladoTriangulo2}cm y ${base}cm`);
console.log(`la altura del tirangulo es ${altura}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base
console.log(`el perimetro del triangulo es : ${perimetroTriangulo}cm`)

const areaTriangulo = (base * altura )/2

console.log(`el área del triangulo es : ${areaTriangulo}cm²`)


console.groupEnd();



console.group("Circulo");
const radioCirculo = 4 ;
const diametroCirculo = 4*2;
const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo*radioCirculo)*pi

console.log(`El radio es: ${radioCirculo}, el diametro: ${diametroCirculo}, el perimetro ${perimetroCirculo} y el área ${areaCirculo}`)

console.groupEnd();