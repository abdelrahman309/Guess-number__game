let againBtn = document.querySelector(".again-btn");
let inpNum = document.querySelector("#counter");
let checkBtn = document.querySelector(".btn-check");
let heading = document.querySelector("h5");
let labelScore = document.querySelector(".label-score");
let score = document.querySelector(".score");
let highSc = document.querySelector(".highscore");
let labelHigh = document.querySelector(".label-highscore");
let paraQuest = document.querySelector(".p-quest");
//==SECRET NUMBER
let scoreValu = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let savedScore = Number(localStorage.getItem("highsec")) || 0;
highSc.textContent = savedScore;
checkBtn.addEventListener("click", function () {
  // scores values
  let inpVal = Number(inpNum.value);
  // check if input is empty
  if (!inpVal) {
    heading.textContent = `⛔ No Number !`;
  }
  // check of three condition than can happened
  if (inpVal === secretNumber) {
    heading.textContent = `🎉 Congrats You Got It !`;
    document.body.style.backgroundColor = "#06c75c";

    if (scoreValu > currentHigh) {
      localStorage.setItem("highsec", scoreValu);
      highSc.textContent = scoreValu;
    }

    paraQuest.textContent = inpVal;
  } else if (inpVal > secretNumber) {
    heading.textContent = `you're heigher than number`;
    scoreValu--;
    if (scoreValu === 0) {
      heading.textContent = `you lost the game`;
      document.body.style.backgroundColor = "red";
      document.body.style.color = "red";
      score.textContent = "0";
      checkBtn.disabled = true;
      paraQuest.textContent = "GameOver❌";
      return;
    }
    score.textContent = scoreValu;
    backGround();
  } else if (inpVal < secretNumber && inpVal !== 0) {
    heading.textContent = `you're Lower than number`;
    backGround();
    scoreValu--;
    if (scoreValu === 0) {
      heading.textContent = `you lost the game`;
      document.body.style.backgroundColor = "red";
      document.body.style.color = "red";
      score.textContent = "0";
      checkBtn.disabled = true;
      paraQuest.textContent = "GameOver❌";
      return;
    }
    score.textContent = scoreValu;
  }
});
// dry concept
function backGround() {
  document.body.style.backgroundColor = "#252525";
}
// on again clicked
againBtn.addEventListener("click", function () {
  inpNum.value = "";
  scoreValu = 20;
  score.textContent = scoreValu;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  backGround();
  paraQuest.textContent = "?";
  heading.textContent = "Start guessing...";
  document.body.style.color = "black";
  checkBtn.disabled = false;
});
inpNum.addEventListener("keydown", e =>
  e.key === "Enter" ? checkBtn.click() : console.log(`not valid key`)
);
