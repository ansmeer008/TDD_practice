//특정 상황에서 함수를 호출하는지 아닌지를 테스트 할 때는 mock을 이용할 수 있다.

const UserService = require("../user_service");
const UserClient = require("../user_client");

jest.mock("../user_client");

describe("userService", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("abc", "abc");
    await userService.login("abc", "abc");
    expect(login.mock.calls.length).toBe(1);
  });
});
