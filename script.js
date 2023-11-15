class Calculator {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
      this.result = 0;
    }
  
    reset() {
        this.result = 0;
    }

    add() {
        this.result = this.num1 + this.num2;
    }

    subtract() {
        this.result = this.num1 - this.num2;
    }

    multiply() {
        this.result = this.num1 * this.num2;
    }

    divide() {
    if (this.num2 !== 0) {
        this.result = this.num1 / this.num2;
    } else {
        console.error("Division by zero is not allowed.");
    }
    }

    getResult() {
        return this.result;
    }
}

const myCalculator = new Calculator(5, 3);

myCalculator.add();
console.log("Addition : " + myCalculator.getResult());

myCalculator.subtract();
console.log("Subtraction : " + myCalculator.getResult());

myCalculator.multiply();
console.log("Multiplication : " + myCalculator.getResult());

myCalculator.divide();
console.log("Division : " + myCalculator.getResult());

myCalculator.reset();
console.log("Result after reset : " + myCalculator.getResult());