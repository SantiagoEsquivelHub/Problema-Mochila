const formarGrupos = (N = 0, K = 0, T = []) => {
    const resultados_maximos = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));

    // Rellenamos el arreglo
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            if (j === 0) {
                resultados_maximos[i][j] = 0;
            } else if (j === 1) {
                resultados_maximos[i][j] = T[i - 1] + resultados_maximos[i - 1][j]
            } else if (j > i) {
                resultados_maximos[i][j] = resultados_maximos[i][j - 1]
            } else {
                console.log("Math.max(T.slice(0, 3)): ", Math.max(...T.slice(i - j - 1, i)))
                console.log("T.slice(i - j - 1, i).length: ", T.slice(i - j - 1, i).length)
                resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + T[i - 1], Math.max(...T.slice(i - j - 1, i)) * T.slice(i - j - 1, i).length)

            }
        }
    }
    console.log("resultados_maximos: ", resultados_maximos)
}

/* const N1 = 10000;
let T1 = []
for (let i = 0; i < N1; i++) {
    T1.push(1)
} */

const T = [1, 15, 7, 9, 2, 5, 10]; //84
// const T = [1, 15, 7, 10, 2, 5, 10]; //85
// const T = [10, 20, 7, 1, 2, 5, 1]; //85
// const T = [10, 20, 7, 1]; //70
// const T = [10, 20, 7, 1, 2, 5]; //80
const K = 3
const N = T.length


const result = formarGrupos(N, K, T)
// maxRendimiento(N, K, T)

