import welcomeRepository from '../repositories/welcomeRepository.js';
import notFoundError from '../errors/notFoundError.js';

async function getWelcome() {
  const response = await welcomeRepository.getWelcomeData();

  if(response.length === 0) {
    throw notFoundError("Welcome Data not found");
  }

  return response;
}

const welcomeService = {
  getWelcome
}

export default welcomeService;