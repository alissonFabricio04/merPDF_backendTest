import { Request, Response } from "express"

class testGet {
    async handle(request: Request, response: Response) {
        const valor = 1
        const result = {
            valor
        }
        console.log("Vc chegou aqui!!!")
        return response.json(result);
    }
}

export { testGet }