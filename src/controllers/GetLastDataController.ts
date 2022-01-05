import { Request, Response } from "express"
import { GetLastData } from "../services/GetLastDataService"

class GetLastDataController {
    async handle(request: Request, response: Response) {
        const service = new GetLastData()

        const result = await service.execute()

        return response.json(result);
    }
}

export { GetLastDataController }