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

async function getUserByEmail(email: string) {
  const response = await prisma.user.findFirst({
    where:{
      email
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
  getGenders
};

export default authRepository;