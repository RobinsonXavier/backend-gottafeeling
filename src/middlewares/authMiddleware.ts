import { NextFunction, Request, Response } from 'express';
import authRepository from '../repositories/authRepository.js';


export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const{ token } = req.headers as { token: string };
  const newToken = token.replace('Bearer ', '');

  try {
    const session = await authRepository.getSessionByToken(newToken);

    if(!session) {
      return res.status(401).send("unauthorized access");
    }

    res.locals.userId = session.userId;

    return next();

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}