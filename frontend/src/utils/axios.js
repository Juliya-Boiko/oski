import axios from 'axios';
import { API_KEYS } from '../constants';
import { getUserInfo } from './storage';
export const axiosInstance = axios.create({
  baseURL: API_KEYS.BASE_URL
});

export const signUser = async (values) => {
  // console.log(values);
  try {
    const { data } = await axiosInstance.post(`${API_KEYS.SIGN}`, values);
    console.log(data.data);
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
    console.log(data);
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
    console.log(data);
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
    // console.log(data);
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
    // console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendResults = async (values) => {
  const user = getUserInfo();
  try {
    // const { data } = await axiosInstance.get(`${API_KEYS.QUIZ}/${id}`, {
    //   headers: {
    //     Authorization: `Bearer ${user.token}`
    //   }
    // });
    console.log(values);
    // return data.data;
  } catch (error) {
    console.log(error);
  }
};