var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var questions = [
  {
    question: "What is the actual name of Ironman? ",
    a: "Tony Stark",
    b: "Steve Rogers",
    c: "Peter Parker",
    answer: "a",
  },
  {
    question: "What is the name of Thor's hammer? ",
    a: "Vanir",
    b: "Mjolnir",
    c: "Aesir",
    answer: "b",
  },
  {
    question: "What is the callsign of Carol Denvers in her aircraft? ",
    a: "Avenger",
    b: "Photon",
    c: "Topgun",
    answer: "a",
  },
  {
    question:
      "The Flerkens are a race of extremely dangerous aliens that resembles what?",
    a: "Raccoons",
    b: "Dogs",
    c: "Cats",
    answer: "c",
  },
  {
    question: "About which city do Hawkeye and Black Widow often reminisce? ",
    a: "Prague",
    b: "Sokovia",
    c: "Budapest",
    answer: "c",
  },
];

var highScores = [
  {
    name: "Jeffrin",
    score: 5,
  },
  {
    name: "Alex",
    score: 3,
  },
];

var userName = readlineSync.question(chalk.cyan("Please enter your name "));
console.log(
  chalk.magenta("Welcome " + userName + " to " + chalk.bold.red("Marvel Quiz"))
);

function playGame(question, options, answer) {
  console.log(chalk.yellow(question));
  for (var i = 0; i < options.length; i++) {
    console.log(chalk.yellow(options[i][0], ":", options[i][1]));
  }
  var userAnswer = readlineSync.question("");
  if (
    userAnswer.toUpperCase() === "A" ||
    userAnswer.toUpperCase() === "B" ||
    userAnswer.toUpperCase() === "C"
  ) {
    for (var i = 0; i < options.length; i++) {
      if (options[i][0].toUpperCase() === userAnswer.toUpperCase()) {
        console.log(chalk.blue("You have entered: " + options[i][1]));
        break;
      }
    }
  } else {
    console.log(chalk.blue("You have entered an invalid option"));
  }

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log(chalk.green("You are right!"));
  } else {
    console.log(chalk.red("Sorry, Wrong Answer!"));
  }
}

function printHighScores() {
  console.log(chalk.blue("High Scores"));
  for (var i = 0; i < highScores.length; i++) {
    console.log(
      chalk.blue("Name:", highScores[i].name, "Score:", highScores[i].score)
    );
  }
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var options = [
      ["a", questions[i].a],
      ["b", questions[i].b],
      ["c", questions[i].c],
    ];
    playGame(questions[i].question, options, questions[i].answer);
  }
  if (score > 0) {
    console.log(chalk.green("YAY, You have scored " + score + " points"));
  } else {
    console.log(chalk.red("Please try again!"));
  }
}

function checkNewHighScore() {
  for (var i = 0; i < highScores.length; i++) {
    if (highScores[i].score < score) {
      console.log(
        chalk.yellow(
          "Congratulations Again " +
            userName +
            "!\nYou have marked High Score in the Quiz.\nKindly share me a screenshot of the score to update the High Score List."
        )
      );
      break;
    }
  }
}

game();
printHighScores();
checkNewHighScore();
