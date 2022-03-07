var lista=[];
var mostrarLista = document.getElementById("respuesta_lista");
var respuestaMediana = document.getElementById("respuesta_mediana");

function agregar_numero()
{
var p = document.getElementById("input_lista");
var numero_agregar = parseInt(p.value);
lista.push( numero_agregar);
mostrarLista.innerHTML = ("tu lista es: {" + lista + "}");
}

function borrar_numero()
{
    lista.pop();
    mostrarLista.innerHTML = ("tu lista es: {" + lista + "}");
}

function calcular_mediana()
{
    const cantidad_lista = lista.length;
    const mediana_lista = Math.floor((lista.length / 2));
    if ( (cantidad_lista % 2) == 0)
    {
        const a = mediana_lista - 1;
        const resultado_mediana = (lista[mediana_lista] + lista[a]) / 2;
        respuestaMediana.innerHTML=("la media de la lista es: " + resultado_mediana);
        
    }
    else
    {
        respuestaMediana.innerHTML=("la mediana de la lista es: " + lista[mediana_lista] );
    }
}