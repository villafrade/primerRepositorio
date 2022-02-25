function mediana(lista)
{
    const cantidad_lista = lista.length;
    const mediana_lista = Math.floor((lista.length / 2));
    if ( (cantidad_lista % 2) == 0)
    {
        const a = mediana_lista - 1;
        const resultado_mediana = (lista[mediana_lista] + lista[a]) / 2;
        console.log("la media de la lista es: " + resultado_mediana);
        
    }
    else
    {
        console.log("la mediana de la lista es: " + lista[mediana_lista] );
    }
}