// パスワードを生成する
const generate = () => {
  // character selectを取得
  const charOption = document.querySelectorAll("input[name=character-select]:checked");
  
  // 何もチェックされてなければエラーメッセージを返す
  if (charOption.length === 0) {
    return;
  }

  // パスワードに使う文字
  let charSet = "";
  charOption.forEach(character => {
    if (character.value === "lowercase") {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (character.value === "uppercase") {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (character.value === "numbers") {
      charSet += "0123456789";
    }
    if (character.value === "symbols") {
      charSet += "!@#$%^&*()+{}[]<>?";
    }
  });

  // 生成したいパスワードの長さ
  const passLength = parseInt(document.getElementById("password-length").textContent);

  // 生成されたパスワードを表示する要素
  const resultElement = document.getElementById("result");

  // 生成されたパスワードを格納
  let password = "";

  // パスワードに使う文字数
  const charLength = charSet.length;

  // 生成したいパスワードの長さの分だけ回す
  for (let i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charLength));
  }
  
  // パスワードを表示
  resultElement.value = password;
}