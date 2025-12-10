const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal.",
  "Dream big. Start small. Act now.",
  "Do something today your future self will thank you for.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Great things never come from comfort zones.",
  "The harder you work, the greater you'll feel.",
  "Push yourself, because no one else will.",
  "Stay positive, work hard, make it happen.",
  "Your limitation is only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Little things make big days.",
  "Hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Make your life a masterpiece.",
  "Every accomplishment starts with the decision to try.",
  "Be productive, not just busy.",
  "If you can dream it, you can do it.",
  "Small steps every day.",
  "You are capable of more than you know.",
  "Failure is the opportunity to begin again.",
  "Winners never quit.",
  "Work hard in silence, let success make the noise.",
  "A little progress each day adds up.",
  "Doubt kills more dreams than failure.",
  "Be stronger than your excuses.",
  "Success starts with self-discipline.",
  "Success doesn’t come from occasional work.",
  "Be led by your dreams, not problems.",
  "Your future begins today.",
  "Opportunities don’t happen, you create them.",
  "Be the energy you want to attract.",
  "Nothing works unless you do.",
  "Success is a journey, not a destination.",
  "If you never try, you’ll never know.",
  "Challenge your limits.",
  "Everything you want is on the other side of fear.",
  "Your only limit is you.",
  "Work until your idols become your rivals.",
  "Consistency creates excellence.",
  "Failures build success.",
  "The secret to getting ahead is getting started.",
  "Difficult roads lead to beautiful destinations.",
  "Don’t wish for it. Work for it.",
  "Prove to yourself that you can do it.",
  "What you do today improves tomorrow.",
  "Start where you are. Use what you have.", 
  "Discipline is choosing what you want most.", 
  "Better an oops than a what if.",
  "You don’t need to be perfect, just better than yesterday."
];

const textBox = document.getElementById("text-box");
const genBtn = document.getElementById("gen");
const copyBtn = document.getElementById("copy");
const historyElement = document.getElementById("history");

let quotesHistory = quotes.slice(0,6);

function historyRender() {
  document.querySelectorAll(".boxItem").forEach((e) => {
    e.remove();
  })
  for (let i = 1; i < quotesHistory.length; i++) {
    const box = document.createElement("div");
    box.classList.add("boxItem");
    box.textContent = quotesHistory[i];
    historyElement.appendChild(box);
  };
};

function generate() {
  let num = Math.random()*quotes.length;
  num = Math.floor(num);
  let randomPick = quotes[num];
  if (!quotesHistory.includes(randomPick)) {
    textBox.textContent = randomPick;
    quotesHistory.unshift(randomPick);
    quotesHistory.pop();
    historyRender();
  } else {
    generate();
  };
};

generate();
genBtn.onclick = generate;

copyBtn.onclick = function(){
  let copyText = textBox.textContent;
  navigator.clipboard.writeText(copyText);
};