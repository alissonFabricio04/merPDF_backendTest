// Calcula a media de consumo
export function mediaConsumo(VarConsumo: number[]) {
    const somaConsumo = VarConsumo.reduce((acumulador, valor) => {
        acumulador += valor
        return acumulador
    })

    const mediaConsumo = somaConsumo/VarConsumo.length

    return mediaConsumo
}