let r = '';
let o = '';
let i = '';

function pressNumber(num) {
    i = i + num
    document.getElementById('display').value = i;
}

function performOperation(operator) {
    if (i === '') return;
    o = i;
    r = operator;
    i = '';
    document.getElementById('display').value = "";
}

function calculatorResult() {
    if (i === '' || o === '') return;
    let result;
    switch (r) {
        case '+':
            result = parseFloat(o) + parseFloat(i);
            break;
        case '-':
            result = parseFloat(o) - parseFloat(i);
            break;
        case '*':
            result = parseFloat(o) * parseFloat(i);
            break;
        case '/':
            result = parseFloat(o) / parseFloat(i);
            break;
        default:
            result;
        {
        i = result;
        o = '';
        r = '';
        document.getElementById('display').value = result;
        }

        function clearDisplay() {
            i = '';
            o = '';
            r = '';
            document.getElementById('display').value = '';
        }
    }
}



let calc = new Calc();
let operands = document.getElementsByClassName("operand");
for (index in operands) {
    if (Number(index).toString() === index) {
        operand = operands[index];
        operand.addEventListener("click", function(){
            calc.setOperand(Number(this.innerHTML));
            console.log(calc.operand);
        });
    }
}

class Calc {
    operation = null;
    operand = "";
    setOperand = function(operand) {
        this.operand = this.operand + operand.toString(); 
    }
    getOperand = function() {
        return this.operand;
    }
    resetOperand = function () {
        this.operand = "";
    }
    setOperation = function(operation) {
        this.operation = operation;
    }
    getOperation = function() {
        return this.operation;
    }
    resetOperation = function () {
        this.operation = null;
    }
}
