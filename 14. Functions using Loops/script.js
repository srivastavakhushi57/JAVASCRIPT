//1. sum of first n numbers
let n=10;
let sum=0;
for(let i=0;i<=n;i++){
    sum=sum+i;
}
console.log("The sum of first",n,"numbers is",sum);


//2. table of n
let product=1;
for(let i=1;i<=n;i++){
    product=n*i;
    console.log(n,'x',i,'=',product);
}

//3. is prime or not
let prime=true;
if(n<=1){
    prime=false;
}
else if(n>1){
    for(let i=2;i<=n;i++){
        if(n%i===0){
            prime=false;
            break;
        }
    }
}
console.log(n,"is a prime number?",prime);

//4. printing all its factors
for(let i=1;i<n;i++){
    if(n%i===0){
        console.log(i,"is a factor of",n);
    }
}

//5. sum of its digits
let number=157;
let mod=0;
let result=0;
let a=number;
while(a>0){
    mod=a%10;
    result=result+mod;
    a=Math.floor(a/10);
}
console.log("Sum of all digits of",number,"is",result);

//6. checking whether armstrong number
let nums=234;
let m=0;
let r=0;
let b=nums;
while(a>0){
    m=b%10;
    r=r+m*m*m;
    b=Math.floor(b/10);
}
if(r==nums){
    console.log(nums,"is an armstrong number.");
}
else{
    console.log(nums,"is not an armstrong number.");
}