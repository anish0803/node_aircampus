let a = parseInt(process.argv[2]);

let firstNumber = a % 10 ; 
let d = Math.floor(a/10) ;
let secondNumber = d%10 ;
let thirdNumber = Math.floor(d/10) ;
let reverseNumber = (firstNumber*100)+(secondNumber*10)+thirdNumber;
console.log(reverseNumber);