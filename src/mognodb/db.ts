import mongoose from 'mongoose'

const configs = {
    development :{
        connection:
            process.env.DATABASE_CONNECTION_URI_DEV
            
        },
        staging :{
            connection:
            process.env.DATABASE_CONNECTION_URI_STAGING    
            
        },
        testing:{
            connection:
            process.env.DATABASE_CONNECTION_URI_TEST
        }
    }
    const config = configs[process.env.NODE_ENV||  'development'].connection
    export const dbConnection = async ()=>{
    mongoose.set('strictQuery', false)
    return await mongoose.connect(config,{ retryWrites: true, w: 'majority' },)
}   