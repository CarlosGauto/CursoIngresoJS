function mostrar()
{
    let hora;

    hora = laHora.value
    hora = parseInt( hora );

    switch (hora)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert( "es de mañana");
            break;
        
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert( "es de tarde");
            break;
        
        default:
            if (hora < 24)
            {
                alert( "a dormir");
            }
            else
            {
                alert( "La hora no es valida" );
            }
            break;

    }   
}
