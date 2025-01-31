import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const walletSchema = new Schema({
  wallet_id: { type: String, default: uuidv4, unique: true },
  user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: Number, default: 0 },
  available_balance: { type: Number, default: 0 },
  currency: { type: String, default: 'INR' },
},
{
    timestamps:true,
});

const walletModel = mongoose.model('Wallet', walletSchema);
export default walletModel;
