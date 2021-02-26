function mostrar()
{
let precio;
let descuento;
let precioFinal;

precio = prompt( "Ingrese el precio: ");
precio = parseInt( precio );

descuento = prompt( "Ingrese porcentaje de descuento: ");
descuento = parseInt( descuento );


precioFinal = precio - (precio * (descuento/100));

elPrecioFinal.value = precioFinal;


}
