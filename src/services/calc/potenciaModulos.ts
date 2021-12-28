// calculo potencia de geracao de modulos
export function potenciaDeGeracaoDeModulos(
    VarIrradiacaoMedia: number,
    VarAreaPainel: number,
    VarEficienciaPainel: number
) {
    const potenciaTotalModulo = (VarIrradiacaoMedia * VarAreaPainel * VarEficienciaPainel) * 30

    return Number(potenciaTotalModulo)
}