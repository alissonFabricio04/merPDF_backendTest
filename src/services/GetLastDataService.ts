import prismaClient from "../prisma";

class GetLastData {
    async execute() {
        const resultSelectDb = await prismaClient.dadosContratoComercial.findMany({
            take: 1,
            orderBy: {
                created_at: "desc"
            }
        })

        return resultSelectDb
    }
}

export { GetLastData }