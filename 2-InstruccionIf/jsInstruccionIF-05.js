function mostrar()
{
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18 || edad <= 12) 
	{
		alert("Usted no es un adolescente ");
	}  

}//FIN DE LA FUNCIÓN