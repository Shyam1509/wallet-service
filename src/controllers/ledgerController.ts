import Ledger from "../model/ledgerModel";
import Wallet from "../model/walletModel";

const createLedger = async (req, res, next) => {
  try {
    const { user_id, transaction_id, type, amount, status, description } = req.body;

    console.log("Received data:", req.body);

    if (!user_id || !transaction_id || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if wallet exists
    let wallet = await Wallet.findOne({ user_id });

    if (!wallet) {
      console.log("No wallet found, creating a new wallet for user:", user_id);

      wallet = new Wallet({
        user_id,
        balance: 0,
        available_balance: 0,
        currency: "INR",
      });

      await wallet.save();
      console.log("Wallet created successfully.");
    }

    // Now create the ledger entry (even if the wallet was just created)
    console.log("Creating ledger entry...");

    const newEntry = new Ledger({
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
