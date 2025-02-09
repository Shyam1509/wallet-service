import Transaction from "../model/transactionModel";
import { v4 as uuidv4 } from "uuid";

const createTransaction = async (req, res, next) => {
  try {
    const { user_id, wallet_id, ledger_id, type, amount, status, description } =
      req.body;

    const transaction_id = await uuidv4();

    console.log("Received data:", req.body);

    const newTransaction = new Transaction({
      transaction_id,
      user_id,
      wallet_id,
      ledger_id,
      type,
      amount,
      status,
      description,
    });

    await newTransaction.save();

    res
      .status(200)
      .json({
        message: "Transaction entry created successfully",
        transaction: newTransaction,
      });
  } catch (error) {
    console.error("Error creating ledger entry:", error);
    res
      .status(500)
      .json({ message: "Failed to create a transaction entry", error: error });
  }
};

export default createTransaction;
