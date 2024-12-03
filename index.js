//n элементы формы
const form = document.forms.mainForm;
const lengthPass = form.elements.passLen;
// const btnGeneratePass = form.elements["create-pass"];
// const rButton = form.elements.selection;
const className = "copy";
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

function copyPasswd(e) {
  // const target = e.target;

  const pass = e.target.closest(".pass-item");
  let comeText = "";

  if (pass) {
    const activeItem = e.currentTarget.querySelector(`.${className}`);
    comeText = pass.textContent;
    pass.textContent = "Скопировано";
    if (activeItem) {
      activeItem.classList.remove(classNa`me);
      activeItem.textContent = comeText;
    }
    navigator.clipboard.writeText(comeText);
    pass.classList.add(className);
  }
}

resultGeneratesPass.addEventListener("click", copyPasswd);
form.addEventListener("submit", generateMultyPass);
