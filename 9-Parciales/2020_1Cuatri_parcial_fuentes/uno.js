
function mostrar()
{
	 let tipo;
	 let precio;
	 let cant;
	 let marca;
	 let fabricante;
	 let precioAlcohol;
	 let minAlcohol;
	 let alcoholFabri;
	 let cantAlcohol;
	 let cantbar;
	 let cantjabon;
	 let promedio;
	 let contadorA;
	 let contadorB;
	 let contadorJ;
	 let productos;



	 contadorJ = 0;
	 contadorB = 0;
	 contadorA = 0;
	 productos = 3;
	 

	 cantAlcohol = 0;
	 cantbar = 0;
	 cantjabon = 0;

	 alcoholFabri = "-";
	 minAlcohol = "No se ingreso ningun alcohol";

	 while ( productos < 5 )
	 {
		tipo = prompt( "Ingresar el tipo de producto (barbijo , jabón o alcohol): ");
		
		while( tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" )
		{
			tipo = prompt("Ingreso un tipo de producto incorrecto: ");
		}

		precio = prompt( "Ingrese el precio entre 100 y 300 de " + tipo + ":");
		precio = parseInt( precio );

		while( precio < 100 || precio > 300 )
		{
			precio = prompt( "Ingrese un precio valido para " + tipo + " (entre 100 y 300): ");
			precio = parseInt( precio );
		}

		cant = prompt( "Ingrese la cantidad de " + tipo + ", no debe superar las 1.000 unidades: ");
		cant = parseInt( cant );

		while ( cant < 1 || cant > 1000)
		{
			cant = prompt( "Ingrese una cantidad correcta de " + tipo + ": ");
			cant = parseInt( cant );
		}

		marca = prompt( "Ingrese la marca de " + tipo + ":");
		fabricante = prompt( "Ingrese el fabricante de " + tipo + ":");

		switch (tipo)
		{
			case "alcohol":
				
					if (minAlcohol == "No se ingreso ningun alcohol" || precio < precioAlcohol)
					{
						
						alcoholFabri = fabricante;
						minAlcohol = cant;
						precioAlcohol = precio;
					}

					cantAlcohol = cartlAlcohol + cant;
					
					contadorA++;
					break;

			case "barbijo":
				cantbar = cantbar + cant;
				contadorB++;
				break;
			
			case "jabon":
				cantjabon = cantjabon + cant;
				contadorJ++;
				break;
		
		
		}


		productos++

	 }

	if (cantbar > cantjabon && cantbar > cantAlcohol)
	{
		promedio = cantbar / contadorB;
	}
	else
	{
		if ( cantjabon > cantAlcohol && cantjabon > cantAlcohol)
		{
			promedio = cantjabon / contadorJ;
		}
		else
		{
			promedio = cantAlcohol / contadorA;
		}
	}




	alert(promedio);

	alert(minAlcohol);
	alert(alcoholFabri);
	alert(cantjabon);


}
