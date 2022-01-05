import { areaTotalInstalacao } from "./calc/etapa3/areaTotalInstalacao"
import { mediaConsumo } from "./calc/etapa1/mediaConsumo"
import { mediaIrradiacaoSolar } from "./calc/etapa2/mediaIrradiacao"
import { potenciaDeGeracaoDeModulos } from "./calc/etapa3/potenciaModulos"
import { totalDePaineis } from "./calc/etapa4/totalDePaineis"
import { potenciaTotalMaximaSistema } from "./calc/etapa5/potenciaTotalMaximaSistema"
import { AddDbDataService } from "./AddDbDataService"

interface Idados {
    VarName: string
    VarEmail: string
    VarConsumo: number[]
    VarIrradiacaoSolar: number[]
    VarModeloPainel: string
    VarAreaPainel: number
    VarEficienciaPainel: number
    VarPotenciaModulo: number
    VarTensaoFornecimento: number
    VarCorrenteDisjuntor: number
    VarFatorPotencia: number
    VarRaiz3: number
}

class ReciverDataService {
    async execute(dados: Idados) {
        // Etapa 1
        const resultConsumo = mediaConsumo(dados.VarConsumo)

        // Etapa 2
        const resultIrradiacao = mediaIrradiacaoSolar(dados.VarIrradiacaoSolar)

        // Etapa 3
        const resultPotenciaDeGeracao = potenciaDeGeracaoDeModulos(
            resultIrradiacao, dados.VarAreaPainel, dados.VarEficienciaPainel
        )

        // Etapa 4
        const resultTotalPaineis = totalDePaineis(resultConsumo, resultPotenciaDeGeracao, dados.VarPotenciaModulo)

        // Etapa 3
        const resultAreaTotalInstalacao = areaTotalInstalacao(
            dados.VarAreaPainel, resultTotalPaineis.totalDeModulosAplicados
        )

        const potenciaTotalMaxSistemaKWP = potenciaTotalMaximaSistema(
            dados.VarTensaoFornecimento, dados.VarCorrenteDisjuntor, dados.VarFatorPotencia, dados.VarRaiz3
        ) 

        const totalDeModulosAplicados = resultTotalPaineis.totalDeModulosAplicados
        const potenciaSistema = resultTotalPaineis.potenciaSistema
        const potenciaInversor = resultTotalPaineis.potenciaInversor
        const idPainelName = dados.VarModeloPainel
        const NameClient = dados.VarName
        const EmailClient = dados.VarEmail

        /*
        console.log({
            NameClient, // Name
            EmailClient, // Email
            idPainelName, // IdPainelName
            
            // Etapa 1
            resultConsumo, // MConsumo

            // Etapa 2
            resultIrradiacao, // MIrradiacao

            // Etapa 3
            resultPotenciaDeGeracao, // PModulos
            resultAreaTotalInstalacao, // AreaTInstalacao 

            // Etapa 4
            totalDeModulosAplicados, // TModulosAplicados
            potenciaSistema, // PSistema
            potenciaInversor, // PInversor 

            // Etapa 5
            potenciaTotalMaxSistemaKWP // PTMaxSistemaKWP 
        })
        */

        const AddDb = new AddDbDataService()
        const resultDb = await AddDb.execute(
            NameClient, EmailClient, idPainelName, resultConsumo, resultIrradiacao, resultPotenciaDeGeracao, 
            resultAreaTotalInstalacao, totalDeModulosAplicados, potenciaSistema, potenciaInversor, potenciaTotalMaxSistemaKWP
        )
            .then(response => console.log("tudo ocorreu bem"))
            .catch(response => console.log("falhou", response))

        return resultDb
    }
}

export { ReciverDataService }