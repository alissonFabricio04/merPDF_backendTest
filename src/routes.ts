import { Router } from "express"

import { ReciverDataController } from "./controllers/ReciverDataController"
import { GetLastDataController } from "./controllers/GetLastDataController"

const router = Router()

const reciverDataController = new ReciverDataController()
const getLastDataController = new GetLastDataController()

router.post("/api/pdf/env", reciverDataController.handle)
router.get("/api/last/data", getLastDataController.handle)

export { router }