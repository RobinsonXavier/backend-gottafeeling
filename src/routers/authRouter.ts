import { Router } from 'express';
import {
  signup,
  getSignupGenderData
} from '../controllers/authController.js';

const authRouter = Router();

authRouter
  .get('/signup', getSignupGenderData)
  .post('/signup', signup);

export default authRouter;