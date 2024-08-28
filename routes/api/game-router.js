import express from 'express'
import gameController from '../../controllers/game-controller.js';

const gameRouter = express.Router()

gameRouter.post('/start_game', gameController.startGame );

gameRouter.post('/guess', gameController.guessGame );

export default gameRouter