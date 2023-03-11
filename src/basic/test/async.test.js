const fetchProduct = require("../async");

//비동기 함수를 테스트 하는 방법
//1. 수동적으로 끝나는 시점 명시하기 : done이라는 인자를 받아서 종료되는 시점에 호출하기
//it은 두번째 콜백의 인자로 done 함수를 받을 수 있음.
describe("Asynce", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  //2.프로미스를 리턴하기
  //리턴문을 이용할 때보다 done을 이용하면 테스트 수행이 조금 더 느림.
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  //3. it의 콜백에 async await 적용하기
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  //4. resolves API 사용하기
  //비동기이기 때문에 return을 해주어야 함.
  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  //reject도 사용 가능
  it("async-resjects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
