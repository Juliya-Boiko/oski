import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;

export const generateToken = (id) => {
  const token = jwt.sign(id, SECRET_KEY, { expiresIn: "4h" });
  return token;
};

export const verifyToken = (token) => {
  const { id } = jwt.verify(token, SECRET_KEY);
  return id;
};