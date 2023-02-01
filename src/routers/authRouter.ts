import { Router } from 'express';
import {
  signup,
  signin,
  getSignupGenderData
} from '../controllers/authController.js';

const authRouter = Router();

authRouter
  .get('/signup', getSignupGenderData)
  .get('/signin', signin)
  .post('/signup', signup);

export default authRouter;