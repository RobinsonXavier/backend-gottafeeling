import authRepository from '../repositories/authRepository.js';
import bcrypt from 'bcrypt';

import { User } from '@prisma/client';
import conflicError from '../errors/conflictError.js';
import notFoundError from '../errors/notFoundError.js';

async function signup(params: SignupParams) {
  const { email, username, password, genderId} = params;

  const checkEmail = await authRepository.getUserByEmail(email);
  
  if(checkEmail) {
    throw conflicError("This email already exist");
  }

  const hashpassword = await bcrypt.hash(password, 10);

  await authRepository.createUser(email, username, hashpassword, genderId);
}

async function signupGenderData() {
  const response = await authRepository.getGenders();

  if(!response[0]) {
    throw notFoundError("Server Data not found");
  }

  return response;

}

type SignupParams = Pick<User, "email" | "username" | "genderId" | "password">

const authService = {
  signup,
  signupGenderData
};

export default authService;