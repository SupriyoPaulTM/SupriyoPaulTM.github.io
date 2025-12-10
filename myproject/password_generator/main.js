const passField = document.getElementById('pass');
const passLengthField = document.getElementById('pass-length');
const numChkBox = document.getElementById('num');
const slChkBox = document.getElementById('small-letters');
const blChkBox = document.getElementById('big-letters');
const symblChkBox = document.getElementById('symbols');
const prefixField = document.getElementById('prefix');
const suffixField = document.getElementById('suffix');
const genBtn = document.getElementById('gen-btn');
const copyBtn = document.getElementById('copy-btn');

const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smlLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?";

copyBtn.onclick = function() {
  navigator.clipboard.writeText(passField.value);
};

genBtn.onclick = function() {
  let passLength = Number(passLengthField.value);
  let prefix = prefixField.value;
  let suffix = suffixField.value;
  let charpool = "";
  let passValue = prefix;
  if (numChkBox.checked) {
    charpool += numbers;
  };
  if (slChkBox.checked) {
    charpool += smlLetters;
  };
  if (blChkBox.checked) {
    charpool += capLetters;
  };
  if (symblChkBox.checked) {
    charpool += symbols;
  };
  let genCount = passLength - (prefix.length + suffix.length);
  if (genCount < 0) {
    alert('Input Values are too big.')
  } else if (charpool === "") {
    alert('Please Select Atleast One Checkbox')
  } else {
    for (let i = 0; i < genCount; i++) {
      let rng = Math.floor(Math.random() * charpool.length);
      passValue += charpool[rng];
    };
    passValue += suffix;
    passField.value = passValue;
    genBtn.textContent = "Generate Again";
  };
};