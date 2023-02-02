import { Request, Response } from 'express';
import welcomeService from '../services/welcomeService.js';

export async function getWelcome(req: Request, res: Response) {
  try {
    const response = await welcomeService.getWelcome();
    return res.status(200).send(response);
  } catch (error) {
    if(error.name === "NotFound") {
      console.log(error.message);
      return res.sendStatus(404);
    }
    console.error(error);
    return res.sendStatus(500);
  }
}