// print prime number 
function isPrime(primeNumber) {
    for(var i = 2; i < primeNumber; i++)
      if(primeNumber % i === 0) return false;
    return primeNumber > 1;
}

// print prime number
var pMax = 1000;
for(var i =0;i <= pMax;i++ ){
    if(isPrime(i)==true){
        console.log(i);
    }
}

// print Armstrong number 

function armstrongNumber(givenNumber){
var digit =0;
var totalSum =0;
var sub = givenNumber;
while(givenNumber>1){
    givenNumber = givenNumber/10;
    digit++;
}
givenNumber = sub;
while(givenNumber>0){
       var rfakt = givenNumber%10;
       totalSum += Math.pow(rfakt,digit);
       givenNumber = (givenNumber-rfakt)/10;
}


if(sub==totalSum){
    return true;
}else{
    return false;
}
}
console.log(armstrongNumber(1));
console.log(armstrongNumber(23));
console.log(armstrongNumber(153));
console.log(armstrongNumber(9474));

for(var i =0;i <= pMax;i++ ){
    if(armstrongNumber(i)===true){
        console.log(i);
    }
}
