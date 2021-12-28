import { mediaConsumo } from "./calc/mediaConsumo"
import { mediaIrradiacaoSolar } from "./calc/mediaIrradiacao"
import { potenciaDeGeracaoDeModulos } from "./calc/potenciaModulos"
import { totalDePaineis } from "./calc/totalDePaineis"

interface Idados {
    VarConsumo: number[]
    VarIrradiacaoSolar: number[]
    VarModeloPainel: string
    VarAreaPainel: number
    VarEficienciaPainel: number
    VarPotenciaModulo: number
}

class ReciverDataService {
    async execute(datas: Idados) {
        const resultConsumo = mediaConsumo(datas.VarConsumo)
        const resultIrradiacao = mediaIrradiacaoSolar(datas.VarIrradiacaoSolar)
        const resultPotenciaDeGeracao = potenciaDeGeracaoDeModulos(
            resultIrradiacao, datas.VarAreaPainel, datas.VarEficienciaPainel
        )
        const resultTotalPaineis = totalDePaineis(resultConsumo, resultPotenciaDeGeracao, datas.VarPotenciaModulo)

        return {
            resultConsumo,
            resultIrradiacao,
            resultPotenciaDeGeracao,
            resultTotalPaineis
        }
    }
}

export { ReciverDataService }