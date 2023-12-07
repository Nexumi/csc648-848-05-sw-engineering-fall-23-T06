import axios from 'axios';
import Cookies from 'js-cookie';
import {apiAuth, apiCheckPin, apiLogin, apiPin, apiRegistration, apiTest, apiTracking} from './uri';

/* Axios Config */
axios.defaults.baseURL = import.meta.env.PROD ? "https://api.orderowl.jpkit.us" : "/";
axios.interceptors.request.use(
  config => {
    const token = Cookies.get('token');

    if (token) {
      config.headers!['Authorization'] = "Bearer " + token;
    }

    return config;
  }
)

/* API Calls */

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
  userId: string,
  searchText: string,
  hidden: string,
  pin: string,
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
  userId: string,
  trackingNumber: string,
  title: string,
  type: string,
}) => {
  const response = await axios.post(apiTracking(), params);
  return response;
}

export const getTrackingCount = async (params: {
  userId: string
}) => {
  try {
    const response = await axios.get(`${apiTracking()}/count?${new URLSearchParams(params).toString()}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const deleteTrackingById = async (params: {
  id: string
}) => {
  const response = await axios.delete(`${apiTracking()}/delete/${params.id}`);
  return response;
}

export const postRegistration = async (params: {
  firstname: any,
  lastname: any,
  email: any,
  password: any,
  role: any
}) => {
  const response = await axios.post(apiRegistration(), params);
  return response;
}

export const getLogin = async (params: {
  email: string,
  password: string
}) => {
  const response = await axios.post(apiLogin(), params);
  return response;
}

export const deleteUserById = async (params: {
  id: string
}) => {
  const response = await axios.delete(`${apiRegistration()}/delete/${params.id}`);
  return response;
}

export const getUser = async (params: {
  email: string
}) => {
  const response = await axios.get(`${apiAuth()}?email=${params.email}`);
  return response;
}

export const putPin = async (params: {
  pin: any
})=> {
  const response = await axios.put(apiPin(), params);
  return response;
}

export const getHidden = async (params: {
  email: string,
  pin: string
})=> {
  const response = await axios.post(apiCheckPin(), params);
  return response;
}
