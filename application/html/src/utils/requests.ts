import axios from 'axios';
import { apiRegistration, apiTest, apiTracking } from './uri';

axios.defaults.baseURL = import.meta.env.PROD ? "https://api.orderowl.jpkit.us" : "/";

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

export const deleteTestById = async (params: {
  id: number | string
}) => {
  const response = await axios.delete(`${apiTest()}/${params.id}`)
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

export const getTrackingById = async (params: {
  id: string
}) => {
  try {
    const response = await axios.get(`${apiTracking()}/${params.id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getTrackingBySearch = async (params: {
  searchText: string
}) => {
  try {
    if (params.searchText) {
      const response = await axios.get(`${apiTracking()}/search?${new URLSearchParams(params).toString()}`);
      return response.data;
    } else {
      const response = await axios.get(apiTracking());
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
}

export const postTracking = async (params: {
  trackingNumber: string,
}) => {
  const response = await axios.post(apiTracking(), params);
  return response;
}

export const getTrackingCount = async () => {
  try {
    const response = await axios.get(`${apiTracking()}/count`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const postRegistration = async (params: {
  first_name: any,
  last_name: any,
  password: any,
  email: any,
}) => {
  const response = await axios.post(apiRegistration(), params);
  return response;
}

export const getLogin = async (params: {
  email: string,
  password: string
}) => {
  const response = await axios.get(`${apiRegistration()}/search?${new URLSearchParams(params).toString()}`);
  return response;
}