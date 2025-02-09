import Ledger from "../model/ledgerModel";
import Wallet from "../model/walletModel";
import { v4 as uuidv4 } from "uuid";


const createLedger = async (req, res, next) => {
  try {
    const { wallet_id, user_id, transaction_id, type, amount, status, description } = req.body;

    
    // Check if wallet exists
    let wallet = await Wallet.findOne({ user_id });
    
    if (!wallet) {
      console.log("No wallet found, creating a new wallet for user:", user_id);
      
      // const wallet_id = await uuidv4();

      wallet = new Wallet({
        wallet_id,
        user_id,
        balance: 0,
        available_balance: 0,
        currency: "INR",
      });

      await wallet.save();
      console.log("Wallet created successfully.");
    }
    
    const ledger_id = await uuidv4();

    const newEntry = new Ledger({
      ledger_id,
      wallet_id,
      user_id,
      transaction_id,
      type,
      amount,
      status,
      description,
    });

    console.log("Ledger entry before save:", newEntry);

    await newEntry.save();

    console.log("Ledger entry created successfully:", newEntry);

    res.status(200).json({ message: "Ledger entry created successfully", Ledger: newEntry });
  } catch (error) {
    console.error("Error creating ledger entry:", error);
    console.error("Error Stack:", error);
    res.status(500).json({ message: "Failed to create a ledger entry", error: error });
  }
};        

export default createLedger;
