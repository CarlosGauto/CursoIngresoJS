function mostrar()
{
    let continente;
    let dias;
    let precio;
    let descuento;
    let pago;

    dias = prompt( "Ingrese la cantidad de dias: " );
    dias = parseInt( dias )

    pago = prompt( "Ingrese medio de pago: ");
    
    precio = dias * 100;

    continente = Marca.value;

    switch (continente) 
    {
        case "América":
            descuento = precio * 0.5;
            switch (pago)
            {
                case "debito":
                    descuento = descuento - (descuento * 0.1);
                break;
            }
        break;

        case "África":
            descuento = precio - (precio * 0.6);
            switch (pago)
            {   
                case "efectivo":
                case "mercadoPago":
                    descuento = descuento - (descuento * 0.15);
                break;
            }
        break;
    
        case "Europa":
            descuento = precio - (precio * 0.2);
            switch (pago)
            {   
                case "debito":
                    descuento = descuento - (descuento * 0.15);
                break;

                case "mercadoPago":
                    descuento = descuento - (descuento * 0.10);
                break;

                default:
                    descuento = descuento - (descuento * 0.05);
                break;

            }
        break;

        default:
            descuento = descuento + (descuento * 0.20);
            break;
    }

    alert( "Su viaje sale: " + descuento);
}
