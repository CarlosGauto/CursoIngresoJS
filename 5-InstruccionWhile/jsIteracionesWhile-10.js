/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let cantPositivos;
	let cantNegativos;
	let cantCeros;

	sumaPositivos = 0;
	sumaNegativos = 0;
	cantPositivos = 0;
	cantNegativos = 0;
	cantCeros = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt( "Ingrese un numero:");
		numeroIngresado = parseInt( numeroIngresado );

		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			cantPositivos++;
		
		}
		else
		{
			if (numeroIngresado == 0)
			{
				cantCeros++;
			}
			else
			{
				sumaNegativos += numeroIngresado;
				cantNegativos++;
			}
		}

		respuesta=prompt("desea continuar?");

	}//fin del while

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("Cant de negativos: " + cantNegativos + "<br>");
	document.write("Cant de positivos: " + cantPositivos + "<br>");
	document.write("Cant de Ceros: " + cantCeros + "<br>");


}//FIN DE LA FUNCIÓN