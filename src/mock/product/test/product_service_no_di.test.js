const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

//네트워크 상태에 의존하는 테스트 코드는 좋지 않다.

//우리가 테스트하고 싶은 것은 ProductService이므로 ProductClient를 mock 하면 된다.
jest.mock("../product_client");

describe("ProductService", () => {
  //아래와 같이 fetchItems 함수를 작성해주면
  //mock 함수가 비동기적으로 아래의 배열을 리턴해주게 된다.
  const fetchItems = jest.fn(async () => {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  });

  //mockImplementation을 통해 ProductClient와 fetchItems를 연결해준다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //만약 config 파일에서 clearMock을 설정해주지 않는다면 아래 코드를 추가해주어야 한다.
    //fetchItems.mockClear();
    //productClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  //mock을 이용할 때 여러 테스트를 하는 경우 jest.config 파일에서 clearMock설정이 true여야만
  //테스트를 실행한 뒤 mock 관련 내용들이 초기화가 되어 다른 테스트에 영향을 주지 않는다.
  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});

//우리가 원하는 것은 ProductService 클래스를 테스트하는 것인데
//ProductService에서 어떤 클래스나 모듈을 사용하더라도 그것들의 영향을 받지 않도록
//나머지 모든 의존성에 대해서는 mock을 이용한 것.

//이렇게 mock을 이용하면, ProductClient에서 fetchItems가 fetch 통신을 하면서
//네트워크가 불안정함과 같이 환경적인 변수들에 영향을 받지 않고
//단순히 available에 해당하는 것만 잘 filter하는지 테스트를 진행할 수 있음.
