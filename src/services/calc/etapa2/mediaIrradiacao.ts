// Calcula a media de irradiação
export function mediaIrradiacaoSolar(VarIrradiacaoSolar: number[]) {
    const somaIrradiacao = VarIrradiacaoSolar.reduce((acumulador, valor) => {
        acumulador += valor
        return acumulador
    })

    const mediaIrradiacao = somaIrradiacao/VarIrradiacaoSolar.length

    return mediaIrradiacao
}
