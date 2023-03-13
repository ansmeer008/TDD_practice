class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id, password) {
    if (!this.isLoggedIn) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLoggedIn = true));
    }
  }
}

module.exports = UserService;

//UserClient라는 클래스를 따로 만드는 이유는
//만약 UserService 내부적으로 fetch를 하게 되면 네트워크에 대한 의존성이 생기므로 단위 테스트가 어려워진다.
