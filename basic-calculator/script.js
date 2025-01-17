function calculate () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);4
    const operator = document.getElementById("operator").value


    if(isNaN(num1) || isNaN (num2)){
        document.getElementById("result").textContent = "Please Enter Valid numbers.";
        return;
    }

    let result;
    switch(operator){
        case "+":
        result = num1 + num2;
        break;

        case "*":
            result =  num1 * num2
            break;
        case "/":
        result = num2 !== 0 ? num1 / num2 : "Error! Division by zero.";
         break;
         default:
         result = "invalid Operator!";
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}