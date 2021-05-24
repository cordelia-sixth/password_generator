// スライダーを操作できるようにする
const slider = document.getElementById("slider");
// 値を表示する要素
const result = document.getElementById("password-length");

// スライダーが操作されたら値を表示する
const changeLength = (order) => {
  if (order === "increment") {
    let length = parseInt(slider.value);
    length++;
    slider.value = length;
  } else if (order === "decrement") {
    let length = parseInt(slider.value);
    length--;
    slider.value = length;
  }

  // 値を表示する
  result.innerText = slider.value;
}