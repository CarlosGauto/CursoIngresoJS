function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let sumaPeso;
  let promPeso;

  nombre1 = prompt( "Ingrese su nombre y apellido: ");
  nombre2 = prompt( "Ingrese el nombre y apellido de su pareja: ");
  peso1 = prompt( "Ingrese peso:  ");
  peso2 = prompt( "Ingrese el peso de su pareja:  ");

  peso1 = parseInt( peso1 );
  peso2 = parseInt( peso2 );

  sumaPeso = peso1 + peso2;
  promPeso = sumaPeso / 2;

  alert("Ustedes se llaman "+ nombre1 + " y " + nombre2 + ", pesan " + peso1 +" y "+ peso2 + " kilos, que sumados son " + sumaPeso +  " kilos y el promedio de peso es " +  promPeso)





}
