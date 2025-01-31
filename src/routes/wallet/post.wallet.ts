import express from 'express';

const wallerRoutes = express.Router();

wallerRoutes.post('/', createWallet);


export default wallerRoutes;