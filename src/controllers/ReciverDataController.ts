import { Request, Response } from "express"
import { ReciverDataService } from "../services/_ReciverDataService"


class ReciverDataController {
    async handle(request: Request, response: Response) {

        const { datas } = request.body

        const service = new ReciverDataService()
        const result = service.execute(datas)

        return response.json(result)
    }
}

export { ReciverDataController }