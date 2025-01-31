import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ledgerSchema = new Schema({
  ledger_id: { type: String, default: uuidv4, unique: true },
  user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  transaction_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', default: null },
  type: { type: String, enum: ['initial', 'bet', 'deposit', 'withdrawal', 'winning'] },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed'},
  description: { type: String, default: ""},
  createdAt: { type: Date, default: Date.now }
},
{
    timestamps:true,
});

const ledgerModel = mongoose.model('Ledger', ledgerSchema);
export default ledgerModel;
