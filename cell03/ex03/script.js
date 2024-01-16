document.getElementById('calculate').addEventListener('click', function() {
    const leftOperand = parseInt(document.getElementById('leftOperand').value);
    const rightOperand = parseInt(document.getElementById('rightOperand').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(leftOperand) || isNaN(rightOperand)) {
        alert('Error :(');
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case '%':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftOperand % rightOperand;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert('Please, use me...');
}, 30000);
