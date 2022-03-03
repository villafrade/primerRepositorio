console.log("llama la funcion que quieras, si es el cuadrado() agrgar el lado, si es el triangulo()" 
+ "agregar lado y base, y si es el circulo(), agragar el radio"); 



//codigo del triangulo
function triangulo(ladoTriangulo1, baseTriangulo) 
{
console.group("Triangulo");
const ladoTriangulo2 = ladoTriangulo1;
const alturaTriangulo = ladoTriangulo1 - 0.5;
console.log("los lados del triangulo valen: lado derecho:  " + ladoTriangulo1 + "cm, lado izquierdo: "
 + ladoTriangulo2 + "cm y una base de: " + baseTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo vale " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el area de un triangulo vale: " + areaTriangulo + "cm");
console.groupEnd();
}

// codigo del circulo

function circulo(radio) 
{
console.group("Circulo");

const PI = Math.PI;
console.log( "el radio de nuestro circulo es de: " + radio + "cm");

const diametro = radio * 2;
console.log("el diametro de nuestro circulo es de: " + diametro + "cm");

const perimetroCirculo = diametro * PI;
console.log("el perimetro de nuestro circulo es: " + perimetroCirculo + "cm");

const areaCirculo = (radio * radio) * PI;
console.log("el area del circulo es: " + areaCirculo + "cm");

console.groupEnd();
}

function perimetro_cuadrado()
{
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    const Respuesta_cuadrado = document.getElementById("respuesta_cuadrado");

    const perimetroCuadrado = value * 4;
    Respuesta_cuadrado.innerHTML=("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");
}

function area_cuadrado() 
{
    const Respuesta_cuadrado = document.getElementById("respuesta_cuadrado");
    const input = document.getElementById("input_cuadrado");
    const value = input.value;

    const areaCuadrado = value * value;
    Respuesta_cuadrado.innerHTML=("el area del cuadrado es: " + areaCuadrado + "cm");
    
}

function perimetro_triangulo()
{
    const Respuesta_triangulo = document.getElementById("respuesta_triangulo");
    const input = document.getElementById("input_lados_t");
    const lados = parseInt(input.value);

    const inputb = document.getElementById("input_base_t");
    const base = parseInt(inputb.value);

    const perimetro_t = (lados * 2) + base;
    Respuesta_triangulo.innerHTML=("el perimetro del triangulo es: " + perimetro_t + "cm");

}

function area_triangulo()
{
    const Respuesta_triangulo = document.getElementById("respuesta_triangulo");
    const input = document.getElementById("input_lados_t");
    const lados = parseInt(input.value);
    

    const inputb = document.getElementById("input_base_t");
    const base = parseInt(inputb.value);

    const area_t = ((lados - 0.5) * base)/2;
    Respuesta_triangulo.innerHTML=("el area del triangulo es: " + area_t + "cm");
}

function area_circulo() 
{
    const RespuestaCirculo = document.getElementById("respuesta_circulo");
    const input = document.getElementById("input_radio");
    const radio = input.value;
    const PI = Math.PI;

    const area = (radio * radio) * PI;

    RespuestaCirculo.innerHTML=("el area del circulo es: " + area + "cm");
}

function perimetro_circulo() 
{
    const RespuestaCirculo = document.getElementById("respuesta_circulo");
    const input = document.getElementById("input_radio");
    const radio = input.value;
    const PI = Math.PI;
    
    const perimetro = (radio * 2) * PI;
    RespuestaCirculo.innerHTML=("el perimetro del circulo es: " + perimetro + "cm");
}