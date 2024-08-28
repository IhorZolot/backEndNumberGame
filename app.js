import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Ласкаво просимо до гри "Вгадай число"!');
});

export default app; 