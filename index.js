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