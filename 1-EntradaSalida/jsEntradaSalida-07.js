/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
let numeroUno;
	let numeroDos;
	let resultado;

	function sumar()
{	
	numeroUno = parseInt (txtIdNumeroUno.value);
	numeroDos = parseInt (txtIdNumeroDos.value);
	
	resultado = numeroUno + numeroDos;
	alert ("La suma es " + resultado);	
}

function restar()
{
	numeroUno = parseInt (txtIdNumeroUno.value);
	numeroDos = parseInt (txtIdNumeroDos.value);
	
	resultado = numeroUno - numeroDos;
	alert ("La resta es " + resultado);	
}

function multiplicar()
{ 
	numeroUno = parseInt (txtIdNumeroUno.value);
	numeroDos = parseInt (txtIdNumeroDos.value);
	
	resultado = numeroUno * numeroDos;
	alert ("La multiplicacion es " + resultado);	
}

function dividir()
{
	numeroUno = parseInt (txtIdNumeroUno.value);
	numeroDos = parseInt (txtIdNumeroDos.value);
	
	resultado = numeroUno / numeroDos;
	alert ("La division es " + resultado);	
}

