const maximizarTapabojas = (N, T, P, C, cant_tapabocas_minima) => {
    const costo_minimo = new Array(N + 1).fill(0).map(() => new Array(P).fill(0).map(() => new Array(cant_tapabocas_minima + 1).fill(0)))

    for (let n = 1; n <= N; n++) {
        for (let p = 0; p < P; p++) {
            for (let c = 1; c <= cant_tapabocas_minima; c++) {
                if (n === 0 && c > 0) {
                    costo_minimo[n][p][c] = -Infinity
                } else
                if (n >= 1 && p < C[n - 1]) {
                    // console.log(`costo_minimo[${n} - 1][${p}][${c}]: `, costo_minimo[n - 1][p][c])
                    costo_minimo[n][p][c] = costo_minimo[n - 1][p][c]
                } else if (n >= 1 && p >= C[n - 1]) {
                    console.log(`1: `, costo_minimo[n - 1][p][c])
                    console.log(`2: `, C[n - 1] + costo_minimo[n - 1][p - C[n - 1]][Math.max(0, cant_tapabocas_minima - c)])

                    costo_minimo[n][p][c] =
                        Math.min(
                            costo_minimo[n - 1][p][c],
                            C[n - 1] + costo_minimo[n - 1][p - C[n - 1]][Math.max(0, cant_tapabocas_minima - c)]
                            )
                }
            }
        }
    }

    console.log("costo_minimo: ", costo_minimo)

}

const P = 20
const T = [20, 16, 2]
const C = [6, 18, 5]
const N = T.length
const cant_tapabocas_minima = 2
maximizarTapabojas(N, T, P, C, cant_tapabocas_minima)