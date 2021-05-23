const copyToClipboard = () => {
  // 生成されたパスワードを選択する
  document.getElementById('result').select();

  // クリップボードにコピー
  document.execCommand('Copy');

  // ボタンのテキストを変更
  document.getElementById('copy').textContent = "Copied";

  // ボタンのテキストを元に戻す
  const revertText = () => {
    document.getElementById('copy').textContent = "Copy";
  }

  setTimeout(revertText, 900);
}