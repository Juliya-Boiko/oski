import Joi from "joi";

export const authSchema = Joi.object({
  password: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
});