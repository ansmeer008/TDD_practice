class Calculator {
  constructor() {
    this.value = 0;
  }

  set(num) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }
  //처음에 이전 코드에다 아래 if문을 추가하면 coverage에 Uncovered Line에 17번 라인이 커버되지 않는다고 뜬다.
  add(num) {
    const sum = this.value + num;
    if (sum >= 100) {
      throw new Error("Value can not be greater than 100");
    }
    this.value = sum;
  }

  substract(num) {
    this.value = this.value - num;
  }

  multiply(num) {
    this.value = this.value * num;
  }

  divide(num) {
    this.value = this.value / num;
  }
}

module.exports = Calculator;
