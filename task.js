    function caculat(num1, num2, operator){
        if (operator === '+') {
            return num1 + num2;
        } else if (operator === '-') {
            return num1 - num2;
        } else if (operator === '*') {
            return num1 * num2;
        } else if (operator === '/') {
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error! Division by zero is not allowed.";
            }
        } else {
            return "Error! Invalid operator.";
        }
    }
    
    var num1 = +(prompt("Enter the first number: "));
    var operator = prompt("Enter the operator (+, -, *, /): ");
    var num2 = +(prompt("Enter the second number: "));

    var result=  caculat(num1, num2, operator)
    alert("Caculat Result = "+result)