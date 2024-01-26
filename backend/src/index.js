import app from "./app.js"
import { config } from "./config/config.js"
import { ConnectDB } from "./config/db.js"

// Database conection
ConnectDB()

app.listen(config.PORT, () =>
  console.log(
    `Server is running on port ${config.PORT} in ${config.NODE_ENV} mode`
  )
)
