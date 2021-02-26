function mostrar()
{
    let altura;
    let sexo;
    let jugadores;
    let promedio;
    let sumaAltura;
    
    jugadores = 1;

    while (jugadores < 6)
    {
        altura = prompt( "Ingrese la altura del jugador " + jugadores +"° :");
        altura = parseInt(altura);

        sexo = prompt( "Ingrese el Sexo f/m del jugaror " + jugadores +"° ");

        



        sumaAltura = sumaAltura + altura;




        jugadores++;


    }

    promedio = sumaAltura / jugadores;
    alert( promedio );
}
