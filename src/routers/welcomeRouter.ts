import { Router } from 'express';
import { getWelcome } from '../controllers/welcomeController.js';

const welcomeRouter = Router();

welcomeRouter
  .get('/welcome', getWelcome);

export default welcomeRouter;