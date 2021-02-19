/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let intentos;

	intentos = 0;
	claveIngresada = prompt( "Ingrese el numero clave" );

	
	while (claveIngresada != "utn750" && intentos < 2)
	{
		claveIngresada = prompt("Clave erronea, ingrese el número clave correcto");
		intentos = intentos + 1;
	}
	
	
	

}//FIN DE LA FUNCIÓN
