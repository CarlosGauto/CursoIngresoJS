/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	
	//descuento = importe * 25/100;
	//resultado = importe - (importe * 0.25);

	descuento = importe * 0.25;

	resultado = importe - descuento ;
	txtIdResultado.value = resultado;

}
