const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre les entrepreneurs qui sont nés dans les années 70");
let seventies = entrepreneurs.filter(function(entrepreneur){
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
console.log(seventies);

function getFullName(item) {
  var fullname = [item.first,item.last].join(" ");
  return fullname;
}

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
let names = entrepreneurs.map(getFullName);
console.log(names);

function getAge(item) {
  var age = 2020 - item.year
  return age
}

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
let ages = entrepreneurs.map(getAge);
console.log(ages);

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille");
let trie = entrepreneurs.map(({last}) => `\n${last}`).sort();
console.log(`${trie}`);