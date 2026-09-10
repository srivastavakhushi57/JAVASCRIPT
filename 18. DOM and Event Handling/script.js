let greet=document.getElementById("greet");
let nameInput=document.getElementById("nameInput");
let btn=document.getElementById("btn");

let redb=document.getElementById("red");
let blueb=document.getElementById("blue");
let greenb=document.getElementById("green");
let yellowb=document.getElementById("yellow");

btn.addEventListener("click", function(){
    let name=nameInput.value;
    if(name!==""){
        greet.textContent="Hello, "+name;
    }
    else{
        greet.textContent="Hello";
    }
});

redb.addEventListener("click", function(){
    redb.style.backgroundColor="red";
})
blueb.addEventListener("click", function(){
    blueb.style.backgroundColor="blue";
})
greenb.addEventListener("click", function(){
    greenb.style.backgroundColor="green";
})
yellowb.addEventListener("click", function(){
    yellowb.style.backgroundColor="yellow";
})