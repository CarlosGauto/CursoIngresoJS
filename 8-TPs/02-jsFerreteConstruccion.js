/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let cantAlambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt( largo );
    ancho = parseInt( ancho );

    largo = largo * 2;
    ancho = ancho * 2;

    cantAlambre = (largo + ancho) * 3;

    alert( "Se necesitan " + cantAlambre + "mts de alambre.");


}
function Circulo () 
{
    let radio;
    let circunferencia;
    let resultado;
    
    radio = txtIdRadio.value;
    radio = parseInt(radio);

    circunferencia = 2 * Math.PI * radio;

    resultado = circunferencia * 3;

    
    resultado = resultado.toFixed(2);

    alert( "Necesitas " + resultado + " de alambre." );
  


}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseInt( largo );
    ancho = parseInt( ancho );

    area = largo * ancho;

    cemento = area * 2;
    cal     = area * 3;

    alert("Para un contrapiso de " + area + "m2, necesitas " + cemento + " bolsas de cemento y de cal, " + cal + " bolsas." );
    


}