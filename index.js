// after we installed "colors" npm package, we need to import it (require it)
// in the file where we are planning to use it
/* const myColors = require("colors/safe");

console.log(myColors.yellow("hello")); // outputs green text
console.log(myColors.red.underline("i like cake and pies")); // outputs red underlined text
console.log(myColors.inverse("inverse the color")); // inverses the color
console.log(myColors.rainbow("OMG Rainbows!")); // outputs text in colors of a rainbow
console.log(myColors.trap("Run the trap")); // Outputs the text using the trap font */

const dogNames = require('dog-names');

dogNames.femaleRandom();
//=> 'Lucy'
console.log(dogNames.femaleRandom());

let nerds = require('nerds');

let singleHP = nerds.resolve('Harry Potter').asArray();
console.log(singleHP);
/*
[{
	'first': 'Hermione',
	'last': 'Granger',
	'full': 'Hermione Granger',
	'blood_status': 'Muggle-Born',
	'birthday': '19 September, 1979',
	'gender': 'Female',
	'house': 'Gryffindor',
	'wand': '10¾", Vine Wood - Dragon Heartstring'
}]
*/

let multiPoke = nerds.resolve('Pokemon', 3).include(['name', 'type', 'hp']).asArray();
console.log(multiPoke);
/*
[
	{'name':'Bulbasaur', 'type': 'Grass Poison', 'hp': 45},
	{'name':'Charmander', 'type': 'Fire', 'hp': 39},
	{'name':'Squirtle', 'type': 'Water', 'hp': 44}
]
*/

let genSW = nerds.resolve('Star Wars', 3).include(['name']).asGenerator();
genSW.next().value; // {"name":"Luke Skywalker"}
genSW.next().value; // {"name":"Nute Gunray"}
genSW.next().value; // {"name":"Leia Organa"}
genSW.next().value; // undefined