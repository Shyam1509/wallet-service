import express from 'express';
import createLedger from '../../controllers/ledgerController';

const ledgerRoutes = express.Router();

ledgerRoutes.post('/', createLedger);

export default ledgerRoutes;