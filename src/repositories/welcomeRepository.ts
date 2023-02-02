import prisma from '../config/db.js';

async function getWelcomeData() {
  const response = await prisma.welcome.findMany();

  return response;
}

const welcomeRepository = {
  getWelcomeData
}

export default welcomeRepository;

