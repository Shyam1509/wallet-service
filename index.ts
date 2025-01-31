import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { dbConnection } from './src/mognodb/db';
const PORT = process.env.PORT || 3000
const app  = express()

app.use(express.json()) 




app.listen(PORT,async ()=>{
   console.log("server is running on " + `${PORT}`) 
   await dbConnection   
})


process.on('unhandledRejection', function (reason, promise) {
       console.error( 'Unhandled rejection', { reason, promise })
  });
