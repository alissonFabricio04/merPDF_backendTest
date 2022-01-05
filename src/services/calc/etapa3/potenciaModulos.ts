// calculo potencia de geracao de modulos
export function potenciaDeGeracaoDeModulos(
    VarIrradiacaoMedia: number,
    VarEficienciaPainel: number,
    VarAreaPainel: number,
) {
    const potenciaTotalModulo = VarIrradiacaoMedia * VarAreaPainel * VarEficienciaPainel * 30

    return potenciaTotalModulo
}