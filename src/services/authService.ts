import authRepository from '../repositories/authRepository.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
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

async function signin(params: SigninParams) {
  const { email, password} = params;

  const checkEmail = await authRepository.getUserByEmail(email);

  if(!checkEmail) {
    throw notFoundError("Email or password are not correct");
  }

  const compare = await bcrypt.compare(password, checkEmail.password);

  if(!compare) {
    throw notFoundError("Email or password are not correct");
  }

  const token = uuidv4();

  const session = await authRepository.createSession(checkEmail.id, token);

  console.log(session)

  return session;
}

async function signupGenderData() {
  const response = await authRepository.getGenders();

  if(!response[0]) {
    throw notFoundError("Server Data not found");
  }

  return response;

}
type SigninParams = Pick<User, "email" | "password">
type SignupParams = Pick<User, "email" | "username" | "genderId" | "password">

const authService = {
  signup,
  signin,
  signupGenderData
};

export default authService;