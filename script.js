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