function add(a, b) {
  if (a + b >= 10) {
    throw new Error("this is not possible");
  }
  return a + b;
}

module.exports = add;

//테스트에 --watch 옵션을 사용하기 위해서는 git을 함께 사용한다.
//git에 커밋되지 않았지만 작성된 파일들이 존재할 때 해당 테스트를 watch하고,
//만약 모든 파일들이 commit 되어 있으면 npm test 했을 때
//"No tests found related to files changed since last commit"과 같은 문구가 뜸
