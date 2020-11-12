// Un prompt s'affiche avec la question suivante
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)
function fact(nombre) {
  var i, nombre, f = 1;
  for (i = 1; i <= nombre; i++)
  {
    f *= i;
  }
  return f;
}
// Dans la console le résultat suivant est affiché
console.log(`Le résultat est ${fact(nombre)}`);