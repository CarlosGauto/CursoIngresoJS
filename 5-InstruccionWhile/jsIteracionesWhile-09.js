/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaP;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	
	//iniciar variables

	banderaP = "es el primero";
	respuesta = "si";


	while (respuesta == "si" )
	{
		numeroIngresado = prompt( "ingrese numero" );
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaP == "es el primero" || numeroIngresado > numeroMaximo)
		{
			if ((numeroIngresado % 2) == 0)
			{
			numeroMaximo = numeroIngresado;
			}
		}

		if (banderaP == "es el primero" || numeroIngresado < numeroMinimo)
		{	
			if ((numeroIngresado % 2) == 0)
			{
			numeroMinimo = numeroIngresado;
			banderaP = "Ya no es el primero";
			}
		}

		respuesta = prompt( "desea continuar?" );

	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}//FIN DE LA FUNCIÓN