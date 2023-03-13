//mock은 진짜가 아닌 진짜를 흉내내는 방식이지만 유사한 Stub를 이용한 테스트 방법도 있음.
//Stub는 기존에 쓰이는 진짜의 인터페이스를 다 충족하는, 실제로 구현된 코드인데 대체 가능한 것을 말한다.

//아래 StubProductClient는 네트워크에 의존하지 않는다.
class StubProductClient {
  async fetchItems() {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  }
}

module.exports = StubProductClient;
