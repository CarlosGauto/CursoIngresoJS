function mostrar()
{	
	let edad;
	let Civil;

	edad = txtIdEdad.value;
	Civil = estadoCivil.value;

	edad  = parseInt(edad);

	if (edad < 18 && Civil != "Soltero" ) {
		alert ("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN