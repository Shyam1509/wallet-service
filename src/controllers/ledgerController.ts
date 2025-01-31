import Ledger from "../model/ledgerModel";


const createLedger = async (req, res, next) => {

    try {
        
        const { user_id, transaction_id, type, amount, status, description} = req.body;

        const newEntry = new Ledger ({
            user_id,
            transaction_id,
            type,
            amount,
            status,
            description
        })

        await newEntry.save();

        res.status(200).json({ message: 'Ledger entry created succesfully', Ledger: newEntry})
    } catch (error) {
        res.status(500).json({ message: 'Failed to create a ledger entry'})
    }
}

export default createLedger;