import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import formRoutes from "./routes/form.routes.js"
import responseRoutes from "./routes/response.routes.js"
import connectToMongoDb from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser"
import cors from "cors";

dotenv.config()
const PORT = process.env.PORT || 5000

// const __dirname = path.resolve()
const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/form", formRoutes)
app.use("/api/response", responseRoutes)

// app.use(express.static(path.join(__dirname, "/frontend/dist")))


// app.get('*', (req, res) => {
//   res.send(path.join(__dirname, "frontend", "dist", "index.html"))
// })
app.use('/', (req, res) =>{
  res.send('Hello')
  console.log('server is running')
})

app.listen(PORT, () => {
  connectToMongoDb()
  console.log(`Server is running at ${PORT}`)
})