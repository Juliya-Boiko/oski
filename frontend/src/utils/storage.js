import { STORAGE_KEYS } from "../constants";

export const saveUserInfo = (user) => {
  localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(user));
};

export const getUserInfo = () => {
  const user = localStorage.getItem(STORAGE_KEYS.AUTH);
  return user ? JSON.parse(user) : undefined;
};

export const removeUserInfo = () => {
  localStorage.removeItem(STORAGE_KEYS.AUTH);
};