function mostrar()
{
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18 || edad <= 12) {
		alert("Usted es no es un adolescente ");
	}  

}//FIN DE LA FUNCIÓN