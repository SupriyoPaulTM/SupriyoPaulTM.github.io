const advElement = document.getElementById('advice');
const genBtn = document.getElementById('gen-btn');

genBtn.onclick = () => {
  genBtn.textContent = 'Generate Again';
  getAdv();
}

async function getAdv() {
  let advData = await fetch('https://api.adviceslip.com/advice');
  let advObj = await advData.json();
  let advTxt = advObj.slip.advice;
  advElement.textContent = advTxt;
  console.log(advTxt);
}

getAdv();