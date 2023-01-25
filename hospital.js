const maximizarTapabojas = (N, T, P, C) => {
    let auxiliar = new Array(N + 1).fill(0).map(() => new Array(P).fill(0));
    const tapabocas_maximos = new Array(N + 1).fill(0).map(() => new Array(P).fill(0));

    for (let n = 1; n <= N; n++) {
        for (let p = 0; p < P; p++) {
            if (p < C[n - 1]) {
                tapabocas_maximos[n][p] = tapabocas_maximos[n - 1][p]
            } else {
                tapabocas_maximos[n][p] = Math.max(tapabocas_maximos[n - 1][p], T[n - 1] + tapabocas_maximos[n - 1][p - C[n - 1]])

                if (tapabocas_maximos[n - 1][p] > T[n - 1] + tapabocas_maximos[n - 1][p - C[n - 1]]) {
                    tapabocas_maximos[n][p] = tapabocas_maximos[n - 1][p]
                    auxiliar[n][p] = 0

                } else {
                    tapabocas_maximos[n][p] = T[n - 1] + tapabocas_maximos[n - 1][p - C[n - 1]]
                    auxiliar[n][p] = 1
                }
            }
        }
    }

    let solucion = new Array(N - 1)
    console.log("-------------------------")
    solucion = mostrarResultados(auxiliar, N, P, C, solucion)
    console.log("-------------------------")

    console.log("tapabocas_maximos: ", tapabocas_maximos)
    console.log("solucion: ", solucion)
}

const mostrarResultados = (auxiliar, n, p, C, solucion = []) => {

    if (n === 0) {
        return solucion;
    } else if (auxiliar[n][p] == 0) {
        console.log("0")
        solucion[n] = 0
        mostrarResultados(auxiliar, n - 1, p, C, solucion)
    } else {
        console.log("1")
        solucion[n] = 1
        mostrarResultados(auxiliar, n - 1, p - C[n - 1], C, solucion)
    }
    return solucion
}

const P = 14
const T = [20, 16, 2]
const C = [6, 18, 5]
const N = T.length
maximizarTapabojas(N, T, P, C)