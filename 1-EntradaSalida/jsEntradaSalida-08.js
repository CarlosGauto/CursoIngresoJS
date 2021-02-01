/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let resto;

	numeroUno = parseInt (txtIdNumeroDividendo.value);
	numeroDos = parseInt (txtIdNumeroDivisor.value);
	
	resto = numeroUno % numeroDos;
	alert ( "El resto es " + resto );
}
