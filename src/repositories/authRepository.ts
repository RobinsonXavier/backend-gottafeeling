import prisma from '../config/db.js';
import { User } from '@prisma/client';

async function createUser(email: string, username: string, password: string, genderId: number): Promise<User> {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      genderId,
      email
    }
  })

  return response;
}

async function createSession(userId: number, token: string) {
  const response = await prisma.session.create({
    data: {
      userId,
      token
    }
  })

  return response;
}

async function getUserByEmail(email: string) {
  const response = await prisma.user.findFirst({
    where:{
      email
    }
  }) 

  return response;
}

async function getSessionByToken(token: string) {
  const response = await prisma.session.findFirst({
    where: {
      token
    }
  })

  return response;
}

async function getGenders() {
  const response = await prisma.gender.findMany();

  return response;
}

const authRepository = {
  createUser,
  getUserByEmail,
  getGenders,
  createSession,
  getSessionByToken
};

export default authRepository;