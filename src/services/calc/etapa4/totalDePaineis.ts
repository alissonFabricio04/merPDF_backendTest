export function totalDePaineis(
    VarConsumo: number,
    VarPotenciaTotalModulos: number,
    VarPotenciaModulo: number
) {
    const totalDeModulosCalculados = (VarConsumo / VarPotenciaTotalModulos) * 1.2
    const totalDeModulosAplicados = Math.ceil(totalDeModulosCalculados)

    const potenciaSistema = (VarPotenciaModulo * totalDeModulosAplicados) / 1000
    const potenciaInversor = potenciaSistema / 1.2


    return {
        totalDeModulosAplicados,
        potenciaSistema,
        potenciaInversor
    }
}