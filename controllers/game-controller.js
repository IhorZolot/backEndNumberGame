
let randomNumber;

const startGame = (req, res) => {
  randomNumber = Math.floor(Math.random() * 10) + 1; 
  console.log(`Згенероване число: ${randomNumber}`); 
  res.json({ message: 'Гра розпочата! Вгадайте число від 1 до 10.' });
}

const guessGame = (req, res) => {
  const { guess } = req.body; 
  if (!guess) {
    return res.status(400).json({ message: 'Будь ласка, надайте число.' });
  }

  const playerGuess = parseInt(guess, 10);

  if (isNaN(playerGuess)) {
    return res.status(400).json({ message: 'Будь ласка, введіть коректне число.' });
  }

  if (playerGuess < randomNumber) {
    return res.json({ message: 'Більше' });
  } else if (playerGuess > randomNumber) {
    return res.json({ message: 'Менше' });
  } else {
    return res.json({ message: 'Вгадано!' });
  }
}
  export default { startGame, guessGame }