import prismaClient from "../prisma"


class AddDbDataService {
    async execute(
        Name: string,
        Email: string,
        IdPainelName: string,
        MConsumo: number,
        MIrradiacao: number,
        PModulos: number,         
        AreaTInstalacao: number,     
        TModulosAplicados: number,    
        PSistema: number,   
        PInversor: number,            
        PTMaxSistemaKWP: number
    ) {
        return await prismaClient.dadosContratoComercial.create({
            data: {
                Name,              
                Email,          
                IdPainelName,         
                MConsumo,        
                MIrradiacao,         
                PModulos,         
                AreaTInstalacao,     
                TModulosAplicados,    
                PSistema,   
                PInversor,            
                PTMaxSistemaKWP      
            }
        })

    }
}

export { AddDbDataService }