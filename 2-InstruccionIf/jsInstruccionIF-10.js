function mostrar()
{
let nota;

nota = Math.floor(Math.random() * (11 - 1)) + 1;


if (nota > 8)
	{
	alert( "Exelente, tu nota es " + nota );
	}
	else
	{
		if (nota > 3)
		{
		alert( "Aprobo con " + nota);
		}
		else 
		{
			alert("Vamos, la proxima se puede, tu nota es " + nota );
		}
	}

}//FIN DE LA FUNCIÓN