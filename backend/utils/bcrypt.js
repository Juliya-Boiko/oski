import { genSaltSync, hashSync, compareSync } from "bcrypt";

export const hashPassword = (password) => {
  const saltPassword = hashSync(password, genSaltSync(10));
  return saltPassword;
};

export const comparePasswords = (password, userPassword) => {
  const isValid = compareSync(password, userPassword);
  return isValid;
};