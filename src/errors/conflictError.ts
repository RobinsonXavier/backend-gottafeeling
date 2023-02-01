import { errorModel } from './errorTypes';

function conflicError(message: string): errorModel {
  return {
    name: "CONFLICT",
    message 
  }
}

export default conflicError;