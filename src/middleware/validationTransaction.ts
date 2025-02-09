import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    // transaction_id: Joi.string().required(),
    user_id: Joi.string().required(),
    wallet_id: Joi.string().required(),
    ledger_id: Joi.string().required(),
    type: Joi.string().valid("credit", "debit").required(),
    amount: Joi.number().min(0.01).required(),
    status: Joi.string().valid("pending", "completed", "failed"),
    description: Joi.string().allow(null, "").trim(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateTransaction;
