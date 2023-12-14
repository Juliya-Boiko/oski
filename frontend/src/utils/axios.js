import axios from 'axios';
import { API_KEYS } from '../constants';
import { getUserInfo } from './storage';

export const axiosInstance = axios.create({
  baseURL: API_KEYS.BASE_URL
});

export const signUser = async (values) => {
  try {
    const { data } = await axiosInstance.post(`${API_KEYS.SIGN}`, values);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (user) => {
  console.log(user);
  if (!user) return null;
  try {
    const { data } = await axiosInstance.get(`${API_KEYS.USER}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  const user = getUserInfo();
  try {
    const { data } = await axiosInstance.post(`${API_KEYS.LOGOUT}`, {}, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getAssigned = async () => {
  const user = getUserInfo();
  try {
    const { data } = await axiosInstance.get(`${API_KEYS.ASSIGNED}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuizById = async (id) => {
  const user = getUserInfo();
  try {
    const { data } = await axiosInstance.get(`${API_KEYS.QUIZ}/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendResults = async (values) => {
  const user = getUserInfo();
  try {
    await axiosInstance.patch(`${API_KEYS.USER}`, values, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
  } catch (error) {
    console.log(error);
  }
};