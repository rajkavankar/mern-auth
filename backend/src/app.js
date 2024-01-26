import express from "express"
import router from "./routes/index.js"
import { config } from "./config/config.js"
import morgan from "morgan"
const app = express()

import cors from "cors"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

if (config.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use("/api", router)

export default app
