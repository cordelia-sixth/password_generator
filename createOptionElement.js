// password-length selectにoptionを追加する

let optionElement = "";
for (let i = 4; i <= 30; i++) {
  optionElement += `<option value='${i}'>${i}</option>`; 
}

document.getElementById("password-length").innerHTML = optionElement;