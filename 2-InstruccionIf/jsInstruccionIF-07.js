function mostrar()
{	
	let edad;
	let Civil;

	edad        = parseInt( txtIdEdad.value );
	Civil = estadoCivil.value;


	if (edad < 18 && Civil != "Soltero" ) {
		alert ("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN