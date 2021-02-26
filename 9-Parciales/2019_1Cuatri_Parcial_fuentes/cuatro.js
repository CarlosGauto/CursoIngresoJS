function mostrar()
{
    let numero1;
    let numero2;
    let resultado;

    numero1 = prompt( "Ingrese el 1° numero: " );
    numero2 = prompt( "Ingrese el 2° numero: " );
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);


    if (numero1 == numero2)
    {
        alert( numero1 + "" + numero2);

    }
    else
    {
        if (numero1 > numero2)
        {
            resultado = numero1 - numero2;
            alert( "La resta es: " + resultado);
            
            if(resultado> 10)
            {
                alert("La resta es " + resultado + " y supero 10 ");
            }
            
        }
        else
        {
            resultado = numero2 + numero1;
            alert( "La suma es: " + resultado);

        }
    }




}
