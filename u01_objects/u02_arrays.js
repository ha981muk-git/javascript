var person = [];
person.name = "Mrs. White";
var  who = person.name;

//Dot(.) can also be used with arrays as above examples
console.log(who);

typeof white === "array";
typeof person === "object";
console.log(typeof(white));
console.log(person);
console.log(typeof(person));

person[0] = "I am not in the Billiards room";
// 02_Bracket Notations
var plea = "wouldShe";
person[plea]= "I would never!";
console.log(person[plea]);
person.plea;

console.log(person.plea);    // undefined
console.log(person["plea"]); // undefined