import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URl)
        console.log(`connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`error in Monogdb ${error}`.bgRed.white)
    }
};

export default connectDB;