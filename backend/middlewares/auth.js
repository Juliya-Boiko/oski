import { verifyToken } from "../utils/jwt.js";
import User from "../models/User.js";

export const auth = async (req, res, next) => { 
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== 'Bearer') {
      throw new Error("Not authorized"); 
    }
    const id = verifyToken(token);
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found"); 
    }
    req.user = user;
    next();
  } catch (error) {
    error.status = 401;
    next(error); 
  }
};