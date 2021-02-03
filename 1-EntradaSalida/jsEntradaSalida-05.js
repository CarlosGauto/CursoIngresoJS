/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let suNombre;
	let suEdad;
	let suApellido;

	suApellido = prompt("ingrese apellido")
	suNombre = txtIdNombre.value;
	suEdad   = txtIdEdad.value;

	alert("Usted se llama " + suNombre + " " + suApellido + " y tiene " + suEdad);


}

