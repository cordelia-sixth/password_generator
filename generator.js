// パスワードを生成する

const generate = () => {
  // 生成したいパスワードの長さ
  const passLength = parseInt(document.getElementById("password-length").value);

  // 生成されたパスワードを表示する要素
  const resultElement = document.getElementById("result");

  // 生成されたパスワードを格納
  let password = '';

  // パスワードに使う文字
  const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // パスワードに使う文字数
  const charLength = charSet.length;

  // 生成したいパスワードの長さの分だけ回す
  for (let i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charLength));
  }
  
  // パスワードを表示
  resultElement.value = password;
}