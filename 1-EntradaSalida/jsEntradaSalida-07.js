/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


	function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;
	alert("La suma es " + resultado);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos;
	alert("La resta es " + resultado);	
}

function multiplicar()
{ 
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos;
	alert("La multiplicacion es " + resultado);	
}

function dividir()
{
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno / numeroDos;
	alert("La division es " + resultado);	
}

