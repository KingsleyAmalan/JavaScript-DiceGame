const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersGoals) {
    console.log(playersGoals);
  },
};
/* Code challenge 2 start */

for (const [goalValue, ScoredPlayer] of game.scored.entries()) {
  console.log(`Goal ${goalValue + 1}:${ScoredPlayer}`);
}

const odd = Object.values(game.odds);
const prop = Object.keys(game.odds);
console.log(prop);
let sum = 0;
for (const od of odd) {
  sum += od;
}
console.log(`Average of odds is ${sum / odd.length}`);

for (const Prop of prop) {
  console.log(`Odd of victory ${game[Prop] ?? "Draw"} : ${game.odds[Prop]}`);
}

/* Code challenge 2 END */

/*Code challenge 1 start */
/*const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//const allPlayers = [...game.players];
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
game.printGoals(...game.scored);*/
/*Code challenge 1 END */
