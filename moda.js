function lista1(lista) 
{
    const contador_lista1 = {};

    lista.map(
        function(elementos)
        {
            if (contador_lista1[elementos])
            {
                contador_lista1[elementos] += 1;
            }
            else 
            {
                contador_lista1[elementos] = 1;
            }
        }
    )
    const array_lista1 = Object.entries(contador_lista1).sort(
        function (antiguo_valor, nuevo_valor)
        {
            return antiguo_valor[1] - nuevo_valor[1];
        }
    )
    const moda = array_lista1[array_lista1.length - 1];
    console.log("la moda de esa lista es: " + moda);
}