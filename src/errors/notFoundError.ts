import { errorModel } from './errorTypes';

function notFoundError(message: string): errorModel {
  return {
    name: "NotFound",
    message
  }
}

export default notFoundError;