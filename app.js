import express from 'express';
import cors from 'cors';

import gameRouter from './routes/api/game-router.js';

const app = express()
app.use(cors())
app.use(express.json());

app.use('/api', gameRouter) 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Внутрішня помилка сервера',
    }
  });
});

export default app; 