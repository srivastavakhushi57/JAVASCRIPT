function divide(num1,num2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num2===0){
                reject("Error: Division by zero is invalid!");
            }
            else{
                resolve(num1/num2);
            }
        },3000);
    });
}

function handleDivision(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);

    const output=document.getElementById("output");

    if (document.getElementById("num1").value === " " || document.getElementById("num2").value === " ")
    {
        output.textContent = "Please enter both numbers.";
        output.className = "output error";
        return;
    }
    output.textContent=`Dividing ${num1} by ${num2}...`;
    output.className="output";

    divide(num1,num2)
    .then(result=>{
        output.textContent=`Result : ${result}`;
        output.className="output";
    })
    .catch(result=>{
        output.textContent=result;
        output.className="output error";
    });
}