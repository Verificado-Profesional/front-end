import { CallServiceError } from '@/errors/callServiceError';
import type { CallServiceProps } from '@/types/types';

const BASE_URL = 'http://localhost:8000';

export const callService = async ({
  method = 'POST',
  endpoint,
  body,
  params,
}: CallServiceProps) => {
  const response = await fetch(
    `${BASE_URL}/${endpoint}?${params ? new URLSearchParams(params) : ''}`,
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
  if (response.status === 200) {
    return response;
  }
  throw new CallServiceError(response.statusText, response.status);
};
