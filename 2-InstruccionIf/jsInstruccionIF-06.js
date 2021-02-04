function mostrar()
{
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if (edad >= 18) {
		alert ("Sos mayor de edad");

	}else if (edad >= 13){
		alert ("Sos un adolescente");
	} else 
		alert ( "Sos un niño");
	


}//FIN DE LA FUNCIÓN