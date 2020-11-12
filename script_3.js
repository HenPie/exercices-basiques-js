// Un prompt s'affiche avec la question suivante
let nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function pyramid(nbr) {
  for(let i = 1; i <= nbr; i++) {
    let str = ' '.repeat(nbr-i);
    let str2 = '#'.repeat(i);
    console.log(str + str2);
  }
}
console.log(pyramid(nbr));