import { Request, Response } from 'express';
import authService from '../services/authService.js';

export async function signup(req: Request, res: Response) {
  const {email, username, genderId, password} = req.body;

  try {
    await authService.signup({email, username, genderId, password});
    return res.status(201).send("CREATED");
  } catch (error) {
    if(error.name === "Conflict") {
      console.log(error.message);
      return res.status(409).send(error.message);
    }
    console.error(error);
    return res.sendStatus(400);
  }
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const response = await authService.signin({email, password});
    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
    return res.sendStatus(401);
  }
}

export async function getSignupGenderData(req: Request, res: Response) {
  try {
    const response = await authService.signupGenderData();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(404);
  }
}
