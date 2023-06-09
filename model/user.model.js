import joi from "joi";

export const cadastromodel = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

export const loginmodel = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  