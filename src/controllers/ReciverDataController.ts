import { Request, Response } from "express"
import { ReciverDataService } from "../services/ReciverDataService"

class ReciverDataController {
    async handle(request: Request, response: Response) {

        const dados  = request.body

        const service = new ReciverDataService()
        const result = service.execute(dados)

        return response.json(result)
    }
}

export { ReciverDataController }