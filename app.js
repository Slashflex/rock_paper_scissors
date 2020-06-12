let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const smallUserWord = 'user'.fontsize(3).sub();
const smallCompWord = 'cpu'.fontsize(3).sub();

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

const win = (user, computer) => {
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${user}${smallUserWord} beats ${computer}${smallCompWord}. You Win 👍`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

const lose = (user, computer) => {
  const userChoice_div = document.getElementById(user);
  computerScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user}${smallUserWord} loses to ${computer}${smallCompWord}. You lost 💩`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

const draw = (user, computer) => {
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${user}${smallUserWord} equals ${computer}${smallCompWord}. It's a draw`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, computerChoice);
      break;
  }
};

const main = () => {
  rock_div.addEventListener("click", () => {
    game("Rock");
  });

  paper_div.addEventListener("click", () => {
    game("Paper");
  });

  scissors_div.addEventListener("click", () => {
    game("Scissors");
  });
};

main();
