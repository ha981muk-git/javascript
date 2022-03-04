var person = {};
// Anything which uses dot in JavaScript are objects.
person.name= "Mrs. White";

var person = {
    "name":"Mrs. White"     // und name:"Mrs. White" beide gilten 
};

person.name;
console.log(person.name);

var who = person.name;
console.log(who);
person.name = "Mr. White";   // person.name wird neu zugewiesen.
console.log(person.name);    // Ausgabe = Mr. White
console.log(who);            // Ausgabe = Mrs. White