function mostrar()
{
  var productos;
	var cantidad;
	var precio;

	var respuesta;

	var precioMayor;
	var banderaProducto;

	var precioBruto
	var precioTotal;


	var precioArena;
	var precioCal;
	var precioCemento;

	var acumuladorBolsas;
	var acumuladorPrecioArena;
	var acumuladorPrecioCal;
	var acumuladorPrecioCemento;

	var maximoBolsas;
	var banderaCaro;
	var maximoPrecio;
	var maximoTipo;
	var descuento;

	producto=true;
	respuesta="si";

	acumuladorCantidadArena=0;
	acumuladorCantidadCal=0;
	acumuladorCantidadCemento=0;
	totalBolsas=0;
	precioBruto=0;

	banderaProducto=true;

	while(respuesta=="si")
	{
		producto=prompt("Ingrese el producto: arena, cal o cemento");
		while(producto != "arena" && producto != "cal" && producto != "cemento")
		{
			producto=prompt("Ingrese un producto válido");
		}

		cantidad=prompt("Ingrese la cantidad de bolsas");
		cantidad=parseInt(cantidad);
		
		while(isNaN(cantidad)==true || cantidad<1)
		{
			cantidad=prompt("Reingrese una cantidad");
			cantidad=parseInt(cantidad);
		}

		precio=prompt("Ingrese el precio");
		precio=parseInt(precio);
		
		while(isNaN(precio)==true || precio<1)
		{
			precio=prompt("Reingrese el precio");
			precio=parseInt(precio);
		}


		switch(producto)
		{
			case "arena":
			acumuladorCantidadArena = acumuladorCantidadArena + cantidad; 
			break;

			case "cal":
			acumuladorCantidadCal = acumuladorCantidadCal + cantidad;
			break;

			case "cemento":
			acumuladorCantidadCemento = acumuladorCantidadCemento + cantidad;
			break;
			
		} 
		if(banderaProducto == true || maximoPrecio>precio) // El PRECIO tiene que ser mayor al MAXIMOPRECIO (lo tenes al reves), para que entre en el if
		{
			precio = maximoPrecio; // Esta al reves (pasa lo mismo en la linea de abajo (87)) y ademas como nunca iniciaste el maximoPrecio, da NaN en LINEA 95
			tipo = maximoTipo; // Esta al reves. la variable TIPO toma el valor de MAXIMOTIPO. y MAXIMOTIPO no esta incializada (por eso sale undefined)
			banderaProducto == false; //El ( == ) se usa para comparar, cambialo por = , que es para asignar valor.

		}
		respuesta =prompt("Quiere ingresar más productos? Si o no");

	}

	precioBruto = precioBruto + (precio*cantidad); //Esta fuera del While (por ende te va a calcular solo el ultimo precio y la ultima cantidad) y Fijarse linea 86
	totalBolsas = totalBolsas + cantidad; // Esta fuera del while(solo va a sumar la ultima cantidad que pusiste)

	if(acumuladorBolsas>30)
	{
		descuento=precioBruto*0.75;
	}
	else
	{
		if(acumuladorBolsas>10)
		{
			descuento=precioBruto*0.85;
		}
		else
		{
			descuento="No tiene descuento";
		}		

	}

	if(acumuladorCantidadCemento > acumuladorCantidadCal && acumuladorCantidadCemento > acumuladorCantidadArena) 
	{
		maximoBolsas="cemento";
	}
	else
	{
		if(acumuladorCantidadCal >acumuladorCantidadCemento && acumuladorCantidadCal >acumuladorCantidadArena)
		{
			maximoBolsas="cal";
		}
		else
		{
			maximoBolsas="arena";
		}
	}

	document.write("El importe en bruto es " + precioBruto +"<br>");
	if(descuento != "No tiene descuento")
	{
		document.write("y con el descuento "+precioTotal+ "<br>");
	}
	document.write("El tipo de producto con más cantidad de bolsas es " +maximoBolsas + "<br>");
	document.write("El tipo de producto más caro es " +maximoTipo+ "<br>");
}

/*
  let tipo;
  let cant;
  let precio;
  let respuesta;
  let totalbolsas;
  let descuento;
  let precioTotal;
  let arenabolsas;
  let cementobolsas;
  let calbolsas;
  let maxprecio;
  let maxtipo;
  let banderaPrecio;

  banderaPrecio = true;
  precioTotal = 0;
  totalbolsas = 0;
  respuesta = "si";
  arenabolsas = 0 ;
  cementobolsas = 0;
  calbolsas = 0;

  while (respuesta == "si")
  {
    tipo = prompt( "Ingrese producto (arena, cal, cemento) :");
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento" )
    {
      tipo = prompt( "Ingrese un producto valido (arena, cal, cemento): ")
    }

    cant = prompt( "Ingrese la cantidad");
    cant = parseInt(cant);
    while (isNaN(cant) == true)
    {
      cant = prompt( "ingrese una cantidad valida: ");
      cant = parseInt(cant);
    }

    precio = prompt( "Ingrese el precio: ");
    precio = parseInt( precio );
    while (isNaN(precio) == true || precio < 1)
    {
      precio = prompt( "Ingrese un precio correcto: ");
      precio = parseInt( precio );
    }

    switch(tipo)
    {
      case "arena":
        arenabolsas = arenabolsas + cant;
      break;

      case "cal":
        calbolsas = calbolsas + cant;
      break;

      case "cemento":
        cementobolsas = cementobolsas + cant;
      break;

    }

    if (  banderaPrecio == true || precio > maxprecio ) 
    {
      maxprecio = precio;
      maxtipo = tipo;
      banderaPrecio = false;
    }


    totalbolsas = totalbolsas + cant;
    precioTotal = precioTotal + (cant * precio);
    

    respuesta = prompt( "quiere ingresar mas productos?");
  }

  if( totalbolsas > 30)
  {
   descuento = precioTotal * 0.75;
  }
  else
  {
    if(totalbolsas > 10)
    {
      descuento = precioTotal * 0.85;
    }
    else
    {
      descuento = "No tiene descuentos"
    }
  }

  if( calbolsas > cementobolsas && calbolsas > arenabolsas)
  {
    maxbolsas = "Cal es el que mas bolsas tiene";
  }
  else
  {
    if(cementobolsas > calbolsas && cementobolsas > arenabolsas)
    {
      maxbolsas = "Cemento es el que mas bolsas tiene";
    }
    else
    {
      maxbolsas = "Arena es el que mas bolsas tiene";
    }
  }


  document.write("el importe total es de " + precioTotal + "<br>");
 
  if(descuento != "No tiene descuentos")
  {
  document.write("el importe total CON DESCUENTO es de " + descuento + "<br>");
  }

  document.write( maxbolsas + "<br>");
  document.write( "El tipo mas caro es: " + maxtipo + "<br>");


}
*/
