//n элементы формы
const form = document.forms.mainForm;
const lengthPass = form.elements.passLen;
// const btnGeneratePass = form.elements["create-pass"];
// const rButton = form.elements.selection;

const resultGeneratesPass = document.querySelector(".result");
// const btnCopy = document.querySelector(".config__btn-copy");

function checkBoxCheked() {
  const passwordType = document.querySelector(
    'input[name="selection"]:checked'
  ).value;

  const charsUpper = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  const charsLower = "abcdefghijklmnopqrstuvwxyz";
  const charsNumber = "0123456789";
  const charsSymbol = "!@#$%^&*()_:>?<";

  const jointCharsAll = `${charsUpper}${charsLower}${charsNumber}${charsSymbol}`;
  const jointCharsAlphSymb = `${charsUpper}${charsLower}${charsSymbol}`;
  const jointNumSymb = `${charsNumber}${charsSymbol}`;

  let charset = "";
  switch (passwordType) {
    case "all":
      charset = jointCharsAll;
      break;
    case "lettersymbols":
      charset = jointCharsAlphSymb;
      break;
    case "numssymbols":
      charset = jointNumSymb;
      break;
  }

  return charset;
}

function generatePass(lengthPass, chars) {
  let resultPass = "";

  for (let i = 0; i < lengthPass; i++) {
    const genRandomPass = Math.floor(Math.random() * chars.length);
    resultPass += chars[genRandomPass];
  }
  return resultPass;
}

function generateMultyPass(e) {
  const emptyArr = [];

  for (let i = 0; i < 10; i++) {
    emptyArr.push(generatePass(lengthPass.value, checkBoxCheked()));
  }
  resultGeneratesPass.innerHTML = "";

  for (const item of emptyArr) {
    const passItem = document.createElement("span");
    passItem.classList.add("pass-item");

    passItem.textContent = `${item}`;
    resultGeneratesPass.append(passItem);
  }

  e.preventDefault();
}

// function copyPassrowd() {}

resultGeneratesPass.addEventListener("click", (e) => {
  if (e.target.tagName == "SPAN") {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Пароль скопирован");
  }
});

form.addEventListener("submit", generateMultyPass);
