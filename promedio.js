function promedio_lista(lista)
{
    const cantidad_lista = lista.length;
    let suma_lista = 0;
    for (let i = 0; i < cantidad_lista; i++)
    {
        suma_lista = suma_lista + lista[i];
    }
    
    const promedio = suma_lista / cantidad_lista; 
    console.log("el promedio de la lista es: " + promedio);
}

