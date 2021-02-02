function mostrar()
{
	let edad;
	let civil;

	edad  = parseInt(txtIdEdad.value);
	civil = estadoCivil.value;
	
	if (edad >= 18 && civil === "Soltero") {
		alert ( "Es soltero y no es menor" );
	}

}//FIN DE LA FUNCIÓN