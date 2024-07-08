/* Hello Internet ✨ , find the link to the instruction right here ⬇️
https://exercism.org/tracks/javascript/exercises/high-score-board */

/* Task 1: Creates a new high score board
returns {Record<string, number>} new score board */
function createScoreBoard() {
    return {
      "The Best Ever": 1000000
    }
}

/* Task 2: Adds a player to a score board
param {Record<string, number>} scoreBoard
param {string} player
param {number} score
returns {Record<string, number>} updated score board */
function addPlayer(scoreBoard, player, score){
  let key = player;
  scoreBoard[key] = score;
  return scoreBoard
}

/* Task 3: Removes a player from a score board.
param {Record<string, number>} scoreBoard
param {string} player
 returns {Record<string, number>} updated score board */
function removePlayer(scoreBoard, player) {
  const key = player;
  delete scoreBoard[key];
  return scoreBoard
}

/* Increases a player's score by the given amount.
 param {Record<string, number>} scoreBoard
 param {string} player
 param {number} points
 returns {Record<string, number>} updated score board */
 function updateScore(scoreBoard, player, points) {
  const key = player;
  scoreBoard[key]+=points;
  return scoreBoard
 }

 /* Applies 100 bonus points to all players on the board.
param {Record<string, number>} scoreBoard
returns {Record<string, number>} updated score board */
function applyMondayBonus(scoreBoard) {
  for (let player in scoreBoard){
    scoreBoard[player]+=100
    console.log(scoreBoard)
  };
  return scoreBoard
}

/* Normalizes a score with the provided normalization function.
param {Params} params the parameters for performing the normalization
returns {number} normalized score */
function normalizeScore(params) {
  let actualScore = params.score;
  console.log("The actual score is: " + actualScore)
  let normalizedScore = params.normalizeFunction(actualScore);
  console.log("The New Score is: " + normalizedScore)
return normalizedScore
}
