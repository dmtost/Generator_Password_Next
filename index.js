//n элементы формы
const lengthPass = document.querySelector("#length-pass");
const allChars = document.querySelector("#allChars");
const onlyAplh = document.querySelector("#onlyAplh");
const onSymbols = document.querySelector("#onSymbols");

const resultGeneratePass = document.querySelector(".result");
const btnGenerate = document.querySelector(".config__btn-gen");
const btnCopy = document.querySelector(".config__btn-copy");

resultGeneratePass.textContent = lengthPass.value;
lengthPass.addEventListener("change", (e) => {
  resultGeneratePass.textContent = lengthPass.value;
});
