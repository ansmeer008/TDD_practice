//class 내부에서 스스로의 의존을 결정하고 만들어 사용하는 것은 dependency injection 원칙에 어긋나므로
//생성자 함수에 ProductClient를 외부에서 받아오도록 코드를 바꿈.
//아래와 같이 변경해서 작성하면 테스트를 할 때는 가짜 ProductClient를 주입해서 테스트 하면 되고,
//실제 Product에서는 실제 ProductClient를 주입해서 사용하면 된다.
class ProductService {
  constructor(ProductClient) {
    this.productClient = ProductClient;
  }
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
