//TDD Challenge : Stack 구현하기
//원칙 1 : Last In First Out
//원칙 2 : push를 통해 stack의 마지막에 함수를 추가할 수 있다.
//원칙 3 : pop을 통해 stack에서 마지막에 있는 함수를 삭제할 수 있다.

//Refactoring : 테스트코드가 존재하기 때문에 Stack의 내부를 리팩토링하면서도
//구현하고자 하는 사항이 잘 구현되었는지 확인하며 진행할 수 있다.

class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }

    return this.head.item;
  }
}

module.exports = Stack;
