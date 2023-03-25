//TDD Challenge : Stack 구현하기
//원칙 1 : Last In First Out
//원칙 2 : push를 통해 stack의 마지막에 함수를 추가할 수 있다.
//원칙 3 : pop을 통해 stack에서 마지막에 있는 함수를 삭제할 수 있다.

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    const newStack = [...this.stack, item];
    this.stack = newStack;
  }

  pop() {
    const newStack = this.stack.slice(0, this.stack.length - 1);
    this.stack = newStack;
  }
}

module.exports = Stack;
