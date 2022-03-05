const [first, second] = [true,false];
let   [third, fourth] = [false,true];
var   [fifth, sixth]  = [false,false];

// variable of const cannot be changed 
console.log(fourth);
console.log(first);

console.log(sixth);
console.log(second);

//But here we can change value of j , but not j , it remains constant
//actually we are changing the value of x
const j =  {x:1};
j.x = 2;
console.log(j.x);
j.x = "Wow";
console.log(j.x);
