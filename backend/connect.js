import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://mandaviyahimanshu:l3Nis9j5QMuSyQ4r@cluster0.zmgx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("database connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;