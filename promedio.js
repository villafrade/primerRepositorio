var lista=[];
var mostrarLista = document.getElementById("respuesta_lista");
var respuestaPromedio = document.getElementById("respuesta_promedio");

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
function calcular_promedio()
{
    var suma = 0;

    for (var i = 0; i < lista.length; i++)
    {
        suma = suma + lista[i];
    }
    
    var promedio = (suma / lista.length);  

    if((promedio % 1) == 0 )
    {
        respuestaPromedio.innerHTML=("el promedio de la lista es: " + promedio);  
    }    
    else
    {
        promedioC = promedio.toFixed(2);
        respuestaPromedio.innerHTML=("el promedio de la lista es: " + promedioC);  // se utiliza toFixed para ordenar cuantos decimales queremos que tome de una numero
    }
}


