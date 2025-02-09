import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const transactionSchema = new Schema(
  {
    transaction_id: { type: String, default: uuidv4, unique: true },
    user_id: { type: String, required: true },
    wallet_id: { type: String, default: null },
    ledger_id: { type: String, default: null },
    type: {
      type: String,
      enum: ["credit", "debit"],
    },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending"    
    },
    description: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);
export default transactionModel;
