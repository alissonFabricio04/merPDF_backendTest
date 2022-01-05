//=SOMA(C73*C74*C75*C76)
export function potenciaTotalMaximaSistema(
    VarTensaoFornecimento: number,
    VarCorrenteDisjuntor: number,
    VarFatorPotencia: number,
    VarRaiz3: number
) {
    const potenciaTotalMaxSistemaKWP = VarTensaoFornecimento * VarCorrenteDisjuntor * VarFatorPotencia * VarRaiz3

    return potenciaTotalMaxSistemaKWP
}