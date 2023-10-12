import axios from 'axios';
import { apiTest, apiTracking } from './uri';

export const getAllTest = async () => {
  try {
    const response = await axios.get(apiTest());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const postTest = async (params: {
  word: string
}) => {
  const response = await axios.post(apiTest(), params);
  return response;
}

export const getAllTracking = async () => {
  try {
    const response = await axios.get(apiTracking());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}