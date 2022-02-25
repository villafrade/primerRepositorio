function precio_descuento() 
{
    const inputPrecio = document.getElementById("input_precio");
    const precio_original = inputPrecio.value;
    const inputDescuento = document.getElementById("input_descuento");
    const porcentaje_descuento = inputDescuento.value;
    const Respuesta = document.getElementById("respuesta");
    

    const porcentaje_final = 100 - porcentaje_descuento;
    const precio_final = (precio_original * (porcentaje_final) / 100);
    
    Respuesta.innerHTML=("precio original: " + precio_original +  " <br />se le plica un descuento del: " 
    + porcentaje_descuento + "%" + "<br /> precio a pagar es de: " + precio_final);
}