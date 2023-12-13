import axios from 'axios';
import { API_KEYS } from '../constants';
import { getUserInfo } from './storage';
export const axiosInstance = axios.create({
  baseURL: API_KEYS.BASE_URL
});

export const loginUser = async (values) => {
  try {
    const { data } = await axiosInstance.post(`${API_KEYS.LOGIN}`, values);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (user) => {
  if (!user) return null;
  try {
    const { data } = await axiosInstance.get(`${API_KEYS.USER}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAssigned = async () => {
  const token = getUserInfo();
  try {
    const { data } = await axiosInstance.get(`${API_KEYS.ASSIGNED}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuizById = async (id) => {
  const token = getUserInfo();
  // console.log(token);
  try {
    const { data } = await axiosInstance.get(`${API_KEYS.QUIZ}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};