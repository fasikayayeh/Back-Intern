import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import applicationRoutes from "./routes/applicationRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/applications", applicationRoutes)

app.listen(5000, ()=>{
 console.log("Server running on port 5000")
})