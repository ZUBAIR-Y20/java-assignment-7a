document.getElementById("calculate").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
    } else if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    resultElement.textContent = "Division by zero is not allowed.";
                    return;
                }
                result = num1 / num2;
                break;
        }
        resultElement.textContent = `Result: ${result}`;
    } else {
        resultElement.textContent = "Please enter a valid operator (+, -, *, /).";
    }
});
