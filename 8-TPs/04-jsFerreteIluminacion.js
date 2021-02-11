/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // ------------ FUNCIONA PUNTO A Y B -------------------
 	
    let lamparas;
    let calculo;
    let descuento;
    let nombreMarca;
    let iibb;
    let valorLamp
    
    valorLamp = 35;

    nombreMarca = Marca.value;

    lamparas = txtIdCantidad.value;
    lamparas = parseInt(lamparas);

    
    calculo = (lamparas * valorLamp); 
    

    if ( lamparas > 2 ) //Defino de que valor empiezan los Descuentos
    {
        if ( lamparas > 5 )
        {
        descuento = calculo - (calculo * 0.5);
        alert("%50 "+ descuento);
        }
        else
        {    
            if ( lamparas == 5 )
            {
                if (nombreMarca == "ArgentinaLuz")
                {
                descuento = calculo - (calculo * 0.4);
                alert("%40 " + descuento);
                }
                else
                {
                descuento = calculo - (calculo * 0.3);
                alert("%30 " + descuento);
                }  
            } 
            else
            {
                if ( lamparas == 4 )
                {
                    if ( nombreMarca == "ArgentinaLuz" || nombreMarca == "FelipeLamparas" )
                    {
                    descuento = calculo - (calculo * 0.25);
                    alert("%25");
                    }
                    else
                    {
                    descuento = calculo - (calculo * 0.20);
                    alert("%20");
                    }
                }
                else
                {
                    if ( lamparas == 3 )
                    {
                        if (nombreMarca == "ArgentinaLuz")
                        {
                        descuento = calculo - (calculo * 0.15);
                        alert("%15");
                        }
                        else
                        {
                            if (nombreMarca == "FelipeLamparas")
                            {
                            descuento = calculo - (calculo * 0.10);
                            alert("%10");
                            }
                            else
                            {
                            descuento = calculo - (calculo * 0.05);
                            alert("%5");
                            }
                        }
                    }
                    else
                    {
                    descuento = calculo;
                    }
                    
                }
            }
        }

        if (descuento > 120)
        {
        iibb = descuento * 0.10; // Calculo el 10% de impuesto al precio final 
        descuento = descuento + iibb; // Sumo 
        alert( "IIBB Usted pago $"+ iibb);
        }
    }
    else
    {
    descuento = calculo;
    }
    
    txtIdprecioDescuento.value = "$" + descuento;
}

