import {connect} from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// Connect to mongodb atlas database
export async function connectdb(){
    try {
        await connect(`mongodb+srv://${process.env.USER}:${process.env.DB_PASSWORD}@cluster0.jippb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
        console.error("DB Connected :)")
    } catch (error) {
        console.error(error)
        process.exit(1)
        
    }
}