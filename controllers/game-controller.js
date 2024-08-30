
let randomNumber;

const startGame = (req, res) => {
  randomNumber = Math.floor(Math.random() * 10) + 1; 
  console.log(`Згенероване число: ${randomNumber}`); 
  res.send({ message: 'Гра розпочата! Вгадайте число від 1 до 10.' });
}

const guessGame = (req, res) => {
  const { guess } = req.body; 

  const playerGuess = parseInt(guess, 10);

  if (isNaN(playerGuess)) {
    return res.status(400).json({ message: 'Будь ласка, введіть коректне число.' });
  }

  if (playerGuess < randomNumber) {
    res.send({ message: 'Загадане число більше' });
  } else if (playerGuess > randomNumber) {
    res.send({ message: ' Загадане число меньше' });
  } else {
    res.send({ message: 'Число вгадано'  });
  }
}
  export default { startGame, guessGame }