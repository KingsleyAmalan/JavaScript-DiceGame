"use strict";
const rollDiceV = document.querySelector(".roldice");
const hold = document.querySelector(".Holdice");
const diceImg = document.querySelector(".diceImg");
const p1 = document.querySelector(".Player1");
const p2 = document.querySelector(".Player2");
const Scorep1txt = document.querySelector(".lblScorep1");
const Scorep2txt = document.querySelector(".lblScorep2");
const HighScorep1txt = document.querySelector(".lblHighScorep1");
const HighScorep2txt = document.querySelector(".lblHighScorep2");
let Scorep1 = 0,
  HighScorep1 = 0,
  Scorep2 = 0,
  HighScorep2 = 0,
  imgNo,
  activePlayer = 1;
function activePlayerfinder(player) {
  return player == 1 ? p1 : p2;
}
function HighScore(scorevalue) {
  let HighScoretext = activePlayer == 1 ? HighScorep1txt : HighScorep2txt;
  let HighScore =
    activePlayer == 1
      ? (HighScorep1 += scorevalue)
      : (HighScorep2 += scorevalue);

  HighScoretext.textContent = HighScore;
}

function rolldice() {
  imgNo = Math.trunc(Math.random() * 6 + 1);
  diceImg.src = `Images/${imgNo}.png`;
  let Score = activePlayer == 1 ? Scorep1 : Scorep2;

  let scoretext = activePlayer == 1 ? Scorep1txt : Scorep2txt;

  if (imgNo !== 1) {
    Score += imgNo;
    scoretext.textContent = Score;
    HighScore(Score);
  } else {
    let scoreBoard =
      activePlayer == 1
        ? (Scorep1txt.textContent = 0)
        : (Scorep2txt.textContent = 0);
    scoreBoard =
      activePlayer == 1
        ? (HighScorep1txt.textContent = HighScorep1 = 0)
        : (HighScorep2txt.textContent = HighScorep2 = 0);

    let PlayerID = activePlayerfinder(activePlayer);
    PlayerID.classList.remove("activePlayer");

    activePlayer = activePlayer == 1 ? 2 : 1;
    PlayerID = activePlayerfinder(activePlayer);
    PlayerID.classList.add("activePlayer");
  }
}

function holdClick() {
  let PlayerID = activePlayerfinder(activePlayer);
  PlayerID.classList.remove("activePlayer");
  activePlayer = activePlayer == 1 ? 2 : 1;
  PlayerID = activePlayerfinder(activePlayer);
  PlayerID.classList.add("activePlayer");
}

rollDiceV.addEventListener("click", rolldice);
hold.addEventListener("click", holdClick);
