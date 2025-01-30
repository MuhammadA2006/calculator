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