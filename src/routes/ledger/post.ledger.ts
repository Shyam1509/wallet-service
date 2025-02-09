import express from 'express';
import createLedger from '../../controllers/ledgerController';
import validateLedger from '../../middleware/validateLedger';

const ledgerRoutes = express.Router();

ledgerRoutes.post('/', validateLedger, createLedger);

export default ledgerRoutes;