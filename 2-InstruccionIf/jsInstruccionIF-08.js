function mostrar()
{
	let edad;
	let civil;

	
	edad  = txtIdEdad.value;
	civil = estadoCivil.value;
	
	edad = parent(edad);
	
	if (edad >= 18 && civil === "Soltero") {
		alert ( "Es soltero y no es menor" );
	}

}//FIN DE LA FUNCIÓN