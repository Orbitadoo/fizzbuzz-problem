/* Escribe, en el lenguaje de programación que desees, un programa que muestre
en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos de 5 por “Buzz”. */

for (var i = 1 ; i < 100 ; i++)
{
  if (esDivisible(i, 3))
  {
    document.write("Fizz");
  }
  if (esDivisible(i, 5))
  {
    document.write("Buzz");
  }
  if (!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i);
  }
  document.write ("<br>")
}

function esDivisible(num, divisor)
{
  if (num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
