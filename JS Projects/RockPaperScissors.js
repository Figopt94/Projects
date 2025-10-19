const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid choice');
  }
}


const getComputerChoice = () => {
  const cpuChoice = Math.floor(Math.random() * 3);

  if (cpuChoice === 0) {
    return 'rock';
  } else if (cpuChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let computerChoice = getComputerChoice();

// funcao para fazer a logica de quem ganha
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) { 
    return 'The game was a tie';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won';
    } else {
      return 'User won';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won';
    } else {
      return 'User won';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won';
    } else {
      return 'User won';
    }
  }

// Cheat code
  if (userChoice === 'bomb') {
    if (computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
      return 'User won';
    } 
  }
};

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('User: ' + userChoice);
  console.log('Computer: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();