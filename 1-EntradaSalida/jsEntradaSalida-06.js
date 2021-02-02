/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(txtIdNumeroUno.value);

	numeroDos = parseInt(txtIdNumeroDos.value);
	resultado = numeroUno + numeroDos;
	
	alert (resultado);



}

