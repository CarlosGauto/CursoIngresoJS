function mostrar()
{	
	let edad;
	let civil;

	edad = txtIdEdad.value;
	civil = estadoCivil.value;

	edad  = parseInt(edad);

	if (edad < 18 && civil != "Soltero" ) 
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN