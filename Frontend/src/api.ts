import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: BASE_URL,
});

export async  function promptGPT(data: {chat_id: string, content: string}) {
  try {
    const response = await api.post('/prompt_gpt/', data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
}

export default api;