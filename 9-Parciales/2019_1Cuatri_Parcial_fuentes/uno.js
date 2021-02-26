
function mostrar()
{
    let ladoTriangulo;
    let area;
    let raizCuadrada;

    ladoTriangulo = prompt( "Ingrese el largo de la base: ");
    ladoTriangulo = parseInt( ladoTriangulo );


    area = (( Math.pow( 3, 0.5 ))/4)*(Math.pow(ladoTriangulo, 2));
    
    alert( "El area de su triangulo es: " + area);






}
