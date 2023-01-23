const maximizarTapabojas = (N, T, P, C) => {
    const tapabocas_maximos = new Array(N + 1).fill(0).map(() => new Array(P).fill(0));

    for (let n = 1; n <= N; n++) {
        for (let p = 0; p < P; p++) {
            if (p < C[n - 1]) {
                tapabocas_maximos[n][p] = tapabocas_maximos[n - 1][p]
            } else {
                tapabocas_maximos[n][p] = Math.max(tapabocas_maximos[n - 1][p], T[n - 1] + tapabocas_maximos[n - 1][p - C[n - 1]])
            }
        }
    }

    console.log("tapabocas_maximos: ", tapabocas_maximos)
}

const P = 20
const T = [20, 16, 2]
const C = [6, 18, 5]
const N = T.length
maximizarTapabojas(N, T, P, C)