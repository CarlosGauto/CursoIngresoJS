/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioA;
    let precioB;
    let precioC;
    let resultado;

    precioA = txtIdPrecioUno.value;
    precioB = txtIdPrecioDos.value;
    precioC = txtIdPrecioTres.value;
    
    precioA = parseInt(precioA);
    precioB = parseInt(precioB);
    precioC = parseInt(precioC);

    resultado = precioA + precioB + precioC;

    alert( "La suma de los productos es de $" + resultado );

}
function Promedio () 
{

    let precioA;
    let precioB;
    let precioC;
    let resultado;

    precioA = txtIdPrecioUno.value;
    precioB = txtIdPrecioDos.value;
    precioC = txtIdPrecioTres.value;
    
    precioA = parseInt(precioA);
    precioB = parseInt(precioB);
    precioC = parseInt(precioC);

    resultado = (precioA + precioB + precioC) / 3 ;

    alert( "El promedio de los productos es de $" + resultado );
}
function PrecioFinal () 
{
	let precioA;
    let precioB;
    let precioC;
    let iva
    let resultado;

    precioA = txtIdPrecioUno.value;
    precioB = txtIdPrecioDos.value;
    precioC = txtIdPrecioTres.value;
    
    precioA = parseInt(precioA);
    precioB = parseInt(precioB);
    precioC = parseInt(precioC);

    iva = (precioA + precioB + precioC) * 0.21 ;

    resultado = precioA + precioB + precioC + iva;

    alert( "El precio final es de $" + resultado );
}