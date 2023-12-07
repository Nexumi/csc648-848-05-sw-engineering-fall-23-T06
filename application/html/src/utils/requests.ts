import axios from 'axios';
import Cookies from 'js-cookie';
import {apiAuth, apiCheckPin, apiGeocode, apiLogin, apiPin, apiRegistration, apiTest, apiTracking} from './uri';

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

export const getAllTracking = async (params: {
  userId: string
}) => {
  try {
    const response = await axios.get(`${apiTracking()}/all?userId=${params.userId}`);
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
    const response = await axios.get(`${apiTracking()}/search?${new URLSearchParams(params).toString()}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const postTracking = async (params: {
  userId: string,
  trackingNumber: string,
  title: string,
  hidden: boolean | string,
}) => {
  const response = await axios.post(`${apiTracking()}?userId=${params.userId}`, params);
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
}) => {
  const response = await axios.put(apiPin(), params);
  return response;
}

export const getHidden = async (params: {
  email: string,
  pin: string
}) => {
  const response = await axios.post(apiCheckPin(), params);
  return response;
}

export const getCoord = async (params: {
  address: string,
  key: string
}) => {
  const response = await fetch(`${apiGeocode()}?${new URLSearchParams(params).toString()}`);
  return response;
}

export const getUpdatesById = async (params: {
  id: string
}) => {
  const response = await axios.get(`${apiTracking()}/updates?${new URLSearchParams(params).toString()}`);
  return response;
}