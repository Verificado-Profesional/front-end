import { CallServiceError } from '@/errors/callServiceError';

const BASE_URL = 'http://localhost:8000';

export const callService = async (endpoint, body) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  if (response.status === 200) {
    return response;
  }
  throw new CallServiceError(response.statusText, response.status);
};
