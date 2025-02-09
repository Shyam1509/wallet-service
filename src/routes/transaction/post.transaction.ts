import express from 'express';
import createTransaction from '../../controllers/transactionController';
import validateTransaction from '../../middleware/validationTransaction';

const transactionRoutes = express.Router();

transactionRoutes.post('/', validateTransaction, createTransaction);

export default transactionRoutes;