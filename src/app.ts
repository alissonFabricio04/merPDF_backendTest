import express, { json } from "express"

import { router } from "./routes"

const app = express()
app.use(express.json())

app.use(router)

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))