function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":

			alert( "Si tiene 30 días" );
			break;

		case "Febrero":
		
			alert( "Si tiene 28 días." );
			break;

		default:

			alert( "Si tiene 31 días." );
			break;
	}
	



}//FIN DE LA FUNCIÓN