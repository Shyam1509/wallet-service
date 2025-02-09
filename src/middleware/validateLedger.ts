import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateLedger = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    transaction_id: Joi.string().required(),
    wallet_id: Joi.string().required(),
    // ledger_id: Joi.string().required(),
    type: Joi.string()
      .valid("initial", "bet", "deposit", "withdrawal", "winning")
      .required(),
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

export default validateLedger;
