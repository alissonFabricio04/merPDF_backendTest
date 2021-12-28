import { Router } from "express"

import { ReciverDataController } from "./controllers/ReciverDataController"
import { testGet } from "./controllers/Controller"

const router = Router()

const reciverDataController = new ReciverDataController()
const controller = new testGet()

router.post("api/pdf/env", reciverDataController.handle)
router.get("api", controller.handle)

export { router }