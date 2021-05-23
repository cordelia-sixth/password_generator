const generate = () => {

  // 生成するパスワードの長さ
  const passLength = parseInt(document.getElementById("passlength-select").value);

  // 生成されたパスワードを表示するエレメント
  const result = document.getElementById("result");

  let password = '';

  // パスワードに使う文字
  const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  // パスワードに使う文字列の長さ
  const charLength = charSet.length;



  for (let i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charLength));
  }
  
  // パスワードを表示
  result.value = password;
}