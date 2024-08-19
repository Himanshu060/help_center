import express, { json } from "express";
import router from "./routes/route.js";
import connectDB from "./connect.js";
import cors from "cors"

const app = express();
connectDB();
app.use(json());
app.use(cors());

app.use('/cards', router)


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server started running at ${PORT}`)
})
