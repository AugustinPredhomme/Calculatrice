class Calculator {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
      this.result = 0;
      this.resultDisplay = document.getElementById('result-display');
    }
  
    reset() {
        this.result = 0;
        this.updateDisplay()
    }

    add() {
        this.result = this.num1 + this.num2;
        this.updateDisplay();
    }

    subtract() {
        this.result = this.num1 - this.num2;
        this.updateDisplay();
    }

    multiply() {
        this.result = this.num1 * this.num2;
        this.updateDisplay();
    }

    divide() {
    if (this.num2 !== 0) {
        this.result = this.num1 / this.num2;
        this.updateDisplay();
    } else {
        console.error("Division by zero is not allowed.");
    }
    }

    updateDisplay(){
        this.resultDisplay.textContent = "Résultat : " + this.result;
    }
}

const myCalculator = new Calculator(5, 3);

myCalculator.add();
console.log("Addition: " + myCalculator.result);

myCalculator.subtract();
console.log("Substraction: " + myCalculator.result);

myCalculator.multiply();
console.log("Multiplication: " + myCalculator.result);

myCalculator.divide();
console.log("Division: " + myCalculator.result);

myCalculator.reset();
console.log("Reset: " + myCalculator.result);

myCalculator.updateDisplay()