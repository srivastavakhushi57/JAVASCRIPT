let P=100000;
let r=0.144715;
let n=1;
let t=3;
let A=P*(1+(r/n))**(n*t);

let compoundInterest=A-P;
console.log(compoundInterest);