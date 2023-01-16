
export const ObtenerDiferencia = year =>{
    return new Date().getFullYear() - year
}

export const EvaluarMarca  = marca =>{
    let incremento = 0

    switch (marca) {
        case '1':
            incremento = 1.3
            break
        case '2':
            incremento = 1.15
            break
        case '3':
            incremento = 0.5
            break;
        default:
            break;
    }
    return incremento
}

export const  EvaluarPlan = plan =>{
    return (plan === '1') ? 1.2 : 1.5
}

export function FormatearDinero (dinero) {
    return dinero.toLocaleString('en-US',{
        style : 'currency',
        currency: 'USD'
    })
}