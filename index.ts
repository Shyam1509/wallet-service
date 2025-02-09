import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { dbConnection } from './src/mognodb/db';
import ledgerRoutes from './src/routes/ledger/post.ledger';
import transactionRoutes from './src/routes/transaction/post.transaction';
const PORT = process.env.PORT || 3000
const app  = express()

app.use(express.json());

app.use('/ledger', ledgerRoutes);
app.use('/transaction', transactionRoutes);


(async () => {
   try {
     if ((await dbConnection())) {
       console.time(`⚡️ server started with 👍🏼 database connected http://localhost:${PORT} in `);
       app.listen(PORT, () => {
         console.timeEnd(`⚡️ server started with 👍🏼 database connected http://localhost:${PORT} in `);
       });
     }
   } catch (error) {
     console.timeEnd(`👎🏻 database or redis connection has some problem : ${JSON.stringify(error)}`);
   }
 })();


process.on('unhandledRejection', function (reason, promise) {
       console.error( 'Unhandled rejection', { reason, promise })
  });
